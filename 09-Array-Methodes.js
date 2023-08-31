// Array Simple Methods:
// Slice, Splice, Reverse, Concat, Join

const arr1 = ["a", "b", "c", "d", "e", "f"];

// * Slice

// const arr2 = arr1.slice(2);
// console.log(arr1); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// console.log(arr2); // [ 'c', 'd', 'e', 'f' ]

// const arr2 = arr1.slice(2, 4);
// console.log(arr1); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// console.log(arr2); // [ 'c', 'd' ]

// const arr2 = arr1.slice(-1);
// console.log(arr1); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// console.log(arr2); // [ 'f' ]

// const arr2 = arr1.slice(-2);
// console.log(arr1); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// console.log(arr2); // [ 'e', 'f' ]

// const arr2 = arr1.splice(2);
// console.log(arr1); // [ 'a', 'b' ]
// console.log(arr2); // [ 'c', 'd', 'e', 'f' ]

// * Splice

// const arr2 = arr1.splice(-1);
// console.log(arr1); // [ 'a', 'b', 'c', 'd', 'e' ]
// console.log(arr2); // [ 'f' ]

// * Reverse

// const arr2 = arr1.reverse();
// console.log(arr1); // [ 'f', 'e', 'd', 'c', 'b', 'a' ]
// console.log(arr2); // [ 'f', 'e', 'd', 'c', 'b', 'a' ]

// * Concat

// const arr0 = [1, 2, 3, 4];

// console.log(...arr1, ...arr0); // a b c d e f 1 2 3 4
// console.log(...arr1, "   ", ...arr0); // a b c d e f     1 2 3 4

// const arr2 = [...arr1, ...arr0];
// console.log(arr2); // [ 'a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4 ]

// const arr2 = arr1.concat(arr0);
// console.log(arr2); // [ 'a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4 ]

// * Join

const arr0 = [1, 2, 3, 4];
const arr2 = arr1.concat(arr0);
console.log(arr2.join(" - ")); // a - b - c - d - e - f - 1 - 2 - 3 - 4
console.log(arr2.join(" 0 ")); // a 0 b 0 c 0 d 0 e 0 f 0 1 0 2 0 3 0 4
