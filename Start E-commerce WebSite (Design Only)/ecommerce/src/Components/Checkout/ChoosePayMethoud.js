import React from "react";
import { Row, Col } from "react-bootstrap";

const ChoosePayMethoud = () => {
  return (
    <div>
      <div className="admin-content-text pt-5">اختر طريقة الدفع</div>

      <div className="user-address-card my-3 px-3 d-flex flex-column justify-content-center">
        <Row>
          <Col xs="12" className="my-3">
            <input
              name="group"
              id="group1"
              type="radio"
              value="الدفع عن طريق البطاقة الإئتمانية"
              className=""
            />
            <label className="mx-2" for="group1">
              الدفع عن طريق البطاقة الإئتمانية (الفيزا)
            </label>
          </Col>
        </Row>

        <Row>
          <Col xs="12" className="my-3">
            <input
              name="group"
              id="group2"
              type="radio"
              value="الدفع عند الاستلام"
              className=""
            />
            <label className="mx-2" for="group2">
              الدفع عند الاستلام (كاش)
            </label>
          </Col>
        </Row>
      </div>

      <Row>
        <Col xs="12" className="d-flex justify-content-end">
          <div className="product-price d-inline border d-flex justify-content-center align-items-center">
            34000 جنية
          </div>
          <div className="product-cart-add px-3 d-inline me-2 d-flex justify-content-center align-items-center">
            اتمام الشراء
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ChoosePayMethoud;
