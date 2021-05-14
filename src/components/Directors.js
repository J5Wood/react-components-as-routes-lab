import React from 'react';
import { directors } from '../data';

const displayDirectors = directors.map(( director, di) => {
  return (
    <div key={di}>
      {director.name}<br />
      <ul>
        {director.movies.map(( movie, mi) => <li key={mi}>{movie}</li>)}
      </ul>
      <br/>
    </div>
  )
}) 

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {displayDirectors}
    </div>
  );
}

export default Directors