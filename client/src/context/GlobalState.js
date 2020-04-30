import React, { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

//initial State
const initialState = {
  todos: [],
  error: null,
  loading: true,
  completed: false,
};

//Create Context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  const getTodos = async () => {
    try {
      const res = await axios.get("/api/v1/todos");

      dispatch({
        type: "GET_TODOS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TODO_ERROR",
        payload: err.response.data.error,
      });
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/v1/todos/${id}`);
      dispatch({
        type: "DELETE_TODO",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "TODO_ERROR",
        payload: err.response.data.error,
      });
    }
  };

  const addTodo = async (todo) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/v1/todos", todo, config);

      dispatch({
        type: "ADD_TODO",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TODO_ERROR",
        payload: err.response.data.error,
      });
    }
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10"
  //     );
  //     setTodos(result.data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        error: state.error,
        loading: state.loading,
        completed: state.false,
        getTodos,
        addTodo,
        deleteTodo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};