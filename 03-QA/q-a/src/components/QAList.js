import React from "react";
import { Row, Accordion, Button } from "react-bootstrap";
// import Accordion from "react-bootstrap/Accordion";

import { question } from "../data";

const QAList = ({ data, deleteOneItem }) => {
  const dataLocal = JSON.parse(localStorage.getItem("items"));

  // To Delete One Item From Array
  const onDeleteItem = (ID) => {
    // if (data.length >= 1) {
    if (localStorage.getItem("items") != null) {
      const index = question.findIndex((item) => item.id === ID);
      question.splice(index, 1); // إمسح عنصر واحد فقط، إذا حطيت 2 هيمسح العنصر ده والعنصر يلي بعده
      deleteOneItem(question);
    }
  };

  return (
    <Row>
      <Accordion>
        {/* <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="m-auto">
              <bdi>السؤال الأول</bdi>
            </div>
          </Accordion.Header>
          <Accordion.Body className="text-end">
            <div className="px-3 d-inline">
              <bdi>إجابة السؤال</bdi>
            </div>
            <Button className="btn-color">
              <bdi>مسح السؤال</bdi>
            </Button>
          </Accordion.Body>
        </Accordion.Item> */}

        {/* {data.length >= 1 ? ( */}
        {localStorage.getItem("items") != null ? (
          // data.map((item, index) => {
          dataLocal.map((item, index) => {
            return (
              <Accordion.Item key={index} eventKey={item.id}>
                <Accordion.Header>
                  <div className="m-auto">
                    {/* <bdi>السؤال الأول</bdi> */}
                    <bdi>{item.q}</bdi>
                  </div>
                </Accordion.Header>
                <Accordion.Body className="text-end">
                  <div className="px-3 d-inline">
                    {/* <bdi>إجابة السؤال</bdi> */}
                    <bdi>{item.a}</bdi>
                  </div>
                  <Button
                    onClick={() => onDeleteItem(item.id)}
                    className="btn-color"
                  >
                    {/* ** () => onDeleteItem(item.id): **
                      (item.id) واستدعيت الدالة دي مباشرة بالطريقة هادي وعملت القوسين هدول ArrowFunction من غير onDeleteItem(item.id) لو عملت
                      هيتم تنفيذ الكود الموجود بداخل زر المسح render أول ما يحصل
                      parameter وتبعتلها onDeleteItem(item.id) وظيفتها إنها تستدعي الدالة هادي Arrow Function وهاد طبعا غلط ف بالتالي هعمل
                      onDeleteItem مش هيتنفذ هنا هيتنفذ في ال function ف الكود هاد يعتبر
                      id عن طريق ال onDeleteItem ف كل ما اضغط على زر المسح هينفذ الكود الموجود في
                    */}
                    <bdi>مسح السؤال</bdi>
                  </Button>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <h2 className="fs-4 text-center p-5">
            <bdi>لا يوجد أسئلة الأن</bdi>
          </h2>
        )}
      </Accordion>

      {/* <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body.
            </div>
          </div>
        </div>
      </div> */}
    </Row>
  );
};

export default QAList;
