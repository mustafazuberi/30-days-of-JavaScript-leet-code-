const nums = [1, 2, 3, 4];
const fn = function sum(accum, curr) {
  return accum + curr;
};
const init = 0;

var reduce = function (nums, fn, init) {
  if (!Array.isArray(nums)) return;

  let answer = init;

  //perform operation with answer
  for (let i = 0; i < nums.length; i++) {
    answer = fn(answer, nums[i]);
  }

  return answer;
};

console.log(reduce(nums, fn, init));
