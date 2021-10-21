const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "three");
});

Promise.all([promise1, promise2, promise3]).then((message) => {
  console.log(message); //[ 'one', 'two', 'three' ]
});

Promise.race([promise1, promise2, promise3]).then((message) => {
  console.log(message); //two (fastest) // resolve of reject of first
});

// not working in node version 14.18.1
Promise.any([promise1, promise2, promise3]).then((message) => {
  console.log(message); //two (runs any resolved first)
});

Promise.allSettled([promise1, promise2, promise3]).then((message) => {
  message.forEach((message) => console.log(message.status)); // fulfilled fulfilled fulfilled
});
