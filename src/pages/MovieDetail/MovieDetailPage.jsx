import React from "react";
import { useMovieDetailQuery } from "../../hooks/UseMovieDetail";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import { Alert } from "bootstrap";
import { useParams } from "react-router-dom";
import MovieDetailInfo from "./component/MovieDetailInfo/MovieDetailInfo";

const MovieDetailPage = () => {
  const { id } = useParams();
  const {
    data: movie,
    isLoading,
    isError,
    error,
  } = useMovieDetailQuery({ id });
  console.log("detail", movie);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(" +
            `https://media.themoviedb.org/t/p/w1920_and_h800_bestv2${movie?.backdrop_path}` +
            ")",
        }}
        className="banner-area"
      ></div>
      <MovieDetailInfo movie={movie} id={id} />
    </div>
  );
};

export default MovieDetailPage;
