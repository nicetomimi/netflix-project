import React, { useState } from "react";
import "./ReviewCard.style.css";

const ReviewCard = ({ item }) => {
  const [more, setMore] = useState(false);

  return (
    <div className="review-card">
      <div>{item?.author}</div>
      <div className={`review-content ${more ? "open" : "close"}`}>
        {item?.content}
      </div>
      <button className="more-btn" onClick={()=>setMore(!more)}>{more ? "닫기" : "더보기"}</button>
    </div>
  );
};

export default ReviewCard;
