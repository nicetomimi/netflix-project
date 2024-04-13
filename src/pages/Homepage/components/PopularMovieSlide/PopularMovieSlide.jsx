import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/UsePopularMovies";
import "react-multi-carousel/lib/styles.css";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";
import LoadingSpinner from "../../../../common/LoadingSpinner/LoadingSpinner";
import Alert from "react-bootstrap/Alert";

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider
        title="실시간 인기 영화"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};
export default PopularMovieSlide;
