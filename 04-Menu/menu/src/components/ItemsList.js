import React from "react";

// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

import { Row, Col, Card } from "react-bootstrap";

import Zoom from "react-reveal/Zoom";

const ItemsList = ({ itemsData }) => {
  return (
    // <Row>
    //   <Col sm="12" className="mb-3">
    //     <Card
    //       className="d-flex flex-row"
    //       style={{ backgroundColor: "#f8f8f8" }}
    //     >
    //       <Card.Img className="img-item" variant="top" src="1.png" />
    //       <Card.Body>
    //         <Card.Title className="d-flex justify-content-between">
    //           <div className="item-title">
    //             <bdi>وجبة فطار</bdi>
    //           </div>
    //           <div className="item-price">
    //             <bdi>50 جنيه</bdi>
    //           </div>
    //         </Card.Title>
    //         <Card.Text className="py-2">
    //           <div className="item-description">
    //             <bdi>
    //               وصف وجبة الإفطار وصف وجبة الإفطار وصف وجبة الإفطار وصف وجبة
    //               الإفطار وصف وجبة الإفطار وصف وجبة الإفطار وصف وجبة الإفطار وصف
    //               وجبة الإفطار وصف وجبة الإفطار وصف وجبة الإفطار
    //             </bdi>
    //           </div>
    //         </Card.Text>
    //       </Card.Body>
    //     </Card>
    //   </Col>
    // </Row>

    // { itemsData.length >= 1 ? (itemsData.map((item) => { return(...); })) : <h3 className="text-center">لا يوجد أصناف</h3> }

    <Row>
      <Zoom>
        <div>
          {itemsData.length >= 1 ? (
            itemsData.map((item) => {
              return (
                <Col key={item.id} sm="12" className="mb-3">
                  <Card
                    className="d-flex flex-row fix-card"
                    style={{ backgroundColor: "#f8f8f8" }}
                  >
                    <Card.Img
                      className="img-item fix-img-item"
                      variant="top"
                      src={item.imgUrl}
                    />
                    <Card.Body>
                      <Card.Title className="d-flex justify-content-between">
                        <div className="item-title">
                          <bdi>{item.title}</bdi>
                        </div>
                        <div className="item-price">
                          <bdi>{item.price}</bdi>
                        </div>
                      </Card.Title>
                      <Card.Text className="py-2">
                        <div className="item-description">
                          <bdi>{item.description.repeat(10)}</bdi>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <h3 className="text-center">
              <bdi>لا يوجد أصناف</bdi>
            </h3>
          )}
        </div>
      </Zoom>
    </Row>
  );
};

export default ItemsList;
