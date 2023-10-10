import React from "react";
import { Row, Col } from "react-bootstrap";

const AdminAddSubCategory = () => {
  return (
    <div>
      <Row className="justify-content-start">
        <div className="admin-content-text pb-4 mt-2">
          إضافة تصنيف فرعي جديد
        </div>
        <Col xs="12" md="10" lg="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف الفرعي"
          />
          <select name="languages" id="lang" className="select mt-3 px-2">
            <option value="val">التصنيف الأول</option>
            <option value="val2">التصنيف الثاني</option>
            <option value="val3">التصنيف الثالث</option>
            <option value="val4">التصنيف الرابع</option>
          </select>
        </Col>
      </Row>

      <Row>
        <Col xs="12" md="10" lg="8" className="d-flex justify-content-end">
          <button className="btn-save d-inline mt-2">حفظ التعديلات</button>
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddSubCategory;
