import { useDispatch, useSelector } from "react-redux";
import { lang } from "../../utils/languageConstant";
import { useRef } from "react";
import client from "../../utils/openAI";
import { API_OPTIONS } from "../../utils/constant";
import { addMoviesResult } from "../../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const myQuery = `
    Act as a movie recommendation system and suggest the best 5 movies for the query: "${searchText.current.value}". 
    Return only the movie names, comma-separated, without any additional text or explanation.
    Example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya.
  `;

    const response = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: myQuery },
      ],
    });

    console.log(response); 
    const gptMovies = response.choices?.[0]?.message?.content
      .split(",")
      .map((m) => m.trim());

    if (!gptMovies || gptMovies.length === 0) return;

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResult = await Promise.all(promiseArray);

    dispatch(
      addMoviesResult({ movieName: gptMovies, movieResult: tmdbResult })
    );
  };

  return (
    <div className="absolute top-[10%] left-0 w-full flex justify-center">
      <form
        className="flex w-full max-w-2xl bg-black py-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          className="flex-1 px-4 py-2 rounded-l bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700"
        />
        <button
          type="submit"
          className="bg-blue-700 font-semibold text-white px-4 py-2 rounded-r hover:bg-blue-800 transition"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
