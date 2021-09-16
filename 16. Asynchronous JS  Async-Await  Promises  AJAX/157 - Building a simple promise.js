// Simulate a lottery

// a fulfilled promise means to win the lottery and a rejected one means to loose

// var Promise: PromiseConstructor
// new <any>(executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void) => Promise<any>

// Building a promise:

const lotteryPromise = new Promise(function (resolve, reject) {
  //
  console.log('Lottery draw is happening 🤞');

  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN ✨');
    } else {
      reject(new Error('You lost..🤨'));
    }
  }, 2000);
});

// Consuming promises:

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// Promisifying means to convert callback based asynchronous behaviour to promise based:
// a function that returns a promise, promisifying setTimeout()

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//         setTimeout(() => {
//           console.log('5 second passed');
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

wait(1)
  .then(() => {
    console.log('I waited for 1 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 3 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 4 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 5 seconds'));

// Create a fulfilled or rejected promise immediately:

Promise.resolve(
  'Just Pass The Resolved Value And You Promise Will Resolve Immediately'
).then(res => console.log(res));

Promise.reject(
  'Just Pass The Rejected Value And You Promise Will Reject Immediately'
).catch(err => console.log(err));

Promise.reject(new Error('Rejected Promise')).catch(err => console.log(err));
