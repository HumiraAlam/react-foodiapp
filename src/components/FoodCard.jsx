import React from "react";

export default function FoodCard(props) {
  const { heading, details, image, price } = props;

  return (
    <div className="food-card">
      <img src={image} />
      <div>
        <h4>{heading}</h4>
        <p>{details}</p>
        <span>${price}</span>
      </div>
    </div>
  );
}
