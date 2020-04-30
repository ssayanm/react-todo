import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const TodoItem = ({ todo }) => {
  const { delTodo } = useContext(GlobalContext);

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
            //onChange={() => markComplete(todo.id)}
            checked={todo.completed}
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
