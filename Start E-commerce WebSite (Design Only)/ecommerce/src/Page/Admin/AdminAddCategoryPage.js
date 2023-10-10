import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAddCategory from "../../Components/Admin/AdminAddCategory";

const AdminAddCategoryPage = () => {
  return (
    <div>
      <Container>
        <Row className="py-3">
          <Col xs="5" sm="4" md="3" lg="2">
            <AdminSideBar />
          </Col>
          <Col xs="7" sm="8" md="9" lg="10">
            <AdminAddCategory />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminAddCategoryPage;
