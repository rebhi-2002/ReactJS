// Higher Order Functions:
// -----------------------

// * (1) Function Accept Another Function

// const lowerCase = (str) => {
//   return str.toLowerCase();
// };
// console.log(lowerCase("MAHMOUD")); // mahmoud

//* Higher Order Function
// const transform = (word, fn) => {
//   return fn(word);
// };
// console.log(transform("AHMED", lowerCase)); // ahmed
// console.log(transform("AHMED", lowerCase("mostafa"))); // TypeError: fn is not a function

// ==================================================== \\

// * (2) Function Return Another Function

//* 1:

// const sayHi = (welcome) => {
//   // return function () {};
//   return () => {
//     console.log(welcome);
//   };
// };
// console.log(sayHi("welcome ahmed")); // [Function (anonymous)]

//* 2:

// const sayHi = (welcome) => {
//   console.log(welcome);
//   return () => {}; // [Function (anonymous)]
// };
// console.log(sayHi("welcome ahmed")); // welcome ahmed

//* 3:

// const sayHi = (welcome) => {
//   return () => {
//     console.log(welcome);
//   };
// };
// const say = sayHi("welcome mahmoud");
// console.log(say); // [Function (anonymous)]

// * 4:

// const sayHi = (welcome) => {
//   console.log(welcome);
//   return (name) => {
//     console.log(name);
//   };
// };

// const say = sayHi("welcome");

// console.log(say("ma"));
// console.log(say("ahmed"));
// console.log(say("ali"));

// welcome
// ma
// undefined
// ahmed
// undefined
// ali
// undefined

// * 5:

// Higher Order Function Because Return Another Function
const sayHi = (welcome) => {
  return (name) => {
    console.log(`${welcome} ${name}`);
  };
};

const say = sayHi("welcome");

console.log(say("ma"));
console.log(say("ahmed"));
console.log(say("ali"));

// welcome ma
// undefined
// welcome ahmed
// undefined
// welcome ali
// undefined
