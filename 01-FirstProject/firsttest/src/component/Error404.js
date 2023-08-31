import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorNotFound = () => {
  return (
    <div>
      <h1>Page Not Found 404 Error</h1>
      <Link to="/">
        <Button className="">Go Home</Button>
      </Link>
    </div>
  );
};

export default ErrorNotFound;
