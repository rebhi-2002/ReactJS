import React from "react";

import NavBarLogin from "../../Components/Uitily/NavBarLogin";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";
import Footer from "../../Components/Uitily/Footer";

const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "1200px" }}>
      {/* <NavBarLogin /> */}
      <Slider />
      <HomeCategory />
      <CardProductsContainer
        title="الأكثر مبيعا"
        btnTitle="المزيد"
        pathText="/products"
      />
      <DiscountSection />
      <CardProductsContainer
        title="أحدث الأزياء"
        btnTitle="المزيد"
        pathText="/products"
      />
      <BrandFeatured
        title="أشهر الماركات"
        btnTitle="المزيد"
        pathText="/allBrand"
      />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
