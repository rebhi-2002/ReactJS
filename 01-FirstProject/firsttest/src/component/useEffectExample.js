/*
  (alias) useEffect(effect: React.EffectCallback, deps?: React.DependencyList | undefined): void
  import useEffect
  Accepts a function that contains imperative, possibly effectful code.

  @param effect — Imperative function that can return a cleanup function

  @param deps — If present, effect will only activate if the values in the list change.

  @version — 16.8.0

  @see — https://react.dev/reference/react/useEffect
*/

import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0); // useState({initial value can be Obj});
  // ============================================================
  // الحالة الأولى:
  // useEffect(() => {console.log("Hello From UseEffect");}); // Rerender هتتنفذ في كل مرة يحصل
  // ============================================================
  // الحالة الثانية:
  // useEffect(() => {console.log("Hello From UseEffect");}, []); // يتم تنفيذها مرة واحدة فقط
  // ============================================================
  // الحالة الثالثة:
  useEffect(() => {
    console.log("Hello From UseEffect");
  }, [count]); // هتتنفذ أول مرة لحالها default يتم تنفيذها في كل مرة عند الضغظ على + وأيضا ال
  // ============================================================
  // useEffect(() => {
  //   console.log("Hello From UseEffect");
  // }, [condition1, condition2,...]);
  // ============================================================

  /*
  // Every rerender
  useEffect(() => {
    console.log("I run everytime this component rerenders");
  });

  // onMount
  useEffect(() => {
    console.log("I Only run once (When the component gets mounted)");
  }, []);

  // Condition based
  useEffect(() => {
    console.log("I run everytime my condition is changed");
  }, [condition]);

  // Condition based with "clean up"
  useEffect(() => {
    console.log("I run everytime my condition is changed");

    return () => {
      console.log(
        "Use this return as a 'clean up tool' (this runs before the actual code)"
      );
    };
  }, [condition]);
*/

  return (
    <div>
      Effect {"  "}
      <button onClick={() => setCount(count + 1)}>+</button> {"  "}
      <label>{count}</label>
    </div>
  );
};

export default UseEffectExample;
