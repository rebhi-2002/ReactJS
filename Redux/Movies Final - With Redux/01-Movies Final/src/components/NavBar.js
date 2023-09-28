import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import logo from "../images/logo.png";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getAllMovie, getMovieSearch } from "../redux/actions/movieAction";

const NavBar = (/* { search } */) => {
  const onSearch = (word) => {
    search(word);
  };

  const dispatch = useDispatch();

  // To Search in API
  const search = async (word) => {
    if (word === "") {
      dispatch(getAllMovie());
    } else {
      dispatch(getMovieSearch(word));
    }
  };

  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 justify-content-between m-auto">
          <Col
            /*xs="2" lg="1"*/
            xs="3"
            lg="2"
            className="d-flex justify-content-center align-items-center"
          >
            {/* <img className="logo" src="logo.png" alt="logo" /> */}

            {/* [**ERROR**]:
              <Link to="/">
                <img className="logo" src={logo} alt="logo" />
              </Link>
            */}

            {/* [Part-1]:
              Uncaught runtime errors:
              ERROR
              -----
              Cannot destructure property 'basename' of 'react__WEBPACK_IMPORTED_MODULE_0__.useContext(...)' as it is null.
              TypeError: Cannot destructure property 'basename' of 'react__WEBPACK_IMPORTED_MODULE_0__.useContext(...)' as it is null.
            */}

            {/*  [Cont. Part-2]:
              بتاعي router أنا مش ضاموه في نظام ال component في react-router-dom موجود في ال link على شان أنا إستخدمت errors يعني ال
              Part-3 برا، موجود في <NavBar /> وال <BrowserRouter>...</BrowserRouter> يبدأ من أول router نظام ال
              [ <Route path="/" element={<NavBar />} /> ] <= <BrowserRouter> بداخل ال <NavBar /> ف ممكن أحط ال
              <a href="" /> أو أخليه بمكانه وأجي أستخدم التاغ
            */}

            {/* [Cont. Part-3]: ::05-Movies DB\movies-starter\src\App.js::
              <div className="font color-body">
              <NavBar search={search} />
              <Container>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<MoviesList movies={movies} getPage={getPage} pageCount={pageCount} />} />
                  <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
                </Routes>
              </BrowserRouter>
              </Container>
              </div>
            */}

            <a href="/">
              <img className="logo" src={logo} alt="logo" />
            </a>
          </Col>
          <Col
            /*xs="10" lg="11"*/
            xs="9"
            lg="10"
            className="d-flex align-items-center"
          >
            <div className="search w-100">
              <i className="fa fa-search"></i>
              <input
                onChange={(e) => onSearch(e.target.value)}
                type="text"
                className="form-control"
                placeholder="إبحث"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
