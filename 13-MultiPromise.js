// Modern JavaScript
// -----------------

// * Multi Promise

// eat.then ==> play.then ==> sleep.then

/*
let eat = true;
let play = true;
let sleep = true;

let eating = new Promise((success, error) => {
  // if (eat === true)
  if (eat) {
    success("Iam Eeating");
  } else {
    error("Not Eating");
  }
});

let playing = new Promise((success, error) => {
  if (play) {
    success("Iam Playing");
  } else {
    error("Not Playing");
  }
});

let sleeping = new Promise((success, error) => {
  if (sleep) {
    success("Iam Sleeping");
  } else {
    error("Not Sleep");
  }
});

eating.then(
  (resolve) => console.log(resolve),
  (rejected) => console.log(rejected)
);
playing.then(
  (resolve) => console.log(resolve),
  (rejected) => console.log(rejected)
);
sleeping.then(
  (resolve) => console.log(resolve),
  (rejected) => console.log(rejected)
);
*/

let eat = true;
let play = true;
let sleep = true;

let eating = new Promise((success, error) => {
  if (eat) {
    success("Iam Eeating");
  } else {
    error("Not Eating");
  }
});

let playing = new Promise((success, error) => {
  if (play) {
    success("Iam Playing");
  } else {
    error("Not Playing");
  }
});

let sleeping = new Promise((success, error) => {
  if (sleep) {
    success("Iam Sleeping");
  } else {
    error("Not Sleep");
  }
});

eating.then(
  (resolve) => {
    console.log(resolve);
    playing.then(
      (resolve) => {
        console.log(resolve);
        sleeping.then(
          (resolve) => {
            console.log(resolve);
          },
          (rejected) => {
            console.log(rejected);
          }
        );
      },
      (rejected) => {
        console.log(rejected);
      }
    );
  },
  (rejected) => {
    console.log(rejected);
  }
);
