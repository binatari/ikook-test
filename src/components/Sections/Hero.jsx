import React from "react";
import Button from "../Button/Button";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero container mx-auto">
      <div className="hero-title">
        <div>
        <h1 className="text-lg">Braised Chicken With Lemon and olives</h1>
        <p>
          3courses included . 10 menus to choose . <a href="#">italian</a>{" "}
        </p>
        </div>
        <div className="hero-cta">
         <Button className="blocked-light-yellow">
         <i class="las la-external-link-alt la-lg"></i>
            Share
         </Button>
         <Button className="blocked-light-yellow">
         <i class="lar la-heart la-lg"></i>
            Save
         </Button>
        </div>
      </div>
      <div className="hero-image-grid">
        <div className="hero-sub-grid-1">
        <img src="/assets/food/pancakes.jpg"/>
        </div>
        <div className="hero-sub-grid-2">
        <img src="/assets/food/spread.jpg"/>
        <img src="/assets/food/spread-2.jpg"/>
        <img src="/assets/food/slides.jpg"/>
        <img src="/assets/food/burger.jpg"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
