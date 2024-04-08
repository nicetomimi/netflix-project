import React from "react";
import "./MovieSlider.style.css";
import Carousel from "react-multi-carousel";
import Container from "react-bootstrap/Container";
import MovieCard from "../MovieCard/MovieCard";

const MovieSlider = ({ title, movies, responsive }) => {
  return (
    <div>
      <Container justify-content-md>
        <div className="title">{title}</div>

        <Carousel
          infinite={true}
          centerMode={true}
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
          responsive={responsive}
        >
          {movies.map((movie, index) => (
            <MovieCard movie={movie} key={index}/>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default MovieSlider;
