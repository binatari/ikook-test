import React from "react";
import "./CheckBox.css";

const CheckBox = ({
  isActive = false,
  header = "",
  body = "",
  onClick = () => {},
}) => {
  return (
    <div
      onClick={onClick}
      className={`checkbox ${isActive ? "checkbox-active" : ""}`}
    >
      <div className="checkmark">
        <i class="las la-check la-lg"></i>
      </div>
      <div className="check-text">
        <p className="header">{header}</p>
        <p className="body">{body}</p>
      </div>
    </div>
  );
};

export default CheckBox;
