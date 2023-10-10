import React from "react";
import { Row, Col } from "react-bootstrap";
import deleteIcon from "../../images/delete.png";

const UserProfile = () => {
  return (
    <div>
      <div className="admin-content-text mt-2">الصفحة الشخصية</div>
      <div className="user-address-card mt-3 px-2 d-flex flex-column justify-content-center">
        <Row
          className="d-flex justify-content-between pt-2"
          style={{ whiteSpace: "nowrap" }}
        >
          <Col xs="6" className="d-flex">
            <div className="p-1">الإسم:</div>
            <div className="p-1 item-delete-edit">أحمد عبدالله</div>
          </Col>
          <Col xs="6" className="d-flex justify-content-end">
            <div className="d-flex mx-2 justify-content-center align-items-center">
              {/* <img
                alt=""
                className="ms-1 mt-2"
                src={deleteIcon}
                height="17px"
                width="15px"
              /> */}
              <i class="fa-regular fa-pen-to-square ms-1 fa-fw"></i>
              <p className="item-delete-edit m-0">تعديل</p>
            </div>
          </Col>
        </Row>
        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-1">رقم الهاتف:</div>
            <div className="p-1 item-delete-edit">0122314324</div>
          </Col>
        </Row>
        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-1">الإيميل:</div>
            <div className="p-1 item-delete-edit">ahmed@gmail.com</div>
          </Col>
        </Row>
      </div>
      <div className="my-5 px-2">
        <Row className="mt-4">
          <Col xs="12" md="10" className="">
            <div className="admin-content-text mb-3">تغير كملة المرور</div>
            <input
              type="password"
              className="input-form d-block px-3"
              placeholder="أدخل كلمة المرور القديمة"
            />
            <input
              type="password"
              className="input-form d-block mt-2 px-3"
              placeholder="أدخل كلمة المرور الجديدة"
            />
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="10" className="d-flex justify-content-end">
            <button className="btn-save d-inline mt-2">حفظ كلمة السر</button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UserProfile;
