// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

import { Card, Button } from "react-bootstrap";

const CardDetails = (props) => {
  console.log(props);

  const handleClick = () => {
    console.log("you clicked");
    console.log(props.title);
    // props.clickMe(props.title);
    // props.clickMe(props.description);
    props.clickMe(
      "💫 Title is " + props.title + " and Description is " + props.description
    );
  };

  return (
    <div className="p-2">
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        {/* <Card.Img variant="top" src="Vanamo_Logo.png" /> */}
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          {/* <Button onClick={() => console.log("you clicked")} variant="primary"> */}
          <Button onClick={handleClick} variant="primary">
            {/* <Button onClick={props.onClick} variant="primary"> */}
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

// export default CardDetails;

// * .عند النقر على الزر handleClick الفرق بين الشيفرتين المذكورتين يتعلق بكيفية تعاملهما مع الحدث وتنفيذ الوظيفة

//** 1. `<Button onClick={handleClick} variant="primary">`:
// .وستُحدث الوظيفة عند النقر فعليًا على الزر ،`onClick` كمعامل لخاصية `handleClick` هذه الطريقة تمرر المرجع للوظيفة

//** 2. `<Button onClick={handleClick()} variant="primary">`:
// .فور تحميل الصفحة بسبب استدعاء الوظيفة داخل الأقواس، ولا تنتظر حدوث النقر على الزر `handleClick` هذه الطريقة تستدعي وتنفذ الوظيفة

/*
 * ،React عند تعيينها كقيم لخصائص في `{}` إلا ربما أنه يجب دائمًا تجنب استدعاء الدوال داخل العلامات
 * .في هذه الحالة، إذا كنت تريد أن تكون هذه الدالة مرتبطة بحدث معين `onClick` مثل
 */

const CardDetails2 = ({ title, description, img, clickMe, children }) => {
  const handleClick = () => {
    clickMe(title);
    clickMe(description);
  };

  return (
    <div className="p-2">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {children}
          <Button onClick={handleClick} variant="primary">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardDetails2;
