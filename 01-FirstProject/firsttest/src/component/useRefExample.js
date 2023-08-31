import React, { useRef, useContext } from "react";
import { ColorContext } from "./useContext";

const UseRefExample = () => {
  // const { Data, changeData } = useContext(ColorContext);
  const { changeData } = useContext(ColorContext);

  const valueInput = useRef(null); // Or: const valueInput = useRef();
  // console.log(valueInput);

  const focus = () => {
    valueInput.current.focus();
    // console.log(valueInput); // console.log(valueInput.current);
    console.log(valueInput.current.value);
    // changeData(valueInput.current.value);
    // changeData("5", valueInput.current.value); // { id, name }
    changeData(Math.random(), valueInput.current.value);
  };

  // const Data = useContext(ColorContext); // بيوصلني للقيمة يلي أنا مخزنها
  // (App.js & useRefExample.js) ما بين Props تاني من غير ما أعمل component بقدر أوصلها من أي App.js دي يلي أنا وصلتلها من ال Data ال

  return (
    <div>
      Ref {"  "}
      {/* <input value={Data} type="text" ref={valueInput} /> */}
      <input type="text" ref={valueInput} />
      {/* عند كل تغيير كان بينفذ الكود onChange بس كانت عند كل useState() نفسها في ال */}
      {/* أما هين مش عايز ينفذ الكود إلا لما أخلص كتابة واضغط على الزر */}
      {/* اساسية Hook هتفيدنا في شغلنا ولكنها مش useRef() */}
      <button onClick={focus}>Foucs</button>
    </div>
  );
};

export default UseRefExample;
