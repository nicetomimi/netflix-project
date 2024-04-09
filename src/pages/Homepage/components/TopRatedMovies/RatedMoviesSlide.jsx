import React from "react";
import { useRatedMoviesQuery } from "../../../../hooks/UseTopRatedMovies";
import "react-multi-carousel/lib/styles.css";
import Alert from "react-bootstrap/Alert";
import ClipLoader from "react-spinners/ClipLoader";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";

const RatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useRatedMoviesQuery();
  console.log("rated",data)

  if (isLoading) {
    return <ClipLoader color="#000000" size={150} />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider
        title="Top Rated Movies"
        movies={data.results}
        responsive={responsive}
      />
         </div>
  );
};
export default RatedMovieSlide;
