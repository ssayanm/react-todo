export default (state, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload), //filtering the id that needs to be deleted
      };

    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "COMPLETE_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          state.todos.map((todo) => {
            if (todo._id === action.payload) {
              return (todo.completed = true);
            }
          }),
        ],
      };

    case "TODO_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
