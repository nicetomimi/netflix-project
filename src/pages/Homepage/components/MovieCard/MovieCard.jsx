import React from "react";
import "./MovieCard.style.css";
import Badge from "react-bootstrap/Badge";

const MovieCard = ({ movie }) => {
  return (
    <div className="card-wrap">
      <div
        className="card-area"
        style={{
          backgroundImage:
            "url(" +
            `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}` +
            ")",
        }}
      >
        <div className="overlay">
          <div className="card-title">{movie.title}</div>
          <div className="date">{movie.release_date.substr(0, 4)}</div>

          <div className="sub-info">
            {movie.adult ? (
              <Badge bg="danger">18</Badge>
            ) : (
              <Badge bg="warning" text="dark">
                ALL
              </Badge>
            )}
            {movie.genre_ids.map((id) => (
              <Badge bg="light" text="dark">
                {id}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
