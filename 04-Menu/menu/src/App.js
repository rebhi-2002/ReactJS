import { Container } from "react-bootstrap";

import React, { useState } from "react";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";

import { items } from "./data";

function App() {
  const [itemsData, setItemsData] = useState(items);

  // items.map((item) => { return item.category; });
  // const allCategory = items.map((item) => item.category);
  // console.log(allCategory);

  //* First Approach (Using Set): Use Set to get all unique categories from the items list.
  // const allCategory = [...new Set(items.map((item) => item.category))];
  // console.log(allCategory);

  //* Second Approach (Using Array.from and Set): Another way to get all unique categories from the items list using Array.from and Set.
  // const allCategory = Array.from(new Set(items.map((item) => item.category)));

  //* Third Approach (Using reduce): An alternative approach using reduce to find all unique categories.
  // const allCategory = items.reduce((uniqueCategories, item) => {
  // if (!uniqueCategories.includes(item.category)) {
  // uniqueCategories.push(item.category);
  // }
  // return uniqueCategories;
  // }, []);
  // console.log(allCategory);

  // Get All Category Unique:
  const allCategory = ["الكل", ...new Set(items.map((item) => item.category))];
  console.log(allCategory); // (4) ['الكل', 'فطار', 'غداء', 'عشاء']
  // بتاعتي Categories يلي هو عبارة عن كل ال array ممكن أعتبره العنصر الثاني في ال ...new Set(items.map((item) => item.category)) إلها بداية ونهاية ده كدا array هادي
  // , الكل" وبعمل فاصلة" :array ممكن أعمل عنصر أول بداخل ال
  // allCategory تاعتي هتكون عبارة عن كلمة 'الكل' موجودة في الأول + التصنيفات بتاعتي، كله موجود في ال array ف بالتالي ال

  // Filter By Category
  const filterByCategory = (Category) => {
    if (Category === "الكل") {
      setItemsData(items);
    } else {
      const newArray = items.filter((item) => item.category === Category);
      setItemsData(newArray);
      // ما بتغير في الدالة الأصلية :filter(() => {});
    }
  };

  // Filter By Search Form
  const filterBySearch = (word) => {
    if (word !== "") {
      const searchItems = items.filter((item) => item.title === word);
      setItemsData(searchItems);
    }
  };

  return (
    <div className="color-body font">
      <Container fluid>
        <NavBar filterBySearch={filterBySearch} />
      </Container>
      <Container>
        <Header />
        <Category
          itemsData={itemsData}
          filterByCategory={filterByCategory}
          allCategory={allCategory}
        />
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
