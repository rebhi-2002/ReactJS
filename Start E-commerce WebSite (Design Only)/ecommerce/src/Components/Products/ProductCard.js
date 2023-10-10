import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import headphone from "../../images/Headphone.png";
import favoff from "../../images/fav-off.png";
import rate from "../../images/rate.png";

const ProductCard = () => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: "100%",
          minHeight: "345px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        }}
      >
        <Link to="/products/:id" style={{ textDecoration: "none" }}>
          <Card.Img
            style={{ maxHeight: "228px", width: "100%" }}
            src={headphone}
          />
        </Link>
        <div className="d-flex justify-content-end mx-2">
          <img
            src={favoff}
            alt=""
            className="text-center"
            style={{
              height: "24px",
              width: "26px",
            }}
          />
        </div>
        <Card.Body>
          <Card.Title>
            <div className="card-title">
              سماعة الرأس الاحترافية تأتي بتصميم أنيق وعصري يجمع بين الأداء
              العالي والمظهر الرائع. السماعات مصنوعة من مواد عالية الجودة تمنحها
              متانة استثنائية ومقاومة للاستخدام اليومي.
            </div>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <img
                  className=""
                  src={rate}
                  alt=""
                  height="16px"
                  width="16px"
                />
                <div className="card-rate mx-2">4.5</div>
              </div>
              <div className="d-flex">
                <div className="card-price">880</div>
                <div className="card-currency mx-1">جنيه</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
