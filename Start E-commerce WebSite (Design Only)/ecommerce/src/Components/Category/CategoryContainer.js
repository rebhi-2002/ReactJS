import React from "react";
import { Container, Row } from "react-bootstrap";

import CategoryCard from "./CategoryCard";

import category1Image from "../../images/category-1.png";
import category2Image from "../../images/category-2.png";
import category3Image from "../../images/category-3.png";
import category4Image from "../../images/category-4.png";
import category5Image from "../../images/category-5.png";

const CategoryContainer = () => {
  return (
    <Container className="mb-5">
      <div className="admin-content-text mt-2">كل التصنيفات</div>
      <Row className="my-2 d-flex justify-content-between">
        <CategoryCard img={category1Image} background="#F4DBA5" title="ملابس" />
        <CategoryCard
          img={category2Image}
          background="#F4DBA5"
          title="كريمات"
        />
        <CategoryCard
          img={category3Image}
          background="#0034FF"
          title="لابتوب"
        />
        <CategoryCard
          img={category4Image}
          background="#F4DBA5"
          title="تخفيضات"
        />
        <CategoryCard img={category1Image} background="#FF6262" title="ملابس" />
        <CategoryCard
          img={category5Image}
          background="#F4DBA5"
          title="أجهزة منزلية"
        />
        <CategoryCard
          img={category5Image}
          background="#F4DBA5"
          title="أجهزة منزلية"
        />
        <CategoryCard img={category1Image} background="#FF6262" title="ملابس" />
        <CategoryCard
          img={category4Image}
          background="#F4DBA5"
          title="تخفيضات"
        />
        <CategoryCard
          img={category3Image}
          background="#0034FF"
          title="لابتوب"
        />
        <CategoryCard
          img={category2Image}
          background="#F4DBA5"
          title="كريمات"
        />
        <CategoryCard img={category1Image} background="#F4DBA5" title="ملابس" />
        <CategoryCard img={category1Image} background="#F4DBA5" title="ملابس" />
        <CategoryCard
          img={category2Image}
          background="#F4DBA5"
          title="كريمات"
        />
        <CategoryCard
          img={category3Image}
          background="#0034FF"
          title="لابتوب"
        />
        <CategoryCard
          img={category4Image}
          background="#F4DBA5"
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

export default CategoryContainer;
