import { useSelector } from "react-redux";
import MoviesList from "./MoviesCart/MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies?.nowPlayingMovies) return null;

  return (
    <div className="bg-black space-y-10 pt-10">
      <MoviesList title="Now Playing" movies={movies.nowPlayingMovies} />
      <MoviesList title="Upcoming" movies={movies.Upcoming} />
      <MoviesList title="Popular" movies={movies.popularMovies} />
      <MoviesList title="Top Rated" movies={movies.topRated} />
    </div>
  );
};

export default SecondaryContainer;
