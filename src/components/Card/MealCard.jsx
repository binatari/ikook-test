import React, { useState } from "react";
import "./MealCard.css";
const MealCard = () => {
  const [isFavourite, setIsFavourite] = useState(false);

  const changeFavourite = () => setIsFavourite(!isFavourite);
  return (
    <div className="meal-card">
      <div className="favourite-tab">
        <span className="category">Italian</span>
        {!isFavourite ? (
          <i class="lar la-heart la-lg" onClick={changeFavourite}></i>
        ) : (
          <i class="las la-heart la-lg" onClick={changeFavourite}></i>
        )}
      </div>
      <div className="price-tab">
        <span className="name">Grilled barbequue</span>
        <span className="price">20pp</span>
      </div>
    </div>
  );
};

export default MealCard;
