import React from "react";
import { Row } from "react-bootstrap";
import AdminAllProducsCard from "./AdminAllProducsCard";

const AdminAllProducts = () => {
  return (
    <div>
      <div className="admin-content-text my-2">إدارة جميع المنتجات</div>
      <Row className="justify-content-start mb-4">
        <AdminAllProducsCard />
        <AdminAllProducsCard />
        <AdminAllProducsCard />
        <AdminAllProducsCard />
        <AdminAllProducsCard />
        <AdminAllProducsCard />
        <AdminAllProducsCard />
      </Row>
    </div>
  );
};

export default AdminAllProducts;
