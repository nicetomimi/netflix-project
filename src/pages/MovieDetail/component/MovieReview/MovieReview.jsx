import React from "react";
import "./MovieReview.style.css";
import { useMovieReviewQuery } from "../../../../hooks/UseMovieReview";
import { useParams } from "react-router-dom";
import ReviewCard from "../ReviewCard/ReviewCard";
import { Row, Col } from "react-bootstrap";

const MovieReview = () => {
  const { id } = useParams();
  const { data: review } = useMovieReviewQuery(id);
  console.log("review", review);

  return (
    <div>
      <div className="review-title">리뷰({review?.length})</div>
      {review?.length === 0 ? (
        <div>아직 작성된 리뷰가 없습니다</div>
      ) : (
        <Row>
          {review?.map((item, index) => (
            <Col lg={4} xs={12} key={index}>
              <ReviewCard item={item} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default MovieReview;
