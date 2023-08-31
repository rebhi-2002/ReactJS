// * Destructuring: Extract Element From Array and Objects etc..
// - Array
// - Objects

// * ========================================================

// * Array

// const arr = [1, 2, 5, 7];

// const n1 = arr[0];
// const n2 = arr[1];
// console.log(n1, n2); // 1 2

// const [num1, num2] = arr;
// console.log(num1); // 1
// console.log(num1, num2); // 1 2

// const [...num] = arr;
// console.log(num[3]); // 7

// const [, , num3] = arr;
// console.log(num3); // 5

// const [, x] = arr;
// console.log(x); // 2

// * Objects: Array Of Object.

// const ob = [
//   { id: "1", name: "mahmoud" },
//   { id: "1", name: "mahmoud" },
// ];

const ob = { id: "1", name: "mahmoud" };

// const n = ob.name;
// const id = ob.id;
// console.log(n, id); // mahmoud 1

// * in object key => value
// const { name } = ob;
// console.log(name); // mahmoud

// const { name, id } = ob;
// console.log(name, id); // mahmoud 1
