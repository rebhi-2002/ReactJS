// ** Export & Import

// * class1.js:-
// -------------
// const func = () => {
//   console.log("one man");
// };
// export default func;

// * mainApp.js:-
// --------------
// import func from "./class1.js";
// func();

// * ===============================================================

// Ex.1:
// -----
// import sayHello from "./03-class1.mjs"; // import sayHello from "../03-class1.mjs"; // import sayHello from "./03-class1";
// sayHello("Hello from main"); // Hello from main

// Ex.2-1:
// -------
// import { sayHello } from "./03-class1.mjs";
// sayHello("Hello from main"); // Hello from main

// Ex.2-2:
// -------
// import { sayHello, sayGoodbay } from "./03-class1.mjs";
// sayHello("Hello from main"); // Hello from main
// sayGoodbay("good bay"); // good bay

// Ex.3:
// -----
// import { sayHello, sayGoodbay } from "./03-class1.mjs";
// sayHello("Hello from main"); // Hello from main
// sayGoodbay("good bay"); // good bay
// _same result_

// Ex.4:
// -----
// import { sayHello, sayGoodbay, SERVER_NAME } from "./03-class1.mjs";
// sayHello("Hello from main"); // Hello from main
// sayGoodbay("good bay"); // good bay
// console.log(SERVER_NAME); // localhost

// Ex.5:
// -----
// import { sayHello, sayGoodbay, SERVER_NAME } from "./03-class1.mjs";
// sayHello("Hello from main"); // Hello from main
// sayGoodbay("good bay"); // good bay
// console.log(SERVER_NAME); // localhost

// Ex.6:
// -----
// import { sayHello, sayGoodbay, SERVER_NAME } from "./03-class1.mjs";
// sayHello("Hello from main"); // Hello from main
// sayGoodbay(SERVER_NAME); // localhost

// Ex.7:
// -----
// import { sayHello } from "./03-class1.mjs";
// sayHello("Hello from main"); // Hello from main

// * =============================================================== * //

// 04-Car.mjs
// ----------

// Ex.1:
// -----
// import Car from "./04-Car.mjs";
// let myCar = new Car();
// myCar.printColor(); // red

// Ex.2:
// -----
// import Car from "./04-Car.mjs";
// let myCar = new Car();
// myCar.printColor(); // undefined
// myCar.printColor("blue"); // blue

// Ex.3:
// -----
// import Car from "./04-Car.mjs";
// let myCar = new Car();
// myCar.printColor(); // red
// myCar.printColor("blue"); // red

// Ex.4:
// -----
// import Car from "./04-Car.mjs";
// let myCar = new Car();
// myCar.printColor(); // red

// Ex.5:
// -----
// import Car from "./04-Car.mjs";
// let myCar = new Car();
// myCar.printColor("blue"); // blue

// Ex.6:
// -----
// import Car from "./04-Car.mjs";
// let myCar = new Car();
// myCar.printColor("blue"); // blue
// myCar.printRED(); // Hello from RED Class

// Ex.7:
// -----
// import Car from "./04-Car.mjs";
// let myCar = new Car();
// myCar.printColor(); // green
// myCar.printRED(); // Hello from RED Class

// Ex.8:
// -----
// import Car from "./04-Car.mjs";
// let myCar = new Car("gray");
// myCar.printColor(); // gray
// myCar.printRED(); // Hello from RED Class

// Ex.9:
// -----
// import Car from "./04-Car.mjs";
// let myCar = new Car(); // constructor
