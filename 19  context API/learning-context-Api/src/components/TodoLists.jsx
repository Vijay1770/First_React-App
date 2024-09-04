import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";
import TodoItem from "./TodoItem";

const TodoLists = ({ TodoLists, onDeleteClick }) => {
  const TodoItems = useContext(TodoItemsContext);
  // console.log(TodoItemsFromContext);

  return (
    <div class="my-items">
      {TodoLists.map((item) => (
        <TodoItem
          TodoDate={item.dueDate}
          TodoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoLists;
