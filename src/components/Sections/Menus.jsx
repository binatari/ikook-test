import React from "react";
import "./Menus.css";
import MealCard from "../Card/MealCard";
const Menus = () => {
  return (
    <div className="container mx-auto">
      <div className="menus ">
        <h3>Menus</h3>
        <div className="meal-grid">
          <MealCard />
          <MealCard />
          <MealCard />
        </div>
      </div>
    </div>
  );
};

export default Menus;
