setImmediate(() => console.log('setImmediate'));
setTimeout(() => {
  console.log('setTimeout 2');
  Promise.resolve('promise 0')
    .then(console.log);
});

setTimeout(() => {
  console.log('setTimeout 1');
  process.nextTick(() => console.log('nextTick 1'));
});

Promise.resolve('promise 1')
  .then(console.log);

new Promise((resolve) => {
  console.log('promise 2');
  resolve('promise resolved');
})
  .then(console.log);

process.nextTick(() => console.log('nextTick 2'));
