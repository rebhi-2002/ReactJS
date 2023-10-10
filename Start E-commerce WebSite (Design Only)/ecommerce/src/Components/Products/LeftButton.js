import React from "react";
import next from "../../images/next.png";

const LeftButton = (onClick, onDisable) => {
  return (
    <img
      alt=""
      src={next}
      width="35px"
      height="35px"
      onClick={onClick}
      onDisable={onDisable}
      style={{
        float: "left",
        // marginTop: "220px",
        left: "10px",
        cursor: "pointer",
      }}
      className="position-absolute top-50 translate-middle-y z-1"
    />
  );
};

export default LeftButton;
