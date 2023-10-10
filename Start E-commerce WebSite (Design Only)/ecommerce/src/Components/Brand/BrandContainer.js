import React from "react";
import { Container, Row } from "react-bootstrap";

import BrandCard from "./BrandCard";

import brand1 from "../../images/brand-1.png";
import brand2 from "../../images/brand-2.png";
import brand3 from "../../images/brand-3.png";

const BrandContainer = () => {
  return (
    <Container className="mb-5">
      <div className="admin-content-text mt-2">كل الماركات</div>
      <Row className="my-2 d-flex justify-content-between">
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />

        <BrandCard img={brand3} />
        <BrandCard img={brand2} />
        <BrandCard img={brand1} />
        <BrandCard img={brand3} />
        <BrandCard img={brand2} />
        <BrandCard img={brand1} />

        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
      </Row>
    </Container>
  );
};

export default BrandContainer;
