import React, { useContext } from "react";
import { DataContext } from "../DataContext";
import TodoItem from "./TodoItem";

const Todos = () => {
  const [todos, setTodos] = useContext(DataContext);

  //Toggle Complete
  const markComplete = (id) => {
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

  //DeleteTodo
  const delTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
        // if (todo.id !== id) {
        //   return { ...todo, complete: !todo.complete };
        // } else {
        //   return todo;
        // }
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
            markComplete={markComplete}
            delTodo={delTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
