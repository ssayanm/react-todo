import React from "react";

const TodoItem = ({ todo, handleChangeCheckbox }) => {
  const getStyle = () => {
    return {
      background: "lightgrey",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: todo.complete ? "line-through" : "none",
    };
  };

  return (
    <div>
      <div style={getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={() => handleChangeCheckbox(todo.id)}
            checked={todo.complete}
          />
          {todo.title}
        </p>
      </div>
    </div>
  );
};

export default TodoItem;
