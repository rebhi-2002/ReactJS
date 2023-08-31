// Modern JavaScript
// -----------------

// Normal Function:-
// function sum() {
//   your code here
// }

// Arrow Function:-
// const sum = () => {
//   your code here
// };

// ==============================================

// ** Normal Function ** //

// Ex.1:
// function sayHello() {
//   console.log("hello"); // hello
// }
// sayHello();

// Ex.2:
// function sayHello(name) {
//   console.log(name); // hello ma
// }
// sayHello("hello ma");

// ** Arrow Function ** //

// () => {};

// Ex.1:
// const say = (name) => {
//   console.log(name); // arrow
// };
// say("arrow");

// Ex.2:
// const say = (name) => console.log(name); // {} في حالة لو كنت بعمل عملية على سطر واحد، لو أكثر من عملية لازم أحط
// say("arrow"); // arrow

// Ex.3:
// const say = (name, age) =>
//   console.log(`Your Name is: ${name} and Your Age is: ${age}`);
// say("arrow", 44);

// Ex.4:
// const say = name => console.log(name);
// say("arrow"); // arrow

// Ex.5:
// const say = num => {
// return num * 2;
// };
// console.log(say(3)); // 6

// Ex.6:
// const say = num => num * 2;
// console.log(say(3)); // 6

// Ex.7:
// const say = num => 2;
// console.log(say()); // 2

// Ex.8:
// const say = _=> 2; // const x = "jcv";
// console.log(say()); // 2

// Ex.9:                             =>  // Ex.9:
// function sayHello(name) {         =>  // let sayHello = (name) => {
//   console.log(name); // hello ma  =>  //   console.log(name); // hello ma
// }                                 =>  // };
// sayHello("hello ma");             =>  // sayHello("hello ma");

// let sayHello = (name) => console.log(name);
// sayHello("hello ma");
