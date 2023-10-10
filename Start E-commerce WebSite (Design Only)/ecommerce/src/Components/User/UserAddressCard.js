import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import deleteIcon from "../../images/delete.png";

const UserAddressCard = () => {
  return (
    <div className="user-address-card my-2">
      <Row className="d-flex justify-content-between align-items-center">
        <Col xs="3" md="4">
          <div className="d-flex py-2">
            <div className="">المنزل</div>
          </div>
        </Col>

        <Col xs="9" md="8" className="d-flex justify-content-end">
          <div className="d-flex p-2">
            <div className="d-flex align-items-center mx-2">
              {/* <img
                alt=""
                className="ms-1"
                src={deleteIcon}
                height="17px"
                width="15px"
              /> */}
              {/* <i class="fa-solid fa-pen-to-square ms-1"></i> */}
              <i class="fa-regular fa-pen-to-square ms-1 fa-fw"></i>
              <Link to="/user/edit-address" style={{ textDecoration: "none" }}>
                <p className="item-delete-edit m-0">تعديل</p>
              </Link>
            </div>
            <div className="d-flex align-items-center mx-2">
              <img
                alt=""
                className="ms-1"
                src={deleteIcon}
                height="17px"
                width="15px"
              />
              <p className="item-delete-edit m-0">إزالة</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "14px",
            }}
          >
            القاهرة مدينه نصر شارع التسعين عمارة ١٤
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
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
      </Row>
    </div>
  );
};

export default UserAddressCard;
