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

    case "COMPLETED_TODO":
      return {
        ...state,
        // looping through each todos items and checking the clicked chekcbox todo id with the existing id of todo, when it is matching I am toggling the "completed" for true or false and if not matching I am just returing the todo
        todos: state.todos.map((todo) =>
          todo._id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
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
