import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import TodoItem from "./TodoItem";

const Todos = () => {
  const { todos, getTodos } = useContext(GlobalContext);

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Toggle Complete
  // const markComplete = (id) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.id === id) {
  //         return { ...todo, completed: !todo.completed };
  //       } else {
  //         return todo;
  //       }
  //     })
  //   );
  // };

  return (
    <div>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
