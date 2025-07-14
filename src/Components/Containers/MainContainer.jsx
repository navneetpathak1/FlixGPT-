import { useSelector } from "react-redux";
import VideoBackground from "./videos/VideoBackground";
import VideoTitle from "./videos/VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // If movies are not loaded, render nothing
  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];
  if (!mainMovie) return null;

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full h-full">
      {/* Video Background */}
      <VideoBackground moviesID={id} />

      {/* Gradient overlay and title */}
      <div className="absolute top-0 left-0 w-full h-full flex items-end bg-gradient-to-r from-black via-transparent to-transparent">
        <div className="p-8 max-w-2xl">
          <VideoTitle title={original_title} overview={overview} />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
