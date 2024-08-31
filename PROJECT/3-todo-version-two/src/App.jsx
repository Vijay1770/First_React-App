import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoLists from "./components/TodoLists";
import WelcomeMessage from "./components/WelcomeMsg";
import "./App.css";
import { useState } from "react";

function App() {
  const initialTodoItems = [
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

  const [todoItems, setTodoItems] = useState(initialTodoItems);
  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];
    setTodoItems(newTodoItems);
  };
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <div class="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoLists
        TodoLists={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoLists>
    </div>
  );
}
export default App;
