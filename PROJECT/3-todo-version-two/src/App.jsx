import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoLists from "./components/TodoLists";

import "./App.css";

function App() {
  const todolists = [
    {
      name: "Buying...",
      dueDate: "4/08/2024",
    },
    {
      name: "Taking...",
      dueDate: "6/08/2024",
    },
    {
      name: "Trying...",
      dueDate: "9/08/2024",
    },
  ];
  
  return (
    <div class="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoLists TodoLists={todolists}></TodoLists>
    </div>
  );
}
export default App;
