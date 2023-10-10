import React from "react";

import { Navbar, Container, FormControl, Nav } from "react-bootstrap";

import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";

// import "../../Style/slider-style.css";

const NavBarLogin = () => {
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand className="m-0">
          <a href="/">
            <img src={logo} className="logo" alt="Logo" />
          </a>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            type="search"
            placeholder="إبحث..."
            className="mx-2 w-100 text-center search-input"
            aria-label="Search"
          />

          <Nav className="">
            <Nav.Link
              href="/login"
              className="nav-text d-flex justify-content-center align-items-center"
            >
              <img src={login} className="login-img" alt="Login" />
              <p className="px-2 m-0" style={{ color: "white" }}>
                دخول
              </p>
            </Nav.Link>
            <Nav.Link
              href="/cart"
              className="nav-text d-flex justify-content-center align-items-center"
              style={{ color: "white" }}
            >
              <img src={cart} className="login-img" alt="Cart" />
              <p className="px-2 m-0" style={{ color: "white" }}>
                العربة
              </p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
