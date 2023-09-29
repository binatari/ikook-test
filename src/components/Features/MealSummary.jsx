import React from "react";
import TextBox from "../Input/TextBox";
import "./MealSummary.css";
import Button from "../Button/Button";
import { useCartProvider } from "../../context/updateCartContext";

const MealSummary = () => {
 const {fullPrice, cart} = useCartProvider()
  return (
    <div className="heavy-shadow meal-summary">
      <h2 className="primary">{fullPrice}pp</h2>
      <p className="label">Location</p>
      <TextBox />
      <p className="label">Event Date</p>
      <TextBox type="date" />
      <div className="row-list">
        <span>10 Guests * 20</span>
        <span>50</span>
      </div>
      <div className="row-list">
        <span>Platform fee 2.5%</span>
        <span>20</span>
      </div>
      <div className="row-list total">
        <span>Platform fee 2.5%</span>
        <span>20</span>
      </div>
      <Button className="blocked-yellow">Proceed to Cart({cart.length})</Button>
    </div>
  );
};

export default MealSummary;
