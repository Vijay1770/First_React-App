import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoLists from "./components/TodoLists";
import WelcomeMessage from "./components/WelcomeMsg";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-item-store";

function App() {
  const initialTodoItems = [
    // {
    //   name: "Buying...",
    //   dueDate: "4/08/2024",
    // },
    // {
    //   name: "Taking...",
    //   dueDate: "6/08/2024",
    // },
    // {
    //   name: "Trying...",
    //   dueDate: "9/08/2024",
    // },
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
  const defaultTodoItems=[{}]
  return (
    <TodoItemsContext.Provider value={defaultTodoItems}>
    <div class="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
       <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
      <TodoLists
        TodoLists={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoLists>
    </div>
    </TodoItemsContext.Provider>
  );
}
export default App;
