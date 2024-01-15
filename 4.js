const createCounter = function (n) {
  let val = n;

  const increment = () => ++n;
  const decrement = () => --n;
  const reset = () => {
    n = val;
    return n;
  };

  return { increment, decrement, reset };
};
const counter = createCounter(10);
const first = counter.increment();
const second = counter.reset();
const third = counter.decrement();
console.log(first, second, third)