import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/UsePopularMovies";
import "react-multi-carousel/lib/styles.css";
import Alert from "react-bootstrap/Alert";
import ClipLoader from "react-spinners/ClipLoader";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  
  if (isLoading) {
    return <ClipLoader color="#000000" size={150} />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider
        title="Popular Movies"
        movies={data.results}
        responsive={responsive}
      />
         </div>
  );
};
export default PopularMovieSlide;
