import React from 'react';
import { useSelector } from 'react-redux';
import MoviesList from '../Containers/MoviesCart/MoviesList';

const GptSearchSuggestion = () => {
  const { gptMoviesName, gptMovies } = useSelector((store) => store.gpt);

  if (!gptMoviesName) return null;

  return (
    <div className="bg-gray-900 text-white p-4 mt-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Recommended Movies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {gptMoviesName.map((name, index) => (
          <MoviesList
            key={name}
            title={name}
            movies={gptMovies[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptSearchSuggestion;
