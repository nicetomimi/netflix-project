import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/UsePopularMovies";
import Alert from "react-bootstrap/Alert";
import "./Banner.style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "react-bootstrap/Container";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log("popular", data);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
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

    <Carousel responsive={responsive} >
      <div
        style={{
          backgroundImage:
            "url(" +
            `https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data?.results[0].poster_path}` +
            ")",
        }}
        className="banner-area"
      >
        <Container>
        <div className="banner-text-area">
          <h1>{data?.results[0].title}</h1>
          <p>{data?.results[0].overview}</p>
        </div>
        </Container>
      </div>

      <div
        style={{
          backgroundImage:
            "url(" +
            `https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data?.results[1].poster_path}` +
            ")",
        }}
        className="banner-area"
      >
        <Container>
        <div className="banner-text-area">
          <h1>{data?.results[1].title}</h1>
          <p>{data?.results[1].overview}</p>
        </div>
        </Container>
      </div>

      <div
        style={{
          backgroundImage:
            "url(" +
            `https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data?.results[2].poster_path}` +
            ")",
        }}
        className="banner-area"
      >
        <Container>
        <div className="banner-text-area">
          <h1>{data?.results[2].title}</h1>
          <p>{data?.results[2].overview}</p>
        </div>
        </Container>
      </div>
    </Carousel>
  );
};

export default Banner;
