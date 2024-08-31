import TodoItem from "./TodoItem";
const TodoLists = ({ TodoLists,onDeleteClick }) => {
  return (
    <div class="my-items">
      {TodoLists.map((item) => (
        <TodoItem TodoDate={item.dueDate} TodoName={item.name} onDeleteClick={onDeleteClick}></TodoItem>
      ))}
    </div>
  );
};

export default TodoLists;
