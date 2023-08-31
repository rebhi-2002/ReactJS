// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";

import { person } from "./data";

import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import DatesAction from "./components/DatesAction";

function App() {
  // const person = [
  //   { id: "1", name: "أحمد", date: "5 مساء", img: "p1.jpg" },
  //   { id: "2", name: "محمد", date: "4 مساء", img: "p1.jpg" },
  //   { id: "3", name: "علي", date: "3 مساء", img: "p1.jpg" },
  //   { id: "4", name: "محمود", date: "2 مساء", img: "p1.jpg" },
  //   { id: "5", name: "حسن", date: "1 مساء", img: "p1.jpg" },
  // ];

  const [personData, setPersonData] = useState(person);

  const onDelete = () => {
    setPersonData([]);
  };
  const onViewData = () => {
    setPersonData(person);
  };

  useEffect(() => {
    setPersonData([]);
  }, []);

  return (
    <div className="font color-body">
      {/* <div classsName="container">Same Thing ...</div> */}
      <Container className="py-5">
        {/* <DatesCount person={person} />
        <DatesList person={person} /> */}
        <DatesCount person={personData} />
        <DatesList person={personData} />
        <DatesAction deleteData={onDelete} onViewData={onViewData} />
      </Container>
    </div>
  );
}

export default App;
