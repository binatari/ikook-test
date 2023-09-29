import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <i class="las la-shopping-cart la-lg"></i>
      <span className="text-sm">Login</span>
      <div className="profile-button">
        <button className="appearance-none ">
          <i class="las la-user la-lg"></i>
          <i class="las la-bars la-lg"></i>
        </button>
      </div>
    </div>
  );
};

export default Profile;
