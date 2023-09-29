import React from "react";
import "./ChefProfile.css";
import Button from "../Button/Button";
const ChefProfile = () => {
  return (
    <div className="chef-profile">
      <div className="bio">
        <div className="chef-profile-title">
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
      </div>
      <p className="chef-summary">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum facilis
        nulla, mollitia aliquam accusantium expedita quos magnam sint iusto
        beatae corporis odio labore hic explicabo libero perspiciatis culpa
        voluptate facere.
      </p>
      <a className="see-more">See more</a>
      <div className="meal-info">
        <div>
          <span className="text-sm">
            Chef at Home
            <i class="las la-map-marker-alt la-lg"></i>{" "}
          </span>
          <span className="text-sm">
            Large Event
            <i class="las la-map-marker-alt la-lg"></i>{" "}
          </span>
          <span className="text-sm">
            Meal Prep
            <i class="las la-map-marker-alt la-lg"></i>{" "}
          </span>
          <span className="text-sm">
           +3 More
            <i class="las la-map-marker-alt la-lg"></i>{" "}
          </span>
        </div>
      </div>
      <Button className="grey-outline">
        View Profile
      </Button>
    </div>
  );
};

export default ChefProfile;
