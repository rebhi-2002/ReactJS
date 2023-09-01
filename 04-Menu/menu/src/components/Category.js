import React from "react";
import { Row, Col } from "react-bootstrap";

import Roll from "react-reveal/Roll";

const Category = ({ itemsData, filterByCategory, allCategory }) => {
  // To Filter By Category
  const onFilter = (cat) => {
    filterByCategory(cat);
  };

  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center flex-wrap">
        {/*
          <div>
            <button onClick={() => onFilter("الكل")} style={{ border: "1px solid #b45b35" }} className="btn mx-2"><bdi>الكل</bdi></button>
            <button onClick={() => onFilter("فطار")} style={{ border: "1px solid #b45b35" }} className="btn mx-2"><bdi>فطار</bdi></button>
            <button onClick={() => onFilter("غداء")} style={{ border: "1px solid #b45b35" }} className="btn mx-2"><bdi>غداء</bdi></button>
            <button onClick={() => onFilter("عشاء")} style={{ border: "1px solid #b45b35" }} className="btn mx-2"><bdi>عشاء</bdi></button>
          </div>
        */}

        {/* {itemsData.length >= 1 ? (
          itemsData.map((item, index) => {
            return (
              <div>
                <button
                  key={index}
                  onClick={() => onFilter(item.category)}
                  style={{ border: "1px solid #b45b35" }}
                  className="btn mx-2"
                >
                  <bdi>{item.category}</bdi>
                </button>
              </div>
            );
          })
        ) : (
          <h4 className="text-center">
            <bdi>لا يوجد تصنيفات الأن</bdi>
          </h4>
        )} */}

        <Roll>
          {allCategory.length >= 1 ? (
            allCategory.map((category, index) => {
              return (
                <div className="py-1" key={index}>
                  <button
                    onClick={() => onFilter(category)} // category: (4) ['الكل', 'فطار', 'غداء', 'عشاء']
                    style={{ border: "1px solid #b45b35" }}
                    className="btn mx-2"
                  >
                    <bdi>{category}</bdi>
                  </button>
                </div>
              );
            })
          ) : (
            <h4 className="text-center">
              <bdi>لا يوجد تصنيفات الأن</bdi>
            </h4>
          )}
        </Roll>
      </Col>
    </Row>
  );
};

export default Category;
