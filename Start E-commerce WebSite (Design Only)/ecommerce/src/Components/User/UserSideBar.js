import React from "react";
import { Link } from "react-router-dom";

// favourite | favorite

const UserSideBar = () => {
  return (
    <div className="sidebar" /*style={{ minHeight: "680px" }}*/>
      <div className="d-flex flex-column">
        <Link to="/user/allOrders" style={{ textDecoration: "none" }}>
          <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
            إدارة الطلبات
          </div>
        </Link>
        <Link to="/user/favoriteProducts" style={{ textDecoration: "none" }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            المنتجات المفضلة
          </div>
        </Link>
        <Link to="/user/addresses" style={{ textDecoration: "none" }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            العناوين الشخصية
          </div>
        </Link>
        <Link to="/user/user-profile" style={{ textDecoration: "none" }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            الملف الشخصي
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UserSideBar;
