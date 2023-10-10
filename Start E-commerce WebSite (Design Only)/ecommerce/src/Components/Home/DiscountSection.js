import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import laptops from "../../images/laptops.png";

const DiscountSection = () => {
  return (
    <Container>
      <Row className="discount-backcolor h-100 py-3 my-3 mx-2 d-flex text-center align-items-center">
        <Col sm="6">
          <div className="discount-title">
            خصم يصل حتى ٣٠٪ على أجهزة اللابتوب
          </div>
        </Col>
        <Col sm="6">
          <img className="dicount-img" src={laptops} alt="laptops" />
        </Col>
      </Row>
    </Container>
  );
};

export default DiscountSection;
