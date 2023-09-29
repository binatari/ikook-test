import React from "react";
import "./MenuSelection.css";
import Button from "../Button/Button";
import MealCourseMenu from "../Features/MealCourseMenu";
import { courseMeal } from "../../lib/data";
import MealSummary from "../Features/MealSummary";
import { CartContextProvider } from "../../context/updateCartContext";
const MenuSelection = () => {
  return (
    <div className="menu-selection container mx-auto">
      <div className="title">
        <div>
          <h1 className="text-lg">Chef Titilayo John</h1>
          <div>
            <div>
              <span className="text-sm">
                {" "}
                <i class="las la-map-marker-alt la-lg"></i> London{" "}
              </span>
              <span className="text-sm">
                {" "}
                <i class="las la-star la-lg"></i> 4.6 (23 Reviews){" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <CartContextProvider>
      <div className="order-section">
        <div className="selection-tab">
          <div className="menu-tabs">
            <Button className="blocked-yellow">Sharing Menu</Button>
            <Button className="blocked-light-yellow">Sharing Menu</Button>
          </div>
          {courseMeal.map((course, index) => (
            <MealCourseMenu header={course.header} options={course.options} index={index} />
          ))}
        </div>
        <div className="order-tab">
         <MealSummary/>
        </div>
      </div>
      </CartContextProvider>
    </div>
  );
};

export default MenuSelection;
