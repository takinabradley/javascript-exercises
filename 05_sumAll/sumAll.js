const sumAll = function(num1, num2) {
  let sum = 0;
  let larger = 0;
  let lower = 0;
  
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return "ERROR";
  } else if (num1 < 0 || num2 < 0) {
    return "ERROR";
  } else if (num1 < num2) {
    larger = num2;
    lower = num1;
  } else if (num1 > num2) {
    larger = num1;
    lower = num2;
  }
  
  let i = lower;
  while ( i <= larger ) {
    sum += i;
    i++;
  }

  return sum;
};


// Do not edit below this line
module.exports = sumAll;
