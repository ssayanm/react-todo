import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";
import { v4 as uuidv4 } from "uuid";
//import axios from "axios";

const AddTodo = () => {
  const { addTodo } = useContext(GlobalContext);

  const [title, setTitle] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(),
      title,
    };
    setTitle("");
    addTodo(newTodo);
  };

  return (
    <form onSubmit={onSubmit} style={{ display: "flex" }}>
      <input
        type="text"
        name="title"
        placeholder="Add Todo"
        style={{ flex: "10", padding: "5px" }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="submit"
        value="Submit"
        className="btn"
        style={{ flex: "1", background: "#39396B" }}
      />
    </form>
  );
};

export default AddTodo;
