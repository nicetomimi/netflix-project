import React from "react";
import "./MovieCard.style.css";
import Badge from "react-bootstrap/Badge";
import { useMovieGenreQuery } from "../../hooks/UseMovieGenre";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery(); //여기서 id 보여지니까 여기에 data 불러오고
  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  }; //id에 name 보여지는 함수 만들어 주기

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

          <div className="sub-title">
            <div className="date">{movie.release_date.substr(0, 4)}</div>
            <div>
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
              {movie.vote_average.toFixed(1)}
            </div>
          </div>
          
          <div>
                {" "}
                {movie.adult ? (
                  <Badge bg="danger">18</Badge>
                ) : (
                  <Badge bg="warning" text="dark">
                    ALL
                  </Badge>
                )}
              </div>

          <div className="sub-info">
            <ul className="genre">
              {showGenre(movie.genre_ids).map((id) => (
                <li>{id}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
