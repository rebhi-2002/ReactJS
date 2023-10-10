import React from "react";
import { Row, Col } from "react-bootstrap";
import mobile from "../../images/mobile.png";

const UserAllOrderCard = () => {
  return (
    <Row className="d-flex my-2">
      <Col xs="5" sm="4" md="3" lg="2" className="d-flex justify-content-start">
        <img width="93px" height="120px" src={mobile} alt="" />
      </Col>
      <Col xs="7" sm="8" md="9" lg="10">
        <div className="d-inline pt-2 cat-title">
          آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس تايم
          (برودكت) أحمر
        </div>
        <div className="d-inline pt-2 cat-rate me-2 ms-1">4.5</div>
        <div className="rate-count d-inline pt-2">(160 تقييم)</div>
        <div className="mt-3 d-flex align-items-center">
          <div className="cat-text d-inline">الكمية</div>
          <input
            className="mx-2"
            type="number"
            min="0"
            style={{ width: "40px", height: "25px" }}
          />
        </div>
      </Col>
    </Row>
  );
};

export default UserAllOrderCard;
