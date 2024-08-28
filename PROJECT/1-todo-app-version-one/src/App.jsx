import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    <center >
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div class="container text-center">
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
        <AddTodo></AddTodo>
      </div>
    </center>
  );
}
export default App;
