import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://thawing-shore-57130-3839bdb5f582.herokuapp.com/movies")
    .then((response) => response.json())
    .then((data) => {
      const moviesFromApi = data.map((doc) => {
        return {
          id: doc._id,
          Title: doc.Title,
          Description: doc.Description,
          Genre: {
            Name: doc.Genre.Name,
            Description: doc.Genre.Description
          },
          Director: {
            Name: doc.Director.Name,
            Bio: doc.Director.Bio,
            Birthyear: doc.Director.Birthyear,
            Deathyear: doc.Director.Deathyear
          },
          Imagepath: doc.Imagepath
          }
      })

      setMovies(moviesFromApi);
    });
  }, []);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
        key={movie.id}
        movie={movie}
        onMovieClick={(newSelectedMovie) => {
          setSelectedMovie(newSelectedMovie);
        }}
        />
      ))}
    </div>
  );
};