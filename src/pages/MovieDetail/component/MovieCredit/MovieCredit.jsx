import React from "react";
import "./MovieCredit.style.css";
import { useMovieCreditQuery } from "../../../../hooks/UseMovieCredit";
import { useParams } from "react-router-dom";
import CreditCard from "../CreditCard/CreditCard";
import { Row, Col } from "react-bootstrap";

const MovieCredit = () => {
  const { id } = useParams();
  const { data: credit } = useMovieCreditQuery(id);
  console.log("credit", credit);

  return (
    <div>
      <div className="credit-title">감독/출연</div>
      
        <Row>
          {credit?.cast.slice(0,12).map ((item, index) => (
            <Col lg={1} xs={6} key={index}>
              <CreditCard item={item} />
            </Col>
          ))}
        </Row>
        <button className="more-btn">더보기</button>
    </div>
  );
};

export default MovieCredit;
