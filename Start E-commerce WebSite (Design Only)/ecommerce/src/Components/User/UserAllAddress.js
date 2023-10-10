import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserAddressCard from "./UserAddressCard";

const UserAllAddress = () => {
  return (
    <Row>
      <div className="admin-content-text mt-2">دفتر العناوين</div>
      <UserAddressCard />
      <UserAddressCard />
      <UserAddressCard />
      <Row className="justify-content-center mt-4">
        <Col xs="12" className="d-flex justify-content-center">
          <Link to="/user/add-address" style={{ textDecoration: "none" }}>
            <button
              className="btn-add-address p-3"
              style={{ whiteSpace: "nowrap" }}
            >
              إضافة عنوان جديد
            </button>
          </Link>
        </Col>
      </Row>
    </Row>
  );
};

export default UserAllAddress;
