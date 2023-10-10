import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import avatar from "../../images/avatar.png";
import add from "../../images/add.png";

const AdminAddProducts = () => {
  //* https://www.npmjs.com/package/multiselect-react-dropdown?activeTab=readme

  const options = [
    { name: "التصنيف الأول", id: 1 },
    { name: "التصنيف الثاني", id: 2 },
  ];

  const onSelect = (selectedList, selectedItem) => {};
  const onRemove = (selectedList, removedItem) => {};

  //* https://react-select.com/home#getting-started

  const options2 = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const animatedComponents = makeAnimated();

  return (
    <div>
      <Row className="justify-content-start">
        <div className="admin-content-text pb-4 mt-2">إضافة منتج جديد</div>

        <Col xs="12" md="10" lg="8">
          <div className="text-form pb-2">صور للمنتج</div>

          <img src={avatar} alt="" height="100px" width="120px" />

          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
          />
          <input
            type="number"
            min="0"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
          />
          <input
            type="number"
            min="0"
            className="input-form d-block mt-3 px-3"
            placeholder="سعر المنتج"
          />

          <select
            name="languages"
            id="lang"
            className="select input-form-area mt-3 px-2"
          >
            <option value="val">التصنيف الرئيسي</option>
            <option value="val1">التصنيف الأول</option>
            <option value="val2">التصنيف الثاني</option>
            <option value="val3">التصنيف الثالث</option>
            <option value="val4">التصنيف الرابع</option>
          </select>

          <Multiselect
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي"
            options={options} // Options to display in the dropdown
            onSelect={onSelect} // Function will trigger on select event
            onRemove={onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
            style={{ color: "red" }}
          />

          <Select
            className="mt-2"
            placeholder="التصنيف الفرعي"
            // defaultValue={selectedOption}
            // onChange={setSelectedOption}
            options={options2}
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
          />

          <select
            name="brand"
            id="brand"
            className="select input-form-area mt-3 px-2"
          >
            <option value="val">الماركة</option>
            <option value="val2">تصنيف الماركة الأولى</option>
            <option value="val3">تصنيف الماركة الثانية</option>
            <option value="val4">تصنيف الماركة الثالثة</option>
          </select>

          <div className="text-form mt-3">الألوان المتاحة للمنتج</div>

          <div className="mt-1 d-flex">
            <div
              className="color ms-2 border mt-1"
              style={{ backgroundColor: "#E52C2C" }}
            ></div>
            <div
              className="color ms-2 border mt-1"
              style={{ backgroundColor: "white" }}
            ></div>
            <div
              className="color ms-2 border mt-1"
              style={{ backgroundColor: "black" }}
            ></div>
            <img src={add} alt="" width="30px" height="35px" />
          </div>
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

export default AdminAddProducts;
