import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useTrailerVideo = (moviesID) => {
  const dispatch = useDispatch();

  //   getting trailer video and updating the store
  const getMovieVideo = async () => {
    if (!moviesID) {
      console.error("moviesID is undefined");
      return;
    }

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${moviesID}/videos?language=en-US`,
      API_OPTIONS
    );

    const json = await response.json();
    // console.log(json);

    if (!json.results || json.results.length === 0) {
      console.warn("No videos found for this movie.");
      return;
    }

    const trailerVideo =
      json.results.find((video) => video.type === "Trailer") || json.results[0];

    dispatch(addTrailerVideo(trailerVideo.key));
  };

  useEffect(() => {
    getMovieVideo();
  }, [moviesID]);
};

export default useTrailerVideo;
