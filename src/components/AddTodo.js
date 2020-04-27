import React, { useState, useContext } from "react";
import { DataContext } from "../DataContext.js";
import { v4 as uuidv4 } from "uuid";
//import axios from "axios";

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
      { id: uuidv4(), title: title, completed: false },
    ]);
  };

  // const addData = async (e) => {
  //   e.preventDefault();

  //   const result = await axios.post(
  //     "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //     { id: uuidv4(), title, completed: false }
  //   );
  //   setTodos((prevTodos) => [...prevTodos, result.data]);
  // };

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
