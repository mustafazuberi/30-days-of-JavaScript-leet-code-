const arr = [1, 2, 3, 4, 5, 6, 7];
const sum = arr.reduce((previousValue, currentValue) => {
  return currentValue + previousValue;
}, 50);
console.log(`Sum of Array ${arr} is :`, sum);

// previous value will be the last returned value first time it will me the val at
// first index :(we can also set the previous value which it took first time as we
// set above 50)
// The output will be the single element not an array
