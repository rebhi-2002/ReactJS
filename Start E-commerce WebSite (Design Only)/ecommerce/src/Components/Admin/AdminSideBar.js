import React from "react";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <div className="sidebar" /*style={{ minHeight: "680px" }}*/>
      <div className="d-flex flex-column">
        <Link to="/admin/allOrders" style={{ textDecoration: "none" }}>
          <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
            إدارة الطلبات
          </div>
        </Link>
        <Link to="/admin/allProducts" style={{ textDecoration: "none" }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            إدارة المنتجات
          </div>
        </Link>
        <Link to="/admin/addBrand" style={{ textDecoration: "none" }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            أضف ماركة
          </div>
        </Link>
        <Link to="/admin/addCategory" style={{ textDecoration: "none" }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            أضف تصنيف
          </div>
        </Link>
        <Link to="/admin/addSubCategory" style={{ textDecoration: "none" }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            أضف تصنيف فرعي
          </div>
        </Link>
        <Link to="/admin/addProduct" style={{ textDecoration: "none" }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            أضف منتج
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminSideBar;
