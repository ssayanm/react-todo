import React from "react";
import TodoList from "../TodosList";

import AddTodo from "../AddTodo";

const Home = () => {
  return (
    <React.Fragment>
      <AddTodo />
      <TodoList />
    </React.Fragment>
  );
};

export default Home;
