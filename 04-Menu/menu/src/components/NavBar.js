import React, { useState } from "react";
// import { Row } from "react-bootstrap";

// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

import { Navbar, Container, Row, Nav, Form } from "react-bootstrap";

const NavBar = ({ filterBySearch }) => {
  const [searchValue, setSearchValue] = useState("");

  // ================================================================================

  // ** <button onClick={() => onSearch()} className="btn-search"></button>; **

  /*
    const onSearch = () => {
      filterBySearch(searchValue);
      setSearchValue("");
    };
  */

  // ================================================================================

  // ** <button onClick={onSearch} className="btn-search" type="submit"></button>; **

  /*
    const onSearch = (e) => {
      e.preventDefault();
      //* [button => type="submit"] في حالة كان ال
      //* ف مش هتلحق تشوف النتائج reload على شان لما تبحث ما يصير عندي
      //* form جايه من ال e وطبعا ال
      filterBySearch(searchValue);
      setSearchValue("");
    };
  */

  // ================================================================================

  // ** <button onClick={onSearch} className="btn-search"></button>; **

  /*
    const onSearch = () => {
      filterBySearch(searchValue);
      setSearchValue("");
    };
  */

  // ================================================================================

  const onSearch = (e) => {
    e.preventDefault();
    filterBySearch(searchValue);
    setSearchValue("");
  };

  return (
    <Row>
      <Navbar expand="lg" className="bg-body-tertiar" bg="dark" variant="dark">
        {/* bg="dark": لون الخلفية | variant="dark": text على شان يزبطلي لون ال */}
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color" style={{ color: "" }}>
              <bdi>مطعم جديد</bdi>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="إبحث..."
                className="mx-2"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
              <button
                // ** onClick={() => onSearch()} **
                onClick={onSearch}
                className="btn-search"
                // type="submit"
              >
                <bdi>بحث</bdi>
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
