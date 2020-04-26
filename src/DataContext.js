import React, { useState, useEffect, createContext } from "react";

import axios from "axios";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(result.data);
    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={[todos, setTodos]}>
      {props.children}
    </DataContext.Provider>
  );
};
