/*
  (alias) useState<number>(initialState: number | (() => number)): [number, React.Dispatch<React.SetStateAction<number>>] (+1 overload)
  import useState
  Returns a stateful value, and a function to update it.

  @version — 16.8.0

  @see — https://react.dev/reference/react/useState
*/

import React, { useState } from "react";

const StateExample = () => {
  const [count, setCount] = useState(0); // console.log(count); // setCount(5);
  const [text, setText] = useState("text");

  // const handleIncrease = () => {setCount(count + 1);};
  // const handleDecrease = () => {setCount(count - 1);};

  const handleInput = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  return (
    <div>
      {/* state */}
      {/* <button onClick={handleIncrease}>+</button> */}
      {/* <button onClick={handleDecrease}>-</button> */}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      {/* <label>count is {count}</label> */}

      <label>
        {text} is {count}
      </label>
      {/* <input type="text" value={text} onChange={(e) => setText(e.target.value)} /> */}
      <input type="text" value={text} onChange={handleInput} />
    </div>
  );
};

export default StateExample;

// * UseState:
// -----------
// - Update For Component
// - تخزين بعض القيم وبرجع أستعرضها أو أغيرها
// - عند كل مرة rerender يحصل

// * Public Info.:
// ---------------
// Hooks (just in)|(is) top level defination => لازم تعرفها فوق، مش هينفع إنت تعرفها تحت
// بالطريقة دي function component لأ، لازم تعرفها على مستوى ال for loop جوا if condition مثلا جوا hook مينفعش إنو إنت تعرف أي
// أو غيرها useStae سواء error ولا اي حاجة من الحاجات دي هتضرب معاك switch ولاfor ولا if لو أجيت تعرفها جوا
