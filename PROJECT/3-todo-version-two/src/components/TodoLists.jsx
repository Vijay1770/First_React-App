import TodoItem from "./TodoItem";
const TodoLists = ({ TodoLists }) => {
  return (
    <div class="my-items">
      {TodoLists.map((item) => (
        <TodoItem TodoDate={item.dueDate} TodoName={item.name}></TodoItem>
      ))}
    </div>
  );
};

export default TodoLists;
