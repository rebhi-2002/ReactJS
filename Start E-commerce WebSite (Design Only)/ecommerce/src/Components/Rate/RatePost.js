import React from "react";
import ReactStars from "react-rating-stars-component";
import { Row, Col } from "react-bootstrap";

const RatePost = () => {
  const setting = {
    size: 20, // 50
    count: 5, // 10
    color: "#979797", // black
    activeColor: "#ffc107", // red
    value: 0.5, // 7.5
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      console.log(`Example: new value is ${newValue}`);
    },
  };

  return (
    <div>
      <Row className="mt-3">
        <Col sm="12" className="me-5 d-flex align-items-center">
          <div className="rate-name d-inline ms-3 mt-1">علي محمد</div>
          <ReactStars {...setting} />
        </Col>
      </Row>

      <Row className="border-bottom mx-2">
        <Col className="me-4 pb-2">
          <textarea
            className="input-form-area p-2 mt-3"
            rows="2"
            cols="20"
            placeholder="اكتب تعليقك...."
          />
          <div className="d-flex justify-content-end align-items-center">
            <div className="product-cart-add px-3 py-2 text-center d-inline-flex justify-content-center align-items-center">
              اضف تعليق
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RatePost;
