// Just check resolve and reject

let simplePromise = new Promise((resolve, reject) => {
  let a = 2;
  if (a * 2 == 4) {
    resolve(`Resolved ${a}`);
  } else {
    reject(`Rejected ${a}`);
  }
});

simplePromise
  .then((message) => {
    console.log("This is in the then " + message);
  })
  .catch((error) => {
    console.log("This is in the catch " + error);
  });
