import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, [dispatch]);
};

export default useTopRatedMovies;
