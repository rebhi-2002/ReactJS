import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/Uitily/SearchCountResult";
import SideFilter from "../../Components/Uitily/SideFilter";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import Pagination from "../../Components/Uitily/Pagination";

const ShopProductsPage = () => {
  return (
    <div style={{ minHeight: "680px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult title="400 نتيجة بحث" />
        <Row className="d-flex flex-row mb-3">
          <Col xs="3" sm="2" md="2" lg="1" className="d-flex">
            <SideFilter />
          </Col>
          <Col xs="9" sm="10" md="10" lg="11">
            <CardProductsContainer title="" btnTitle="" pathText="" />
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  );
};

export default ShopProductsPage;
