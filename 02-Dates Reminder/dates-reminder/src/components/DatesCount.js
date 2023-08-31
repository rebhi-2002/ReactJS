import React from "react";
import { Row, Col } from "react-bootstrap";

const DatesCount = ({ person }) => {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8">
        {/* <bdi>لديك 4 مواعيد اليوم</bdi> */}
        <bdi>لديك {person.length} مواعيد اليوم</bdi>
      </Col>
    </Row>
  );
};

export default DatesCount;
