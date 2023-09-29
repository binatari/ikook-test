import React, { useState } from "react";
import "./HomeNav.css";
import SearchBar from "../SearchBar/SearchBar";
import Profile from "../Features/Profile";
const HomeNav = () => {
  const [activeHam, setActiveHam] = useState(false);
  const menuItems = (
    <>
      <a href="#">Home</a>
      <a href="#">Portfolio</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </>
  );
  return (
    <div className="navbar-container light-shadow">
      <nav>
        <div className="nav-container">
          <img src="/assets/logo.png"/>
          <SearchBar/>
          <Profile/>
          <button
            className={activeHam ? "hamburger active-hamburger" : "hamburger"}
            onClick={() => setActiveHam(!activeHam)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      {activeHam && <div className="nav-dropdown">{menuItems}</div>}
    </div>
  );
};

export default HomeNav;
