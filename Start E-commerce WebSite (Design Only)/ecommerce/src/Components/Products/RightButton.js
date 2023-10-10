import React from "react";
import prev from "../../images/prev.png";

const RightButton = (onClick, onDisable) => {
  return (
    <img
      alt=""
      src={prev}
      width="35px"
      height="35px"
      onClick={onClick}
      onDisable={onDisable}
      style={{
        float: "right",
        // marginTop: "220px",
        right: "10px",
        cursor: "pointer",
      }}
      className="position-absolute top-50 translate-middle-y z-1"
    />
  );
};

export default RightButton;
