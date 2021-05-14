import React from 'react';
import { movies } from '../data';

const displayMovies = movies.map(( movie, mi) => {
    return (
      <div key={mi}>
        {movie.title}<br/>
        Playing at: {movie.time}<br/>
        <ul>
          {movie.genres.map(( genre, gi) => <li key={gi}>{genre}</li>)}
        </ul>
        <br/>
      </div>
    )
  })

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {displayMovies}
    </div>
  );
};

export default Movies;