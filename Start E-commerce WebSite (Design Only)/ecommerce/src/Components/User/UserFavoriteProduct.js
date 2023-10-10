import React from "react";
import { Row } from "react-bootstrap";

import ProductCard from "../Products/ProductCard";
import Pagination from "../Uitily/Pagination";
import CardProductsContainer from "../Products/CardProductsContainer";

const UserFavoriteProduct = () => {
  return (
    <Row className="justify-content-between">
      <div className="admin-content-text mt-2">قائمة المفضلة</div>
      <Row className="justify-content-start mb-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        {/* <CardProductsContainer title="" btnTitle="" pathText="" />
        <CardProductsContainer title="" btnTitle="" pathText="" /> */}
      </Row>
      <Pagination />
    </Row>
  );
};

export default UserFavoriteProduct;
