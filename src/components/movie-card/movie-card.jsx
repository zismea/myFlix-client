import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
export const MovieCard = ({ movie, onAddFavorite, onRemoveFavorite }) => {

  return (
    <Card>
      <Card.Img variant="top" src={movie.ImagePath}/>
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Director.Name}</Card.Text>
        <Card.Text>{movie.Description}</Card.Text>
        <Card.Text>{movie.Genre.Name}</Card.Text>
        <Link to ={`/movies/${encodeURIComponent(movie._id)}`}>
        <Button variant="link">Open</Button>
        </Link> 
        {/* favorite button */}
        <Button 
          variant="primary"
          onClick={onAddFavorite}>
            Add to Favorites 
          </Button>
          {/* Remove Favorite Button */}
          <Button 
          variant="danger"
          onClick={onRemoveFavorite}>
            Remove from Favorites
          </Button>
      </Card.Body>
    </Card>
  );
};

MovieCard.PropTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    ImagePath: PropTypes.string.isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string
    }).isRequired,
    Description: PropTypes.string,
    Genre: PropTypes.shape({
      Name: PropTypes.string
    })
  }).isRequired,
};