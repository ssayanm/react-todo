import React, { useContext } from "react";
import { DataContext } from "../DataContext";
import TodoItem from "./TodoItem";

const Todos = () => {
  const [todos, setTodos] = useContext(DataContext);

  const handleChangeCheckbox = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeCheckbox={handleChangeCheckbox}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
