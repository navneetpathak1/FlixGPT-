import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  // fetching data from TMDB API and updating movies store
  const getPopularMovies = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      dispatch(addPopularMovies(json.results));

    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    getPopularMovies();  // Call the fetch function here
  }, [dispatch]);
};

export default usePopularMovies;
