import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserSideBar from "../../Components/User/UserSideBar";
import UserEditAddress from "../../Components/User/UserEditAddress";

const UserEditAddressPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col xs="5" sm="4" md="3" lg="2">
          <UserSideBar />
        </Col>
        <Col xs="7" sm="8" md="9" lg="10">
          <UserEditAddress />
        </Col>
      </Row>
    </Container>
  );
};

export default UserEditAddressPage;
