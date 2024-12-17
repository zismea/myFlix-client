import { useParams } from "react-router";
import { Link } from "react-router-dom"
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((m) => m._id === movieId);
  return (
    <div>
      <div>
        <img className="w-100" src={movie.ImagePath} alt={movie.Title} />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.Title}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.Description}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.Director.Name}</span>
      </div>
      <div>
        <span>Genre: </span>
          <span>{movie.Genre.Name}</span>
      </div>
      <button 
      onClick={onBackClick}
      className="back-button"
      style={{ cursor: "pointer" }}
      >
        Back
      </button>
      <Link to={'/'}>
      <button className="back-button">Back</button>
      </Link>
    </div>
  );
};