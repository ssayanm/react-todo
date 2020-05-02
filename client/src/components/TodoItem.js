import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const TodoItem = ({ todo }) => {
  const { deleteTodo, markComplete } = useContext(GlobalContext);

  const getStyle = () => {
    return {
      background: "lightgrey",
      padding: "10px",
      margin: "10px 0",
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
            style={{ margin: "10px" }}
            type="checkbox"
            onChange={() => markComplete(todo._id)}
            defaultChecked={todo.completed}
          />
          <button onClick={() => deleteTodo(todo._id)} style={btnStyle}>
            x
          </button>
          {todo.title}
        </p>
      </div>
    </div>
  );
};

export default TodoItem;
