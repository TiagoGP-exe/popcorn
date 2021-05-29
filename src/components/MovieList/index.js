import React from 'react';
import { MovieCard } from '../MovieCard';
import './style.css';

const MovieList = () => {
  return (
    <div className="container">
      <div className="list">
        <MovieCard />
      </div>
    </div>
  )
}

export default MovieList;