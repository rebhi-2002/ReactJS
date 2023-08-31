/*
  useMemo(factory: () => any, deps: React.DependencyList | undefined): any

  useMemo will only recompute the memoized value when one of the deps has changed.

  @version — 16.8.0

  @see — https://react.dev/reference/react/useMemo
*/

import React, { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [counter, setCounter] = useState(0);
  const [test, setTest] = useState(0);

  /*
  * How To Generate a Random Color in JavaScript:
    => https://css-tricks.com/snippets/javascript/random-hex-color/
  */
  var random = "#" + Math.floor(Math.random() * 16777215).toString(16);

  const result = useMemo(() => {
    return (
      <div style={{ color: random }}>
        Value is {counter} := {counter * 2}
      </div>
    );
  }, [counter]);
  // counter عبارة عن حاجات ما بتغيرش إلا فيها مثل ال Dependency ال
  // يشتغل counter ف بالتالي الكود ده مش هيتنفذ غير لما ال
  // counter مش test الخاصة فيها useState ف بغير اللون أما الحين لأ لأنو ال ،render كان بعمل <button onCl...>Test</button> في السابق لما كنت بضغط على ال
  // تغير counter منعت التنفيذ إلا لو ال useMemo ف ال

  //* إستخدامها:
  // - في الحاجات يلي زي هيك
  // - والحاجات هادي كلها، أنا حسبتها مرة وحدة ومش عاوز أحسبها تاني total أو حسابات إلها علاقة بال
  // - أو عاوز أخزن قيمة بناء على قيمة

  // useEffect ما بخزن قيمة، بنفذ وبس أما هين أنا بخزن قيمة هي نفس فكرة ال useEffect في ال
  // بقدر إنو أخزن قيمة useMemo ولكن الفرق بينها إنو في ال
  // في أوقات معينة  render فيها مميزات زيادة يلي إنشرحت إنو بتعمل useEffeect زائد طبعا إنو ال
  // خالص dependency <= [counter] وممكن تشيل ده
  // [counter, ...]  وكالعادة ممكن يبقى عندي أكثر من متغير مش متغير واحد

  // للحاجة دي render بعمل return (<div>{result}...</div>} بعمل حاجة معينة وبخزنها فيهم وباجي هين useMemo في ال
  // useEffect مع render {result} ولكن ما بقدر اعمل نفس الحركة دي
  // [const result = ...] زي كدا variable ممكن أنفذ فيها كود معين بناء على شرط معين ولكن ما بقدر إني أخزنو في useEffect
  // {result} بالطريقة دي كدا render وما بقدر أعمللو

  return (
    <div>
      useMemo
      {/* <div style={{ color: random }}>
        Value is {counter} := {counter * 2}
      </div> */}
      {result}
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setTest(test + 1)}>Test</button>
    </div>
  );
};

export default UseMemoExample;
