import React, { useState, useContext } from "react";
import { DataContext } from "../DataContext.js";
import { v4 as uuidv4 } from "uuid";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  //   const [complete, setComplete] = useState("false");

  const [todos, setTodos] = useContext(DataContext);

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), title: title, complete: false },
    ]);
  };

  return (
    <form onSubmit={addTodo} style={{ display: "flex" }}>
      <input
        type="text"
        name="title"
        placeholder="Add Todo"
        style={{ flex: "10", padding: "5px" }}
        value={title}
        onChange={updateTitle}
      />
      <input
        type="submit"
        value="Submit"
        className="btn"
        style={{ flex: "1" }}
      />
    </form>
  );
};

export default AddTodo;
