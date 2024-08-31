import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/FoodItems.jsx";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage.jsx";
import Container from "./components/container.jsx";
import FoodInput from "./components/FoodInput.jsx";

function App() {
  // let [textToShow, setTextstate] = useState();
  let [foodItems, setFoodItems] = useState(["Dal", "butter", "paneer"]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem]; //Thhis spred operator help to get the whole values of previous arrray...
      setFoodItems(newItems);
    }
    // setTextstate(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="my-heading">Healthy List</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        {/* {foodItems} are the props we use it to not use foodItems array in different different places... */}
        <ErrorMessage foodItems={foodItems}></ErrorMessage>
        <FoodItems foodItems={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
