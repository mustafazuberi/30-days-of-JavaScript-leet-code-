const arr = [0, 10, 20, 30];
const greaterThan10 = (n, i) => n > 10;

const filter = (arr, fn) => {
  const newArr = arr.filter((elem, index) => fn(elem, index));
  return newArr;
};

const output = filter(arr, greaterThan10);

console.log(output);
