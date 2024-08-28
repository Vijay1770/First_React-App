import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/FoodItems.jsx";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage.jsx";

function App() {
  let foodItems = ["Dal", "butter", "paneer", "potato", "tomato"];
  return (
    <>
      <h1>Healthy List</h1>
      {/* {foodItems} are the props we use it to not use foodItems array in different different places... */}
      <ErrorMessage foodItems={foodItems}></ErrorMessage>
      <FoodItems foodItems={foodItems}></FoodItems>
    </>
  );
}

export default App;
