import React, { useState, createContext } from "react";

export const DataContext = createContext();

const initialTodos = [
  { id: 1, title: "Take out", complete: false },
  { id: 2, title: "Clean Bedroom", complete: true },
  { id: 3, title: "paint windows", complete: false },
];

export const DataProvider = (props) => {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <DataContext.Provider value={[todos, setTodos]}>
      {props.children}
    </DataContext.Provider>
  );
};
