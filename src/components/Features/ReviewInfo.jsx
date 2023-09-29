import React from "react";
import "./ReviewInfo.css";
const ReviewInfo = ({ name, rating, date, review }) => {
  return (
    <div className="review-info">
      <p className="reviewer">{name}</p>
      <div className="review-stars">
      <i class="las la-star la-lg"></i> 
      <i class="las la-star la-lg"></i> 
      <i class="las la-star la-lg"></i> 
      <i class="las la-star la-lg"></i> 
      <i class="las la-star la-lg"></i> 
      </div>
      <p className="review">{review}</p>
      <p className="review-date">{date}</p>
    </div>
  );
};

export default ReviewInfo;
