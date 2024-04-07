import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/UsePopularMovies";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import MovieCard from "../MovieCard/MovieCard";
import "./PopularMovieSlide.style.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
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

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log("popular-c", data);

  if (isLoading) {
    <h1>로딩중</h1>;
  }
  if (isError) {
    <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <Container justify-content-md>
      <div className="title">Popular Movies</div>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        responsive={responsive}
      >
        <div className="carousel-area">
          {data?.results.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </div>
      </Carousel>
    </Container>
  );
};
export default PopularMovieSlide;
