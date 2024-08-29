import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/FoodItems.jsx";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage.jsx";
import Container from "./components/container.jsx";

function App() {
  let foodItems = ["Dal", "butter", "paneer", "potato", "tomato"];
  return (
    <>
    <Container>
      <h1 className="my-heading">Healthy List</h1>
      {/* {foodItems} are the props we use it to not use foodItems array in different different places... */}
      <ErrorMessage foodItems={foodItems}></ErrorMessage>
      <FoodItems foodItems={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>
        Good food is more than just sustenance; it’s a celebration of flavor, culture, and nourishment. It encompasses a rich array of tastes and textures, crafted with fresh, high-quality ingredients that delight the senses and fuel the body.</p>
      </Container>
      </>
  );
}

export default App;
