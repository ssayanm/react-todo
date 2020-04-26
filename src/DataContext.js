import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const DataContext = createContext();

const initialTodos = [
  { id: uuidv4(), title: "Take out", complete: false },
  { id: uuidv4(), title: "Clean Bedroom", complete: true },
  { id: uuidv4(), title: "paint windows", complete: false },
];

export const DataProvider = (props) => {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <DataContext.Provider value={[todos, setTodos]}>
      {props.children}
    </DataContext.Provider>
  );
};
