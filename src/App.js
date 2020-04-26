import React from "react";
import Todos from "./components/Todos";
import { DataProvider } from "./DataContext";

import "./App.css";

const App = () => {
  return (
    <DataProvider>
      <Todos />
    </DataProvider>
  );
};

export default App;
