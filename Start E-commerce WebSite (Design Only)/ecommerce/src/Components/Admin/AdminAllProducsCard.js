import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Headphone from "../../images/Headphone.png";

const AdminAllProducsCard = () => {
  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: "100%",
          minHeight: "350px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Row className="d-flex justify-content-center px-2">
          <Col className="d-flex justify-content-between">
            <div className="d-inline item-delete-edit m-1">ازاله</div>
            <div className="d-inline item-delete-edit m-1">تعديل</div>
          </Col>
        </Row>

        <Link to="/products/:id" style={{ textDecoration: "none" }}>
          <Card.Img
            style={{ height: "228px", width: "100%" }}
            src={Headphone}
          />
          <Card.Body>
            <Card.Title>
              <div className="card-title">
                سماعة الرأس الاحترافية تأتي بتصميم أنيق وعصري يجمع بين الأداء
                العالي والمظهر الرائع. السماعات مصنوعة من مواد عالية الجودة
                تمنحها متانة استثنائية ومقاومة للاستخدام اليومي.
              </div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <div className="card-rate">4.5</div>
                <div className="d-flex align-items-center">
                  <div className="card-currency mx-1">جنيه</div>
                  <div className="card-price">880</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default AdminAllProducsCard;
