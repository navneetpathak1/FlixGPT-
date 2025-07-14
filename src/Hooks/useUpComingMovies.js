import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      dispatch(addUpcomingMovies(json.results));

    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    getUpcomingMovies();
  }, [dispatch]);
};

export default useUpcomingMovies;
