import Header from "./Header";
// import Footer from "./Footer";
// import NavBar from "./component/NavBar";
import CardDetails from "./component/CardDetails";
import CardDetails2 from "./component/CardDetails";
import NotFound from "./component/NotFound";
import FormInput from "./component/Form";

// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import { Button, Badge, Card } from "react-bootstrap";

// import Button from 'react-bootstrap/Button';
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
// import img4 from "./images/img4.jpg";
import img4 from "./images/Vanamo_Logo.png";

import React, { useContext, useReducer } from "react";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import About from "./component/About";
import Content from "./component/Content";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorNotFound from "./component/Error404";
import Home from "./component/Home";

import StateExample from "./component/state";
import UseEffectExample from "./component/useEffectExample";
import UseRefExample from "./component/useRefExample";

import UseContextProvider from "./component/useContext";
import { ColorContext } from "./component/useContext"; // import React, { useContext } from "react";

import UseMemoExample from "./component/useMemo";
import UseReducerExample from "./component/useReducer";
import UseCustomHooks from "./component/useCustomHooks";
import FetchAxios from "./component/FetchAxios";

// function App() {
//   return <div>Hello From React</div>;
// }
// export default App;

// className // class test {}
// htmlFor // for(let i=0; i<=5; i++) {}
// {{ key: 'value', key: 'value', ...  }} <= Object

const App = () => {
  const name = "This One Site";

  // const cardTitle1 = "title1";
  // const cardTitle2 = "title2";
  // const cardTitle3 = "title3";
  // const cardTitle4 = "title4";

  // if (true) {
  // } else {}

  const data = [
    {
      title: "title1",
      description: "description1",
      img: img1,
      address: { city: "cairo", country: "egypt" },
    },
    { title: "title2", description: "description2", img: img2 },
    { title: "title3", description: "description3", img: img3 },
    { title: "title4", description: "description4", img: img4 },
  ];
  // console.log(data[0].img);
  // console.log(data[0].address.city);

  const printTitle = (message) => {
    // console.log("This From App File " + message);
    alert("This From App File: " + message);
  };
  const onChangeHandler = (e) => {
    // console.log(e);
    // console.log(e.nativeEvent.data);
    console.log(e.target.value); // onChange
  };

  // data.length ? console.log("true") : console.log("false");

  // const showFooter = () => { if (window.location.pathname === "/footer") { return <Footer />; } };
  // const showNavBar = () => { if (window.location.pathname === "/nav") { return <NavBar />; } };

  // 5- Use Context

  // const Data = useContext(ColorContext); // value="white" عاوز أستخدم الداتا يلي خزنتها دي

  // useContext(ColorContext): Hook built-in
  // useContext(ContextAPI): value="red" بترجعلي القيمة يلي خزنتها جواه يلي هي [const ColorContext = createContext();] يلي أنا أنشاته ContextAPI عبارة عن parameter بتوخذ useContext

  // const { Data, changeData } = useContext(ColorContext); // { Data, changeData } <= object ف هستقبلو في  value={{ Data, changeData }} <= object لأني مخزنو في
  // changeData("green");
  const { Data } = useContext(ColorContext);

  return (
    // <div>
    //   <div className="container-fluid">
    //     <NavBar />
    //     <br />
    //     <div className="flex-column d-flex align-items-center justify-content-center flex-wrap m-auto">
    //       {/* <CardDetails title={cardTitle1} />
    //       <CardDetails title={cardTitle2} />
    //       <CardDetails title={cardTitle3} />
    //       <CardDetails title={cardTitle4} /> */}

    //       {/*<CardDetails
    //         title={data[0].title}
    //         description={data[0].description}
    //       />
    //       <CardDetails
    //         title={data[1].title}
    //         description={data[1].description}
    //       />
    //       <CardDetails
    //         title={data[2].title}
    //         description={data[2].description}
    //       />
    //       <CardDetails
    //         title={data[3].title}
    //         description={data[3].description}
    //       /> */}

    //       {/*
    //         {data.map((item, index) => {
    //           return (
    //             // <CardDetails
    //             //   key={index}
    //             //   title={item.title}
    //             //   description={item.description}
    //             //   img={item.img}
    //             //   clickMe={printTitle}
    //             // />
    //             <CardDetails2
    //               key={index}
    //               title={item.title}
    //               description={item.description}
    //               img={item.img}
    //               clickMe={printTitle}
    //             >
    //               <h1>Hello, This is Children, Title is {item.title}</h1>
    //               <p>lorem lorem lorem...</p>
    //             </CardDetails2>
    //           );
    //         })}
    //       */}

    //       <FormInput />
    //       <Button onClick={printTitle} className="btn btn-info p-2 m-2">
    //         Click
    //       </Button>
    //       <input type="text" className="p-2 m-2" onChange={onChangeHandler} />
    //       {
    //         // data.length ? () : ();
    //       }
    //       {!data.length ? (
    //         data.map((item, index) => {
    //           return (
    //             <CardDetails2
    //               key={index}
    //               title={item.title}
    //               description={item.description}
    //               img={item.img}
    //               clickMe={printTitle}
    //             >
    //               <h1>Hello</h1>
    //               <p>lorem...</p>
    //             </CardDetails2>
    //           );
    //         })
    //       ) : (
    //         // <h2>No Data Found</h2>
    //         <NotFound message="Not Data Cards Found !!!" color="info" />
    //       )}

    //       {/* <CardDetails2>
    //         <h1>Hello</h1>
    //       </CardDetails2> */}
    //     </div>
    //   </div>
    //   <br />
    //   <div>
    //     {/* <Navbar expand="lg" className="bg-body-tertiary">
    //       <Container fluid>
    //         <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    //         <Navbar.Toggle aria-controls="navbarScroll" />
    //         <Navbar.Collapse id="navbarScroll">
    //           <Nav
    //             className="me-auto my-2 my-lg-0"
    //             style={{ maxHeight: "100px" }}
    //             navbarScroll
    //           >
    //             <Nav.Link href="#action1">Home</Nav.Link>
    //             <Nav.Link href="#action2">Link</Nav.Link>
    //             <NavDropdown title="Link" id="navbarScrollingDropdown">
    //               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
    //               <NavDropdown.Item href="#action4">
    //                 Another action
    //               </NavDropdown.Item>
    //               <NavDropdown.Divider />
    //               <NavDropdown.Item href="#action5">
    //                 Something else here
    //               </NavDropdown.Item>
    //             </NavDropdown>
    //             <Nav.Link href="#" disabled>
    //               Link
    //             </Nav.Link>
    //           </Nav>
    //           <Form className="d-flex">
    //             <Form.Control
    //               type="search"
    //               placeholder="Search"
    //               className="me-2"
    //               aria-label="Search"
    //             />
    //             <Button variant="outline-success">Search</Button>
    //           </Form>
    //         </Navbar.Collapse>
    //       </Container>
    //     </Navbar> */}
    //   </div>
    //   <br />
    //   This App File
    //   <br />
    //   <h1 className="style1" style={{ color: "green", backgroundColor: "red" }}>
    //     {/* This My Website */} {name}
    //   </h1>
    //   <Button className="btn btn-danger">Click Me</Button>
    //   <br /> <br />
    //   <Button variant="primary">Primary</Button>{" "}
    //   <Button variant="secondary">Secondary</Button>{" "}
    //   <Button variant="success">Success</Button>{" "}
    //   <Button variant="warning">Warning</Button>{" "}
    //   <Button variant="danger">Danger</Button>{" "}
    //   <Button variant="info">Info</Button>{" "}
    //   <Button variant="light">Light</Button>{" "}
    //   <Button variant="dark">Dark</Button>
    //   <Button variant="link">Link</Button>
    //   <br /> <br />
    //   <Button variant="outline-primary">Primary</Button>{" "}
    //   <Button variant="outline-secondary">Secondary</Button>{" "}
    //   <Button variant="outline-success">Success</Button>{" "}
    //   <Button variant="outline-warning">Warning</Button>{" "}
    //   <Button variant="outline-danger">Danger</Button>{" "}
    //   <Button variant="outline-info">Info</Button>{" "}
    //   <Button variant="outline-light">Light</Button>{" "}
    //   <Button variant="outline-dark">Dark</Button>
    //   <br /> <br />
    //   <h3>
    //     Example heading <Badge bg="secondary">New</Badge>
    //   </h3>
    //   <br />
    //   <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
    //   <Header />
    //   <Footer />
    //   <Footer />
    //   <Header></Header>
    //   <Header>
    //     <h2>Hello</h2>
    //   </Header>
    //   {/* {ES6} */}
    //   <br />
    //   <div>
    //     <Card style={{ width: "18rem" }}>
    //       {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    //       <Card.Img variant="top" src="Vanamo_Logo.png" />
    //       <Card.Body>
    //         <Card.Title>Card Title</Card.Title>
    //         <Card.Text>
    //           Some quick example text to build on the card title and make up the
    //           bulk of the card's content.
    //         </Card.Text>
    //         <Button variant="primary">Go somewhere</Button>
    //       </Card.Body>
    //     </Card>
    //   </div>
    //   <br />
    // </div>
    // <div>
    //   {/*
    //     <NavBar />
    //     <Content />
    //     <About />
    //     <Footer />
    //   */}

    //   {/* Test Routing:- */}
    //   {/*
    //     {showNavBar()}
    //     {showFooter()}
    //   */}
    // </div>
    // <div>
    //   <NavBar />
    //   <BrowserRouter>
    //     {/* <Routes></Routes> (In older versions, it was named:)=> <Switch></Switch> */}
    //     <Routes>
    //       {/* element={} (In older versions, it was named:)=> component={} */}
    //       {/* بس في التحديث الجديد مش هتأثر في حاجة لأنو التحديث الجديد عالج المشكلة يلي كانت موجودة ،exact ف كان حل المشكلة path="/" <= home لأنه ال home وال content كان بظهر ال /content في الإصدارات القديمة 5 وما قبل كان لما يحط في الرابط */}
    //       {/* <Route path="/" exact element={<Home />} /> */}
    //       <Route path="/" element={<Home />} />
    //       <Route path="/content" element={<Content />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/footer" element={<Footer />} />
    //       {/* Route في آخر ال Error404 يفضل أن يكون */}
    //       <Route path="*" element={<ErrorNotFound />} />
    //       {/* <Route element={<ErrorNotFound />} /> <= نهائيا path="*" ما كانو يعملو النجمة كانو بيشيلو ال NotFound في الإصدارات القديمة على شان تعمل ال */}
    //     </Routes>
    //   </BrowserRouter>
    //   {/* <Footer /> */}
    // </div>
    // <div>
    //   {/* <StateExample /> */}
    //   {/* <UseEffectExample /> */}
    //   {/* <UseRefExample /> */}
    //   {/* =================================================================== */}
    //   {/* <UseContextProvider /> <ColorContext /> */}
    //   {/* =================================================================== */}
    //   {/* {Data} */}
    //   {/*
    //     :تاني أعمل نفس الحركة وأوصلها component بقدر من أي
    //     - const Data = useContext(ColorContext);
    //     - {Data}
    //   */}
    //   {/* =================================================================== */}
    //   {/* {Data.id} {Data.name}
    //   <UseRefExample /> */}
    //   {/* =================================================================== */}
    //   {/* <UseMemoExample /> */}
    //   {/* <UseReducerExample /> */}
    //   {/* <UseCustomHooks /> */}
    //   {/* <FetchAxios /> */}
    // </div>
    <div></div>
  );
};

export default App;

//* https://babeljs.io/

// * Babel is a JavaScript compiler.
// * Use next generation JavaScript, today.

// const App = () => {
//   return (
//     <div>
//       <h1 className="style1">This My Website</h1>
//       <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
//       <Header />
//       <Footer />
//       <Footer />
//       <ul>
//         <li>first</li>
//         <li>first</li>
//         <li>first</li>
//         <li>first</li>
//         <li>first</li>
//         <li>first</li>
//       </ul>
//     </div>
//   );
// };

// * Compiled output will be shown here

// import { jsx as _jsx } from "react/jsx-runtime";
// import { jsxs as _jsxs } from "react/jsx-runtime";
// const App = () => {
//   return /*#__PURE__*/_jsxs("div", {
//     children: [/*#__PURE__*/_jsx("h1", {
//       className: "style1",
//       children: "This My Website"
//     }), /*#__PURE__*/_jsx("p", {
//       children: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
//     }), /*#__PURE__*/_jsx(Header, {}), /*#__PURE__*/_jsx(Footer, {}), /*#__PURE__*/_jsx(Footer, {}), /*#__PURE__*/_jsxs("ul", {
//       children: [/*#__PURE__*/_jsx("li", {
//         children: "first"
//       }), /*#__PURE__*/_jsx("li", {
//         children: "first"
//       }), /*#__PURE__*/_jsx("li", {
//         children: "first"
//       }), /*#__PURE__*/_jsx("li", {
//         children: "first"
//       }), /*#__PURE__*/_jsx("li", {
//         children: "first"
//       }), /*#__PURE__*/_jsx("li", {
//         children: "first"
//       })]
//     })]
//   });
// };
