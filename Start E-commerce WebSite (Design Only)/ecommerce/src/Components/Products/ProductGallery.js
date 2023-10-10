import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import LeftButton from "./LeftButton";
import RightButton from "./RightButton";

import mobileImage from "../../images/mobile.png";
import mobile1Image from "../../images/mobile-1.png";
import mobile2Image from "../../images/mobile-2.png";

const ProductGallery = () => {
  // const images = [
  //   {
  //     thumbnail: "https://picsum.photos/id/1018/250/150/",
  //     original: "https://picsum.photos/id/1018/1000/600/",
  //   },
  //   {
  //     original: "https://picsum.photos/id/1015/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1015/250/150/",
  //   },
  //   {
  //     original: "https://picsum.photos/id/1019/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1019/250/150/",
  //   },
  // ];

  const images = [
    {
      original: `${mobileImage}`,
      thumbnail: `${mobileImage}`,
    },
    {
      original: `${mobile1Image}`,
      thumbnail: `${mobile1Image}`,
    },
    {
      original: `${mobile2Image}`,
      thumbnail: `${mobile2Image}`,
    },
  ];

  return (
    <div className="product-gallary-card d-flex justfiy-content-center align-items-center">
      <ImageGallery
        items={images}
        defaultImage={mobileImage}
        showFullscreenButton={false}
        isRTL={true}
        showPlayButton={false}
        showThumbnails={false}
        renderLeftNav={LeftButton}
        renderRightNav={RightButton}
      />
    </div>
  );
};

export default ProductGallery;
