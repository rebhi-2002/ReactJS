import { INCREMENT } from "../type/type";
import { DECREMENT } from "../type/type";
import { RESET } from "../type/type";

// 2. create reducer to set state and change it
export const reducerCounter = (state = { counter: 0, name: "" }, action) => {
  // if (action.type === "INCREMENT") {
  //   return { counter: state.counter + 1 };
  // }
  // if (action.type === "DECREMENT") {
  //   return { counter: state.counter - 1 };
  // }
  // if (action.type === "RESET") {
  //   return { counter: 0 };
  // }

  if (action.type === INCREMENT) {
    return { counter: state.counter + 1 };
  }
  if (action.type === DECREMENT) {
    return { counter: state.counter - 1 };
  }
  if (action.type === RESET) {
    return { counter: 0 };
  }
  return state;
};

// export const movies = (state = [], action) => {
//   if (action.type === "view") {
//     return { all data };
//   }
//   if (action.type === "search") {
//     return { part of data };
//   }
//   return state;
// };
