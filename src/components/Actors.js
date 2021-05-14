import React from 'react';
import { actors } from '../data';

const displayActors = actors.map((actor, ai) => {
  return(
    <div key={ai}>
      {actor.name}<br/>
      <ul>
        {actor.movies.map(( movie, mi) => <li key={mi}>{movie}</li>)}
      </ul>
      <br/>
    </div>
  )
})

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {displayActors}
    </div>
  );
};

export default Actors;