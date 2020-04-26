import React from "react";
import Todos from "../../components/Todos";
import AddTodo from "../../components/AddTodo";

const Home = () => {
  return (
    <React.Fragment>
      <AddTodo />
      <Todos />
    </React.Fragment>
  );
};

export default Home;
