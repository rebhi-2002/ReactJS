import React from "react";
import { Button } from "react-bootstrap";
// import { useLocation, useHistory, userParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  // const history = useHistory(); // 5,4,... في الإصدارات القديمة
  const navigation = useNavigate(); // console.log(navigation);
  navigation("/home"); // (React Router 5) VS (React Router 6)
  return (
    <div>
      <h1>Footer</h1>
      <a href="/">Go Home</a>
      {/* <Button className="">Go Home</Button> */}
      <Link to="/about">
        <Button className="">Go About</Button>
      </Link>
    </div>
  );
};

export default Footer;
