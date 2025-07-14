import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";


const useNowPlayingMovies = () => {
      const dispatch = useDispatch()


  // fetching data from TMDB API and updating movies store
  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?page=1',
        API_OPTIONS
      );
      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }
      const json = await data.json();
      // console.log(json);
      // console.log(json.results);
      
      dispatch(addNowPlayingMovies(json.results));

    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}


export default useNowPlayingMovies;