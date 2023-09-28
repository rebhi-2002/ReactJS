import { useSelector, useDispatch } from "react-redux";

import { INCREMENT } from "./type/type";
import { DECREMENT } from "./type/type";
import { RESET } from "./type/type";

import { inc } from "./actions/action"; // error فوق، على شان ما يصير في تضارب و يطلع INCREMENT الخاصة بال import على ال comment إذا بدك تستخدم الكود الخاص فيه الموجود تحت بسطر 34، حط

function App() {
  // 4. access data from store reducer with useSelector

  // const data = useSelector((state) => state.counter); // export const reducerCounter = (state = { counter: 0, name: "" }, action) => {...};
  // console.log(data);

  // const data = useSelector((state) => state.redCounter.counter); // {redCounter: reducerCounter} => Redux\redux\src\reducer\rootReducer.js

  const count = useSelector((state) => state.redCounter.counter);
  const isLog = useSelector((state) => state.Auth.isLog);
  console.log(isLog);

  // 5. change data in reducer with dispatch
  const dispatchCounter = useDispatch();

  return (
    <div>
      <h3>Counter:</h3>
      {/* <h3>{data}</h3> */}

      <h3>{count}</h3>

      {/* <h3>{isLog.toString()}</h3> */}

      {isLog === true ? (
        <h3>You user</h3>
      ) : (
        <h3>You not user please register</h3>
      )}

      {/*
        <button onClick={() => dispatchCounter({ type: "INCREMENT" })}>Increace</button>
        <button onClick={() => dispatchCounter({ type: "DECREMENT" })}>Decreace</button>
        <button onClick={() => dispatchCounter({ type: "RESET" })}>Reset</button>
      */}

      {/*
        <button onClick={() => dispatchCounter({ type: INCREMENT })}>Increace</button>
        <button onClick={() => dispatchCounter({ type: DECREMENT })}>Decreace</button>
        <button onClick={() => dispatchCounter({ type: RESET })}>Reset</button>
      */}

      {/* <button onClick={() => dispatchCounter(inc)}>Increace</button> */}

      {/* ** First Dispatch: ** */}
      <button onClick={() => dispatchCounter({ type: "INCREMENT" })}>
        Increace
      </button>
      <button onClick={() => dispatchCounter({ type: "DECREMENT" })}>
        Decreace
      </button>
      <button onClick={() => dispatchCounter({ type: "RESET" })}>Reset</button>

      {/* ** Second Dispatch: ** */}
      <button onClick={() => dispatchCounter({ type: "IsLogin" })}>
        Make User
      </button>
      <button onClick={() => dispatchCounter({ type: "NotLogin" })}>
        Not User
      </button>
    </div>
  );
}

export default App;
