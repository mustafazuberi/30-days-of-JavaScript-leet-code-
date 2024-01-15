const map = (arr, fn) => {
  const newArr = arr.map((elem, index) => fn(elem, index));
  return newArr;
};

let arr = [1, 2, 3];
function plusI(n, i) {
  return n + i;
}

const output = map(arr, plusI);
console.log(output);
