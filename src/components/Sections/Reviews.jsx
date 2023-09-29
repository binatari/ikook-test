import React from "react";
import "./Reviews.css";
import { reviews } from "../../lib/data";
import ReviewInfo from "../Features/ReviewInfo";
import Button from "../Button/Button";
const Reviews = () => {
  return (
    <div className="container mx-auto">
    <div className="reviews ">
      <h3>Reviews</h3>
      <div className="review-scale"></div>
      <div>
        <div className="review">
          {reviews.map((review) => (
            <ReviewInfo {...review} />
          ))}
        </div>
        <Button className="grey-outline">View all reviews (110)</Button>
      </div>
    </div>
    </div>

  );
};

export default Reviews;
