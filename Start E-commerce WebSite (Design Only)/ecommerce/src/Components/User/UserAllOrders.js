import React from "react";
import { Row } from "react-bootstrap";
import UserAllOrderItem from "./UserAllOrderItem.js";

const UserAllOrders = () => {
  return (
    <Row className="justify-content-between">
      <div className="admin-content-text mt-2">اهلا محمد علي</div>
      <UserAllOrderItem />
      <UserAllOrderItem />
      <UserAllOrderItem />
    </Row>
  );
};

export default UserAllOrders;
