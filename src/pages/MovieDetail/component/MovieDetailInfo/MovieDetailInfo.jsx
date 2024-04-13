import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./MovieDetailInfo.style.css";
import Badge from "react-bootstrap/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import MovieModal from "../MovieModal/MovieModal";
import { useMovieVideoQuery } from "../../../../hooks/UseMovieVideo";

const MovieDetailInfo = ({ movie, id }) => {
  const {data: video} = useMovieVideoQuery({id});
console.log("video",video)

  return (
    <Container>
      <Row className="info-area">
        <Col lg={3} xs={12}>
          <img
            src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie?.poster_path}`}
            className="poster-image"
            alt="poster"
          />
        </Col>
        <Col lg={9} xs={12}>
          <div className="genre-area">
            <ul className="genre">
              {movie.genres.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </div>
          <div className="title">{movie.title}</div>
          <div className="sub-title">
            <div>
              {movie.adult ? (
                <Badge bg="danger">18</Badge>
              ) : (
                <Badge bg="warning" text="dark">
                  ALL
                </Badge>
              )}
            </div>
            <div>{movie.runtime}분</div>
            <div className="date">{movie.release_date.substr(0, 4)}</div>
            <div>
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
              {movie.vote_average.toFixed(1)}
            </div>
          </div>

          <div className="tagline">{movie.tagline}</div>
          <div className="summary">{movie.overview}</div>
          <MovieModal video={video}/>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetailInfo;
