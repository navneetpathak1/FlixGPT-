import { useSelector } from "react-redux";
import VideoBackground from "./videos/VideoBackground";
import VideoTitle from "./videos/VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovies = movies[0];
  const { original_title, overview, id } = mainMovies;

  return (
    <div className="relative w-full h-full">
      <VideoBackground moviesID={id} />

      <div className="absolute top-0 left-0 w-full h-full flex items-end bg-gradient-to-r from-black via-transparent to-transparent">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;
