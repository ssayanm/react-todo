import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, getTodos } = useContext(GlobalContext);

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
