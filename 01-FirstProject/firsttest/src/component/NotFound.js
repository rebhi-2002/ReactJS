import React from "react";
import { Alert, Button } from "react-bootstrap";

const NotFound = (props) => {
  return (
    <div>
      {/* <h2>No Data Found Product</h2> */}
      {/* <Alert variant="danger">{props.message}</Alert> */}
      <Alert variant={props.color}>{props.message}</Alert>
      <Button className="btn btn-danger">Close</Button>
    </div>
  );
};

export default NotFound;
