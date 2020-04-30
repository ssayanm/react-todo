import React from "react";
import Todos from "../Todos";
import AddTodo from "../AddTodo";

const Home = () => {
  return (
    <React.Fragment>
      <AddTodo />
      <Todos />
    </React.Fragment>
  );
};

export default Home;
