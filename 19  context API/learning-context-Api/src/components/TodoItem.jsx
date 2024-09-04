function TodoItem({ TodoName, TodoDate, onDeleteClick }) {
  return (
    <div class="container">
      {/* 2nd row */}
      <div class="row my-row">
        <div class="col-6">{TodoName}</div>
        <div class="col-4">{TodoDate}</div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-danger my-btn"
            onClick={() => onDeleteClick(TodoName)}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
