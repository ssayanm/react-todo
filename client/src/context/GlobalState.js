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

  // Toggle Complete
  const markComplete = async (id) => {
    try {
      await axios.patch(`/api/v1/todos/${id}`);
      dispatch({
        type: "COMPLETED_TODO",
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
        markComplete,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
