import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const RigesterPage = () => {
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center hieght-search">
        <Col sm="12" className="d-flex flex-column">
          <label className="mx-auto title-login">تسجيل حساب جديد</label>

          <input
            type="text"
            className="user-input mt-3 text-center mx-auto"
            placeholder="اسم المستخدم..."
          />

          <input
            type="text"
            className="user-input my-3 text-center mx-auto"
            placeholder="الايميل..."
          />

          <input
            placeholder="كلمه السر..."
            type="password"
            className="user-input text-center mx-auto"
          />

          <button className="btn-login mx-auto mt-4">تسجيل الحساب</button>

          <label className="mx-auto my-4">
            لديك حساب بالفعل؟{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                اضغط هنا
              </span>
            </Link>
          </label>
        </Col>
      </Row>
    </Container>
  );
};

export default RigesterPage;
