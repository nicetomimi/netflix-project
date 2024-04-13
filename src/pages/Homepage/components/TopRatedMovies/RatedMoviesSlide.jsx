import React from "react";
import { useRatedMoviesQuery } from "../../../../hooks/UseTopRatedMovies";
import "react-multi-carousel/lib/styles.css";
import Alert from "react-bootstrap/Alert";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";
import LoadingSpinner from "../../../../common/LoadingSpinner/LoadingSpinner";


const RatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useRatedMoviesQuery();
  console.log("rated",data)

  if (isLoading) {
    return <LoadingSpinner/>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider
        title="명불허전 명작"
        movies={data.results}
        responsive={responsive}
      />
         </div>
  );
};
export default RatedMovieSlide;
