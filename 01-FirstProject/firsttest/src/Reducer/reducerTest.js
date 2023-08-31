const reducerTest = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }; // count = state.count + 1
    case "decrement":
      return { count: state.count - 1 }; // count = state.count - 1
    case "reset":
      return { count: (state.count = 0) }; // count = state.count = 0
    default:
      return { state };
  }
};

export default reducerTest;
