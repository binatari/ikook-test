import React from "react";
import ChefProfile from "../Features/ChefProfile";
import "./ChefInfo.css";
import ChefAvailability from "../Features/ChefAvailability";
const ChefInfo = () => {
  return (
    <div className="chef-info container mx-auto">
      <div className="chef-overview">
        <ChefProfile />
        <ChefAvailability />
      </div>
      <div>

      </div>
    </div>
  );
};

export default ChefInfo;
