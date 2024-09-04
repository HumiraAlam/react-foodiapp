import React from "react";

export default function FoodCard(props) {
  const { heading, details, image, price } = props;

  return (
    <div className="foodcard">
    
      <h3>{heading}</h3>
      <p>{details}</p>
     
      <p>{price}</p>
    </div>
  );
}
