import React from "react";
import { Row, Col } from "react-bootstrap";
import CartItem from "../Cart/CartItem";

const AdminOrderDetalis = () => {
  return (
    <div>
      <div className="admin-content-text my-2">تفاصيل الطلب رقم #231231</div>

      <Row>
        <CartItem />
        <CartItem />
        <CartItem />
      </Row>

      <Row className="justify-content-start align-items-center mt-4 user-data mb-4">
        <Col xs="12" className="d-flex">
          <div className="admin-content-text py-2">تفاصيل العميل</div>
        </Col>

        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            الاسم:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            احمد عبدالله
          </div>
        </Col>

        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            رقم الهاتف:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            0021313432423
          </div>
        </Col>

        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            الايميل:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            ahmed@gmail.com
          </div>
        </Col>

        <div className="d-inline px-4 border text-center py-2">
          المجموع ٤٠٠٠ جنيه
        </div>

        <div className="d-flex my-2 justify-content-center">
          <select
            name="languages"
            id="lang"
            className="select input-form-area mt-1 text-center px-2 w-50"
            // style={{ appearance: "none" }}
          >
            <option value="val">حالة الطلب</option>
            <option value="val2">قيد التنفيذ</option>
            <option value="val3">تم الانتهاء</option>
            <option value="val4">إلغاء</option>
          </select>
          <button className="btn-a px-3 d-inline mx-2">حفظ</button>
        </div>
      </Row>
    </div>
  );
};

export default AdminOrderDetalis;
