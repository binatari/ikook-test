import React from "react";
import "./Button.css";
const Button = ({ onClick = () => {}, className = "", children, ...props }) => {
  return (
    <button className={`appearance-none ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
