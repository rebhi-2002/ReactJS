import React, { useState, useReducer } from "react";
import reducerTest from "../Reducer/reducerTest";

const initialValue = {
  count: 0,
};
// const reducerTest = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 }; // count = state.count + 1
//     case "decrement":
//       return { count: state.count - 1 }; // count = state.count - 1
//     case "reset":
//       return { count: (state.count = 0) }; // count = state.count = 0
//     default:
//       return { state };
//   }
// };
//* إنو هو بيأخذ حاجتين reducer فكرة ال:
// =======================================
// 1- (state) القيمة يلي أنا بخزنها ال
// 2- يلي أنا بعملو (action) وال
// -----
// ،تحت بعض action يلي أنا بعملو، بقله لو أجالي زائد طبعا ممكن أعمل مليون action ف ال
// ،خليهولي بصفر reset يلي هو أنا مخزنو وزود عليه واحد، لو أجاني ناقص نقصلي منو واحد، لو قلي count بقله رجعلي ال
// .return { state } لو ما أجاني حاجة خالص رجعهولي زي ما هو

const UseReducerExample = () => {
  // const [value, setValue] = useState(0);
  const [state, dispatch] = useReducer(reducerTest, initialValue);
  // state: [const initialValue = {count: 0,};] يعني القيمة الحالية المخزنة عندي
  // dispatch: [switch الموجودين في ال] (.... ،reset ،جمع، طرح) :لو عاوز أنفذ عملية من العمليات
  return (
    <div>
      {/*
        useReducer
        <br />
        value is: {value}
        <button onClick={() => setValue(value + 1)}>+</button>
        <button onClick={() => setValue(value - 1)}>-</button>
        <button onClick={() => setValue(0)}>reset</button>
      */}
      value is: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      {/*
        ،بيخليني أتحكم في جميع العمليات السابقة useReducer ال
        ،reset بدون ما أعمل وحدة للجمع ووحدة للطرح ووحدة لل
        بعمل حاجة في مكان واحد
      */}
    </div>
  );
};

export default UseReducerExample;
