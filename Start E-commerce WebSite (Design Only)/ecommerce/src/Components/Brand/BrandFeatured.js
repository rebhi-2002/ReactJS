import React from "react";
import { Container, Row } from "react-bootstrap";

import SubTitle from "../Uitily/SubTitle";
import BrandCard from "./BrandCard";

import brand1 from "../../images/brand-1.png";
import brand2 from "../../images/brand-2.png";
import brand3 from "../../images/brand-3.png";

const BrandFeatured = ({ title, btnTitle, pathText }) => {
  return (
    <Container>
      <SubTitle title={title} btnTitle={btnTitle} pathText={pathText} />
      <Row className="my-1 d-flex justify-content-between">
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

export default BrandFeatured;
