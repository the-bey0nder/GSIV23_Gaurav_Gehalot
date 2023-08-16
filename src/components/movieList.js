import React, { useState, useEffect } from "react";
import MovieCard from "./movieCard";


//total movies are displayed
const MovieList = (props) => {
  const [movies, setMovies] = useState();
  console.log(props.movies);
  const Render = () => {
    if (movies) {
      return movies.length !== 0 ? (
        movies.map((movie) => <MovieCard key={movie.id} data={movie} />)
      ) : (
        <h2 className="error">SORRY THE REQUESTED MOVIE WAS NOT FOUND</h2>
      );
    }
  };

  useEffect(() => {
    setMovies(props.movies);
  }, [props]);

  return (
    <div>
      <div className="movie-grid">
        <Render />
      </div>
    </div>
  );
};

export default MovieList;
