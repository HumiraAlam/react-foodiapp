import React from "react";
import FoodCard from "./FoodCard";

export default function Main({searchValue}) {
  const foodData = [
    {
      name: "Boilded Egg",
      price: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/egg.png",
      type: "breakfast",
    },
    {
      name: "RAMEN",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/ramen.png",
      type: "lunch",
    },
    {
      name: "GRILLED CHICKEN",
      price: 45,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/chicken.png",
      type: "dinner",
    },
    {
      name: "CAKE",
      price: 18,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/cake.png",
      type: "breakfast",
    },
    {
      name: "BURGER",
      price: 23,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/burger.png",
      type: "lunch",
    },
    {
      name: "PANCAKE",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/pancake.png",
      type: "dinner",
    },
  ];
// to filter data
  const filterArr= foodData.filter((food)=>{
    return food.name.toUpperCase().includes(searchValue.toUpperCase());
  })

  return (
    
      <div className="main">
        {(filterArr.length) ? (filterArr.map((data) => {
          return (
           
              <FoodCard
                key={data.name}
                image={data.image}
                price={data.price}
                heading={data.name}
                details={data.text}
              />
            
          );
        })
      ): (
        <h2 style={{ color: "white", fontSize: "100px", textAlign: "center" }}>
          No Data found
        </h2>
      )}
    </div>
  );
}

