import React, { useState } from "react";
import "./MealCourseMenu.css";
import CheckBox from "../Input/CheckBox";
import { useCartProvider } from "../../context/updateCartContext";

const MealCourseMenu = ({ options = [], header = "", index = 0 }) => {
  const [isActive, setIsActive] = useState();
  const {updateCart} = useCartProvider()
  return (
    <div className="meal-course-menu">
      <div className="meal-course-menu-title">
        <h1 className="text-lg">{header}</h1>
        <p>
          Extra dish cost <a href="#">$1PP</a>{" "}
        </p>
      </div>
      {options.map((option, i) => (
        <CheckBox
          header={option.header}
          body={option.body}
          onClick={() => {
            setIsActive(i)
            updateCart(index, {
                id:index,
                ...option
            })
        }}
          isActive={isActive == i}
        />
      ))}
    </div>
  );
};

export default MealCourseMenu;
