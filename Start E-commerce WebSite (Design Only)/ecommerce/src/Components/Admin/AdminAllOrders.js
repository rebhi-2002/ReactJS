import React from "react";
import { Row } from "react-bootstrap";
import AdminAllOrdersItem from "./AdminAllOrdersItem";

const AdminAllOrders = () => {
  return (
    <div>
      <div className="admin-content-text my-2">إدارة جميع الطلبات</div>
      <Row className="justify-content-start mb-4">
        <AdminAllOrdersItem />
        <AdminAllOrdersItem />
        <AdminAllOrdersItem />
      </Row>
    </div>
  );
};

export default AdminAllOrders;
