import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

import { question } from "../data";

const FormInput = ({ onAdd, notify }) => {
  const [Question, setQuestion] = useState("");
  const [Answer, setAnswer] = useState("");

  // To Push Data To Array
  const addNewItem = () => {
    if (Question === "" || Answer === "") {
      notify("من فضلك أكمل البيانات", "Error");
      return; // على شان يوقف باقي الكود وما يكملش
    }

    question.push({ id: Math.random(), q: Question, a: Answer }); // [1] بعت البيانات بتاعتي

    // [2] input text من ال data فضيت ال
    setQuestion("");
    setAnswer("");
    // * setQuestion(""); | setAnswer("");
    // input text على شان بعد ما المستخدم يدخل البيانات وأبعتهم عاوز أفضي ال

    onAdd();
    console.log(question);
  };

  return (
    <Row className="my-3">
      <Col /*sm="5"*/ md="5" className="pb-2">
        <Form.Control
          value={Question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
          type="text"
          placeholder="أدخل السؤال"
        />
      </Col>
      <Col /*sm="5"*/ md="5" className="pb-3">
        <Form.Control
          value={Answer}
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
          type="text"
          placeholder="أدخل الإجابة"
        />
      </Col>
      <Col /*sm="2"*/ md="2">
        <Button
          onClick={addNewItem}
          className="btn-color w-100"
          variant="primary"
          type="submit"
        >
          إضافة
        </Button>
      </Col>
    </Row>
  );
};

export default FormInput;
