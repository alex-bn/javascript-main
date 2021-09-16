// Event Loop in practice:

console.log('Test start');
setTimeout(() => console.log('1 second timer'), 1);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log(res);
});
console.log('Test end.');

// Can you guess the order ?

// Top level code -> code outside of any callback  =>  will run first

// Between the timer and the resolved promise is a bit tricky:
// both the timer and the resolved promise will finish at the exact same time, so right after 0 seconds, the timers callback will be put on the callback queue first but it will be executed only after the callback of the resolved promise! the callback of the resolved promise  will be put on the microtask queue and this microtask queue has priority over the callback queue
/*

1 -> Test start
2 -> Test end
3 -> Resolved promise 1
4 -> Resolved promise 2 -> just to prove that the nr of seconds is not a guarantee 
4 -> 1 second timer

*/

// the number seconds time of the setTimeout() function is not a guarantee that the callback will be fired after 1 second, if the the callback before the setTimeout has precedence and need a longer time to execute then the setTimeout() callback will be fired when the previous one is done
