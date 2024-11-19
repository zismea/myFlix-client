import React, { useState } from 'react';
import { MovieCard } from "../movie-card/movie-card"
import { MovieView } from "../movie-view/movie-view"

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Call Me By Your Name",
            description: "It's the summer of 1983, and 17-year-old Elio is spending the days with his family at their villa in Lombardy, Italy. He soon meets Oliver, who's working as an intern for Elio's father. They discover the heady beauty of awakening desire.",
            posterImage: "https://m.media-amazon.com/images/I/51AD-FLJLNL._AC_UF894,1000_QL80_.jpg",
            genre: "Drama",
            director: "Luca Guadagnino"
        },
        {
            id: 2,
            title: "Suspiria",
            description: "An American newcomer to a prestigious German ballet academy comes to realize that the school is a front for something sinister amid a series of grisly murders.",
            posterImage: "https://m.media-amazon.com/images/I/51KyhzQPMGL.__AC_SX300_SY300_QL70_ML2_.jpg",
            genre: "Horror",
            director: "Dario Argento"
        },
        {
            id: 3,
            title: "Mulholland Drive",
            description: "After a car wreck on Mulholland Drive renders a woman amnesiac, she and a Hollywood-hopeful search for clues and answers across Los Angeles in a twisting venture beyond dreams and reality.",
            posterImage: "https://i.ebayimg.com/images/g/MkoAAOSwzgBYxD8T/s-l1600.webp",
            genre: "Thriller",
            director: "David Lynch"
        },
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);
    const onMovieClick = (movie) => {
      setSelectedMovie(movie);
    };
    const onBackClick = () => {
      setSelectedMovie(null);
    };
    return (
      <div>
        {selectedMovie ? (
          <MovieView movie={selectedMovie} onBackClick={onBackClick} />
        ) : (
          <div>
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} onMovieClick={onMovieClick} />
            ))}
          </div>
        )}
      </div>
    );
  };
  export default MainView;