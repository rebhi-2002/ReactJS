// Modern JavaScript
// -----------------

// * Async(Multi Synchronous) Await

//             async func

// await p1      await p2      await p3

// * ==============================================================

let eat = true;
let play = false;
let sleep = true;

const EATING = () => {
  return new Promise((success, error) => {
    if (eat) {
      success("Iam Eeating");
    } else {
      error("Not Eating");
    }
  });
};

const PLAYING = () => {
  return new Promise((success, error) => {
    if (play) {
      success("Iam Playing");
    } else {
      error("Not Playing");
    }
  });
};

const SLEEPING = () => {
  return new Promise((success, error) => {
    if (sleep) {
      success("Iam Sleeping");
    } else {
      error("Not Sleep");
    }
  });
};

// async function run() {}
const run = async () => {
  try {
    const eatMessage = await EATING();
    console.log(eatMessage); // Iam Eeating
    const playMessage = await PLAYING();
    console.log(playMessage); // Iam Playing
    const sleepMessage = await SLEEPING();
    console.log(sleepMessage); // Iam Sleeping
  } catch (error) {
    console.log(error);
  }
};

run();
