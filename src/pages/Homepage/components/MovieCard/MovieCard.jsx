import React from "react";
import "./MovieCard.style.css";

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
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
