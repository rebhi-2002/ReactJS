import React from "react";
import { Container, Row } from "react-bootstrap";

import SubTitle from "../Uitily/SubTitle";
import CategoryCard from "../Category/CategoryCard";

import category1Image from "../../images/category-1.png";
import category2Image from "../../images/category-2.png";
import category3Image from "../../images/category-3.png";
import category4Image from "../../images/category-4.png";
import category5Image from "../../images/category-5.png";

const HomeCategory = () => {
  return (
    <Container>
      <SubTitle title="التصنيفات" btnTitle="المزيد" pathText="/allCategory" />

      <Row className="my-2 d-flex justify-content-between">
        <CategoryCard img={category1Image} background="#F4DBA5" title="ملابس" />
        <CategoryCard
          img={category2Image}
          background="#0034FF" // #F4DBA5
          title="كريمات"
        />
        <CategoryCard
          img={category3Image}
          background="#FFD3E8" // #0034FF
          title="لابتوب"
        />
        <CategoryCard
          img={category4Image}
          background="#FF6262" // #F4DBA5
          title="تخفيضات"
        />
        <CategoryCard img={category1Image} background="#FF6262" title="ملابس" />
        <CategoryCard
          img={category5Image}
          background="#F4DBA5"
          title="أجهزة منزلية"
        />
      </Row>
    </Container>
  );
};

export default HomeCategory;
