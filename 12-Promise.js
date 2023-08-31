// Modern JavaScript
// -----------------

// * Asynchronous, Synchronous, Promise

// * Single Thread: Synchronous Task => [Sequential]
// * Multi Thread: Asynchronous => [It works in Parallel] by Promise(ES6)

// Fn: function () {}
// ==================
// 2-Seconed Fn1
// 10-Seconed Fn2
// 3-Seconed Fn3

// =================================================================================

console.log("hello");
console.log("second");
console.log("third");

// * Result:
// =========
// - hello
// - second
// - third

// let myPromise = new Promise((resolve, reject) => {});

// let myPromise = new Promise((success, error) => {
//   const x = 0;
//   if (x === 0) {
//     success("This Ok");
//   } else {
//     error("This Falid");
//   }
// });

// myPromise.then(
//   (resolve) => console.log(resolve), // This Ok
//   (rejected) => console.log(rejected)
// );

let myPromise = new Promise((success, error) => {
  const x = 0;
  if (x === 0) {
    console.log("this is success"); // this is success
    success("This Ok");
  } else {
    error("This Falid");
  }
}).then(
  (resolve) => console.log(resolve), // This Ok
  (rejected) => console.log(rejected)
);
