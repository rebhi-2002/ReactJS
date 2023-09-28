import { AllMOVIES } from "../types/moviesType";

const initalValue = { movies: [], pageCount: 0 };

// 2. Create Reducer to Set State And Change It
export const moviesReducer = (state = initalValue, action) => {
  switch (action.type) {
    case AllMOVIES:
      return { movies: action.data, pageCount: action.pages }; // [data] OR [payload]: just a name, not important at all.
    default:
      return state;
  }
};

/*
dispatch({type: 'AllMOVIES', data: [Movies From API]})
*/
