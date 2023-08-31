import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchAxios = () => {
  const [state, setState] = useState([]);

  // * 01-Fetch Data:
  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    })
      .then((response) => /*console.log(response)*/ response.json())
      .then((data) => /*console.log(data)*/ setState(data));
  };

  // * First then:
  // .then((response) => response.json()): بالكامل response بترجعلي ال
  // * Second then:
  // .then((data) => setState(data)): بتاعتي data أو ال array هترجعلي الجزء يلي أنا عاوزه يلي هو ال

  // [method:""] => parameter: [GET ولا POST] يلي باعته عبارة عن إيه request ال
  // => GET: By Default وهو data يعني أنا بجيب ال
  // => POST: database تتخزن في ال Data لو أنا عاوز أبعت

  // * 02-Fetch Axios:
  const fetchAxios = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts"); // أو على شكل أي حاجة أنا عاوزها obj بتاعتي على شكل parameter وببعت ال URL بحط فاصلة بعد parameter طبعا لو أنا عندي
    setState(res.data);
    // console.log(res); // data إسمه obj راجعلي
  };

  // ده هو يلي هيرجعلي كل البيانات بتاعتي response ال [const response = ...] ف بحطه في متغير .then() برد عليه من غير axios ال
  // async, await: promise لأنها بالنهاية بترجعلي

  // setState(res.data): data إسمه obj يببقى راجع في response بس ال ،response في data برجع ال
  // res.data: بتاعتي array يلي هي ال .data
  // -> Array of Object [{...}, {..}, {..}, ....] رجعها على شكل

  // أقل وأسهل axios تبع ال syntax
  // على طول، بنعمل مسح وحذف وتعديل وكدا [axios.delete] أو [axios.put] أو [axios.post] أو [axios.get] بنعمل بس
  // بنعمل مسح وحذف وتعديل وكدا ،axios هادي الحاجات الموجودة في ال [axios.delete] أو [axios.put] أو [axios.post] أو [axios.get] بنعمل بس
  // ف هي هادي البيانات يلي راجعه ، .data والقيمة كلها بترجعلي في متغير، وبعدين بقله إسم المتغير

  useEffect(() => {
    // * 01-Fetch Data:
    // fetchData();
    // * 02-Fetch Axios:
    fetchAxios();
  }, []);
  // على شان دي بتتنفذ لأول مرة useEffect تبعتك تعرضها في ال data دائما يفضل لما تيجي تعرض ال

  return (
    <div>
      Fetch Axios <br />
      {/* {state[0].title}; */}
      {state.length > 0 ? state[0].title : "Loading..."}
      {/* {state.map((item) => {return <h3>{item.title}</h3>;})} */}
      {/* {state.map((item) => {return <h3>{item.body}</h3>;})} */}
    </div>
  );
};

export default FetchAxios;
