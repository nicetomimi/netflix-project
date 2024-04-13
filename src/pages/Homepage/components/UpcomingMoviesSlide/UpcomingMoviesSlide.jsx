import React from "react";
import { useUpcomingMoviesQuery } from "../../../../hooks/UseUpcomingMovies";
import "react-multi-carousel/lib/styles.css";
import Alert from "react-bootstrap/Alert";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";
import LoadingSpinner from "../../../../common/LoadingSpinner/LoadingSpinner";

const UpcomingMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();
  console.log("upcoming",data)

  if (isLoading) {
    return <LoadingSpinner/>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider
        title="상영 예정작"
        movies={data.results}
        responsive={responsive}
      />
         </div>
  );
};
export default UpcomingMovieSlide;
