// Array Simple Methods:
// Filter, Find, Sort, Reduce

// * Map

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const arr2 = arr1.map((item) => item > 2);
// console.log(arr1); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// console.log(arr2); // [ false, false, true, true, true, true, true, true, true ]

// const arr2 = arr1.map((item) => {
//   if (item > 2) {
//     return true;
//   }
// });
// console.log(arr1); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// console.log(arr2); // [ undefined, undefined, true, true, true, true, true, true, true ]

// const arr2 = arr1.map((item) => {
//   if (item > 2) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(arr1); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// console.log(arr2); // [ false, false, true, true, true, true, true, true, true ]

// const arr2 = arr1.map((item) => {
//   if (item > 2) {
//     console.log(item);
//   } else {
//   }
// });

// ** Result: **

// 3
// 4
// 5
// 6
// 7
// 8
// 9

// * Filter

// const arr2 = arr1.filter((item) => item > 2);
// console.log(arr1); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// console.log(arr2); // [ 3, 4, 5, 6, 7, 8, 9 ]

// const arr2 = arr1.filter((item) => item < 3);
// console.log(arr1); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// console.log(arr2); // [ 1, 2 ]

// const arr2 = arr1.filter((item) => item === 6);
// console.log(arr1); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// console.log(arr2); // [ 6 ]

// const arr2 = arr1.filter((item) => item === 12);
// console.log(arr1); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// console.log(arr2); // []

// const arr2 = arr1.filter((item) => item === '');
// console.log(arr1); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// console.log(arr2); // []

// * Reduce

// const arr1 = [1, 2, 3];
// const arr2 = arr1.reduce((total, current) => total + current);
// console.log(arr1); // [ 1, 2, 3 ]
// console.log(arr2); // 6

// const arr1 = [1, 4, 3];
// const arr2 = arr1.reduce((total, current) => total + current);
// console.log(arr1); // [ 1, 4, 3 ]
// console.log(arr2); // 8

// const arr2 = arr1.reduce((total, current) => total + current, 0);
// console.log(arr1); // [ 1, 4, 3 ]
// console.log(arr2); // 8
// total = 0
// 0 + 1 = 1
// 1 + 4 = 5
// 5 + 3 = 8

// const arr1 = ["a", "b", "c"];
// const arr2 = arr1.reduce((total, current) => total + current);
// console.log(arr1); // [ 'a', 'b', 'c' ]
// console.log(arr2); // abc

// const arr1 = ["a", "b", "c"];
// const arr2 = arr1.reduce((total, current) => total + current, 0);
// console.log(arr1); // [ 'a', 'b', 'c' ]
// console.log(arr2); // 0abc

// * Find

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const firstValue = arr1.find((item) => item > 3);
// console.log(arr1); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// console.log(firstValue); // 4

// * Sort

// const arr1 = [5, 3, 1, 6, 5, 0, 11, 10, 9];
// const arr2 = arr1.sort();
// console.log(arr1); // [ 0, 1, 10, 11, 3, 5, 5, 6, 9 ]
// console.log(arr2); // [ 0, 1, 10, 11, 3, 5, 5, 6, 9 ]

// const arr1 = [5, 3, 1, 6, 2, 0, 11, 10, 9];
// const arr2 = arr1.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// console.log(arr1); // [ 0, 1, 2, 3, 5, 6, 9, 10, 11 ]
// console.log(arr2); // [ 0, 1, 2, 3, 5, 6, 9, 10, 11 ]

// const arr1 = [5, 3, 1, 6, 2, 0, 11, 10, 9];
// const arr2 = arr1.sort((a, b) => {
//   if (a < b) return 1;
//   if (b < a) return -1;
// });
// console.log(arr1); // [ 11, 10, 9, 6, 5, 3, 2, 1, 0 ]
// console.log(arr2); // [ 11, 10, 9, 6, 5, 3, 2, 1, 0 ]
