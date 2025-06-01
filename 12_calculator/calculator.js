const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(arr) {
  if (arr.length == 0) return 0;
  return arr.reduce((acc, curr) => acc * curr, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
	if (a == 0) return 1;
  let ans = 1;
  while (a != 0) {
    ans *= a;
    a -= 1;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
