import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import slider1Image from "../../images/slider-1.png";
import slider2Image from "../../images/slider-2.png";
import slider3Image from "../../images/slider-3.png";
import slider4Image from "../../images/slider-4.png";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  /*
    ،Carousel تستخدم للتفاعل مع اختيار العنصر في handleSelect ببساطة، هذه الدالة
    .بقيمة هذا الفهرس index حيث تأخذ الفهرس للعنصر المختار وتقوم بتحديث حالة أو متغير يُسمى
    .بناءً على العنصر المحدد Carousel الذي يحتوي على React هذا من شأنه أن يؤدي إلى تغيير المظهر أو السلوك في المكون
  */

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="slider-background w-100" interval={2000}>
        {/* interval={2000}: [2000ms = 2 second] >> والتاني slider عدد الثواني للإنتقال ما بين كل */}
        <div className="d-flex flex-row justify-content-center align-items-center column">
          <img
            style={{ height: "296px", width: "313.53px" }}
            className="slider-img ms-2"
            src={slider1Image}
            alt="First Slide"
          />
          <div className="my-4 me-2">
            <h3 className="slider-title">هناك خصم كبير</h3>
            <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className="slider-background2 w-100" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center column">
          <img
            style={{ height: "296px", width: "313.53px" }}
            className="slider-img ms-2"
            src={slider2Image}
            alt="Second Slide"
          />
          <div className="my-4 me-2">
            <h3 className="slider-title">هناك خصم كبير</h3>
            <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className="slider-background3 w-100" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center column">
          <img
            style={{ height: "296px", width: "373.53px" }}
            className="slider-img ms-2"
            src={slider3Image}
            alt="Third Slide"
          />
          <div className="my-4 me-2">
            <h3 className="slider-title">هناك خصم كبير</h3>
            <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className="slider-background4 w-100" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center column">
          <img
            style={{ height: "296px", width: "373.53px" }}
            className="slider-img ms-2"
            src={slider4Image}
            alt="Fourth Slide"
          />
          <div className="my-4 me-2">
            <h3 className="slider-title">هناك خصم كبير</h3>
            <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
