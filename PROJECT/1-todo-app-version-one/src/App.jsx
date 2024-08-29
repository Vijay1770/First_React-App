import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    <div class="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div class="my-items">
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
      <AddTodo></AddTodo>
    </div>
  );
}
export default App;
