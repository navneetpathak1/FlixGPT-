import MoviesCart from "./MoviesCart";

const MoviesList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-6">
      <h1 className="text-2xl font-semibold text-white mb-3">{title}</h1>

      <div className="overflow-x-auto overflow-y-hidden">
        <div className="flex space-x-4 scrollbar-hide">
          {movies.map((movie) => (
            <MoviesCart key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
