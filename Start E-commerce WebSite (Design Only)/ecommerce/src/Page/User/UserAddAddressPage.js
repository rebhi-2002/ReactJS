import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserSideBar from "../../Components/User/UserSideBar";
import UserAddAddress from "../../Components/User/UserAddAddress";

const UserAddAddressPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col xs="5" sm="4" md="3" lg="2">
          <UserSideBar />
        </Col>
        <Col xs="7" sm="8" md="9" lg="10">
          <UserAddAddress />
        </Col>
      </Row>
    </Container>
  );
};

export default UserAddAddressPage;
