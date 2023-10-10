import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminOrderDetalis from "../../Components/Admin/AdminOrderDetalis";
import Pagination from "../../Components/Uitily/Pagination";

const AdminOrderDetalisPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col xs="5" sm="4" md="3" lg="2">
          <AdminSideBar />
        </Col>
        <Col xs="7" sm="8" md="9" lg="10">
          <AdminOrderDetalis />
          {/* <Pagination /> */}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminOrderDetalisPage;
