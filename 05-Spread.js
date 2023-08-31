// Spread Operators ...

// let newArray = [..lastArray, 0]
// let newObject = {..oldObject, name:'ahmed'}

// * ==========================================================

// let oldArray = [1, 2, 3, 4, 5];
// console.log(oldArray); // [ 1, 2, 3, 4, 5 ]

// let newArray = [...oldArray];
// console.log(newArray); // [ 1, 2, 3, 4, 5 ]

// let newArray = [...oldArray, 10, 11, 12];
// console.log(newArray); // [ 1, 2, 3, 4, 5, 10, 11, 12 ]

// let newArray = [10, 11, 12, ...oldArray];
// console.log(newArray); // [ 10, 11, 12, 1, 2, 3, 4, 5 ]

// * Object:

// let oldObject = { id: "1", name: "ahmed" };
// console.log(oldObject); // { id: '1', name: 'ahmed' }

// let newObject = { ...oldObject, age: "28" };
// console.log(newObject); // { id: '1', name: 'ahmed', age: '28' }

// let newObject = { ...oldObject, name: "mohamed" };
// console.log(newObject); // { id: '1', name: 'mohamed' }

// let newObject = { ...oldObject, name: "" };
// console.log(newObject); // { id: '1', name: '' }

// * let sum = (args) => {}; // (parameter) args: any
// * let sum = (...args) => {} // (parameter) args: any[]

// * Ex.1:

// let sum = (...args) => {
//   return args.filter((item) => item === 1);
// };

// * let sum: (...args: any[]) => any[]
// console.log(sum(5, 6, 8, 1)); // [ 1 ]
// console.log(sum(5, 6, 8)); // []

// * Ex.2:

// let sum = (...args) => {
//   return args.filter((item) => item === 8);
// };

// console.log(sum(5, 6, 8)); // [ 8 ]

// * Ex.3:

// let sum = (...args) => {
//   // console.log(args[0]); // 5
//   return args[0]; // 5
// };

// console.log(sum(5, 6, 8));
