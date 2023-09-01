import React from "react";
import { Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <Row>
      <Col sm="12" className="justify-content-center text-center">
        <div className="title">
          <bdi>قائمة الطعام</bdi>
        </div>
        <div className="d-flex justify-content-center">
          <p className="underline"></p>
        </div>
        {/* <p className="underline m-auto"></p> */}
      </Col>
    </Row>
  );
};

export default Header;
