import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/UsePopularMovies";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import "./PopularMovieSlide.style.css";
import MovieCard from "../MovieCard/MovieCard";

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  if (isLoading) {
    <h1>로딩중</h1>;
  }
  if (isError) {
    <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <Container justify-content-md>
      <div>
        <div className="title">Popular Movies</div>
        <Carousel
          infinite={true}
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
          responsive={responsive}
        >
          {data.results.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </Carousel>
      </div>
    </Container>
  );
};
export default PopularMovieSlide;
