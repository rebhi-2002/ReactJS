import React, { useEffect, useState } from "react";
import useFetchData from "../customHooks/FetchData";

const UseCustomHooks = () => {
  // const [state, setstate] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/")
  //     .then((res) => res.json()) // .then((data) => console.log(data));
  //     .then((data) => setstate(data));
  // }, []);

  /*
    بتاعي response ف برجعلي ال promise لأنو يعتبر هنا then() وبعد كدا بعمل URL الفكرة كلها بإختصار شديد إنو أنا ببعتله
    (res) => res.json(): عبارة عن متغير arrow function عبارة عن
    res.json(): json يعني رتبلي إياه على شكل
    then((data) => console.log(data)) : data تانية وباجي بطبعها على شكل then() وبعدين النتيجة يلي رجعتلي بستقبلها في
  */

  const [state] = useFetchData("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
      custom
      {state.map((item) => {
        return <p>{item.title}</p>;
      })}
    </div>
  );
};

export default UseCustomHooks;
