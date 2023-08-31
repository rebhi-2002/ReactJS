import { Container, Row, Col, Button } from "react-bootstrap";
import React, { useState } from "react";
import FormInput from "./components/FormInput";
import QAList from "./components/QAList";
import { question } from "./data";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setData] = useState(question);

  // To Add New Item
  const addItem = () => {
    localStorage.setItem("items", JSON.stringify([...question])); // بالزبط json على شان المتصفح يقراها على إنها ملف ال
    setData([...question]);
    notify("تم الإضافة بنجاح", "Success");
  };

  // To Delete All Data Items
  const deleteAllItems = () => {
    localStorage.removeItem("items"); // localStorage.clear();
    question.splice(0, question.length); // الأصلية array بتغير في شكل ال
    setData([]);
    notify("تم حذف الكل بنجاح", "Success");
  };

  // To Delete One Item From Array
  const deleteOneItem = (items) => {
    localStorage.setItem("items", JSON.stringify([...items]));
    setData([...items]); // من أول وجديد بالتعديل component لل Rerender على شان يعمل
    // [...items]: الثلاث نقاط على شان يجيب لي العنصر بوضعه الحالي
    notify("تم حذف السؤال بنجاح", "Success");
    if (items.length <= 0) {
      deleteAllItems(); // localStorage.removeItem("items"); عن طريق key:items value:[] على شان يفضي ال
    }
  };

  // To Push Notification
  // const notify = () => toast("Wow so easy!");
  const notify = (message, type) => {
    // if (type === "Info") toast.info(message);
    // if (type === "Success") toast.success(message);
    // if (type === "Warning") toast.warning(message);
    // if (type === "Error") toast.error(message);
    // if (type === "Default") toast.default(message);

    if (type === "Error") {
      toast.error(message);
    } else if (type === "Success") {
      toast.success(message);
    }
  };

  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        <h1 className="mb-5">
          <bdi>تطبيق سؤال وإجابة</bdi>
        </h1>
        <Row className="justify-content-center">
          <Col /*sm="4"*/ md="4">
            <div className="fs-3 text-center py-2">
              <bdi>أسئلة وأجوبة شائعة</bdi>
            </div>
          </Col>
          <Col /*sm="8"*/ md="8">
            <FormInput onAdd={addItem} notify={notify} />
            <QAList data={data} deleteOneItem={deleteOneItem} />
            {
              // data.length >= 1 ? (
              localStorage.getItem("items") != null ? (
                <Button
                  onClick={deleteAllItems}
                  className="btn-color w-100 my-3"
                >
                  <bdi>مسح الكل</bdi>
                </Button>
              ) : null // يعني أنا مش عاوز أعرض حاجة خالص null
            }
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
