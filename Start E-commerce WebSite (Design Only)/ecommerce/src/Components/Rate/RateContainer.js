import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import RateItem from "./RateItem";
import RatePost from "./RatePost";
import Pagination from "../Uitily/Pagination";

import rate from "../../images/rate.png";

const RateContainer = () => {
  return (
    <Container className="rate-container">
      <Row>
        <Col className="d-flex align-items-center pt-2">
          <div className="sub-title d-inline py-1">التقييمات</div>
          <img className="mx-1" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate d-inline px-1 pt-1">4.3</div>
          <div className="rate-count d-inline px-1 pt-1">(160 تقييم)</div>
        </Col>
      </Row>

      <RatePost />

      <div className="mb-4">
        <RateItem />
        <RateItem />
        <RateItem />
        <RateItem />
      </div>

      <Pagination />
    </Container>
  );
};

export default RateContainer;
