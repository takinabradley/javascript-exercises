const fibonacci = function(num) {
  if (num < 0) return "OOPS";
  fibonacciArray = [1, 1]
  for (i = 2; i < num; i++) {
    fibonacciArray[i] = fibonacciArray[i-1] + fibonacciArray[i-2];
  }
  console.log(fibonacciArray)
  return fibonacciArray[num-1]
};

// Do not edit below this line
module.exports = fibonacci;
