import React from "react";
import Todos from "./components/Todos";
import { DataProvider } from "./DataContext";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <DataProvider>
        <Header />
        <AddTodo />
        <Todos />
      </DataProvider>
    </div>
  );
};

export default App;
