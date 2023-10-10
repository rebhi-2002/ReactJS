import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import phone from "../../images/phone.png";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";

const Footer = () => {
  return (
    <div className="footer-background footer mt-3 py-3">
      <Container className="">
        <Row className="d-flex justify-content-between align-items-center column">
          <Col
            sm="6"
            className="d-flex justify-content-start align-items-center my-2 footer-responsive"
          >
            <div className="footer-shroot">الشروط والأحكام</div>
            <div className="footer-shroot mx-3">سياسة الخصوصية</div>
            <div className="footer-shroot">اتصل بنا</div>
          </Col>

          <Col
            sm="6"
            className="d-flex justify-content-end align-items-center my-2 footer-responsive"
          >
            <div className="d-flex mt-1 mx-1">
              <img width="20px" height="20px" src={phone} alt="phone" />
              <p className="footer-phone p-0 m-0">1234567890</p>
            </div>

            <div style={{ cursor: "pointer" }}>
              <img width="20px" height="20px" src={facebook} alt="facebook" />
            </div>

            <div style={{ cursor: "pointer" }} className="">
              <img width="20px" height="20px" src={instagram} alt="instagram" />
            </div>

            <div style={{ cursor: "pointer" }} className="">
              <img width="20px" height="20px" src={twitter} alt="twitter" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
