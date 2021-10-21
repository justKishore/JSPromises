// Call back

function footballMatchCallback(callback, errorCallback) {
  console.log("Inside footballMatchCallback");
  let teamGoal = 3;
  let opponentGoal = 3;

  if (teamGoal < opponentGoal) {
    errorCallback({
      name: "Defeat",
      message: "Opponents played better than us :(",
    });
  } else if (teamGoal == opponentGoal) {
    errorCallback({
      name: "Draw",
      message: `Both scored ${teamGoal} number of goals`,
    });
  } else {
    callback("We won!!!");
  }
}

footballMatchCallback(
  (message) => {
    console.log(message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);

// Promise

function footballMatchPromise() {
  console.log("Inside footballMatchPromise");
  let teamGoal = 3;
  let opponentGoal = 1;

  return new Promise((resolve, reject) => {
    if (teamGoal < opponentGoal) {
      reject({
        name: "Defeat",
        message: "Opponents played better than us :(",
      });
    } else if (teamGoal == opponentGoal) {
      reject({
        name: "Draw",
        message: `Both scored ${teamGoal} number of goals`,
      });
    } else {
      resolve("We won!!!");
    }
  });
}

footballMatchPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });

// Output:
// Inside footballMatchCallback
// Draw Both scored 3 number of goals
// Inside footballMatchPromise
// We won!!!
