import React from "react";
import { Row, Col } from "react-bootstrap";

import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";

const ProductDetails = () => {
  return (
    <div className="mb-4">
      <Row className="py-3">
        <Col
          xs="12"
          md="7"
          lg="5"
          xl="4"
          className="d-flex justify-content-center"
        >
          <ProductGallery />
        </Col>
        <Col xs="12" md="5" lg="7" xl="8">
          <ProductText />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
