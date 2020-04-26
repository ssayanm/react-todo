import React from "react";

const TodoItem = ({ todo, markComplete, delTodo }) => {
  const getStyle = () => {
    return {
      background: "lightgrey",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: todo.completed ? "line-through" : "none",
    };
  };

  const btnStyle = {
    background: "red",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    float: "right",
    borderRadius: "50%",
  };

  return (
    <div>
      <div style={getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={() => markComplete(todo.id)}
            checked={todo.complete}
          />
          <button onClick={() => delTodo(todo.id)} style={btnStyle}>
            x
          </button>
          {todo.title}
        </p>
      </div>
    </div>
  );
};

export default TodoItem;
