import { useSelector } from "react-redux";
import useTrailerVideo from "../../../Hooks/useTrailerVideo";

const VideoBackground = ({ moviesID }) => {
  const trailerKey = useSelector((store) => store.movies?.trailerVideo);

  useTrailerVideo(moviesID);

  if (!trailerKey) {
    return (
      <div className="w-full aspect-video bg-black flex items-center justify-center">
        <p className="text-white text-lg">Loading trailer...</p>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&loop=1&playlist=${trailerKey}`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoBackground;
