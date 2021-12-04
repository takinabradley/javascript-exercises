const add = function(num1, num2) {
	return num1 + num2;
};



const subtract = function(num1, num2) {
	return num1 - num2;
};



const sum = function(sumArray) {
  //if (sumArray[0] === undefined) return sumArray[0] = 0;
  return sumArray.reduce( (total, num) => total + num, 0);
  //   same as
  //   return total + num; 
  // }, 0);
};



const multiply = function(multiplyArray) {
  product = multiplyArray.reduce( (total, num) => {
    if (total === undefined) return total = num;
    return total * num;
  });
  return product;
};
/*  Better Solution:
    const multiply = function(array) {
      return array.length
        ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
        : 0;
    };
*/



const power = function(num1, num2) {
	return num1 ** num2;
};



const factorial = function(num) {
  if (num === 0) num = 1;
  
  for (i = num - 1; i > 1; i--) {
    num = num * i;
  }
  return num;
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
