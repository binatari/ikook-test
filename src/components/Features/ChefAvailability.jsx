import React from "react";
import Button from "../Button/Button";
import "./ChefAvailability.css";
const ChefAvailability = () => {
  return (
    <div className="chef-availability">
      <div className="header">
      <i class="lar la-gem la-2x"></i>
        <div>
          <div>
            <p className="text-bold"> Congratulations, she's available</p>
            <p>Chef Titilayo is usually fully booked </p>
          </div>
        </div>
      </div>

      <p className="cta-info text-bold">
        Want to request a personalised menu based on your requirements?
      </p>
      <p className="message-precept">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum facilis
        nulla, mollitia aliquam accusantium expedita quos magnam sint iusto
        beatae corporis odio labore hic explicabo libero perspiciatis culpa
        voluptate facere.
      </p>

      <Button className="grey-outline">Message Chef</Button>
    </div>
  );
};

export default ChefAvailability;
