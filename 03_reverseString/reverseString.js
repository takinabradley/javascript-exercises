const reverseString = function(str) {
  let antiString = [];
  
  for (i = 0; i <= (str.length - 1); i++) {
    antiString.unshift(str.charAt(i));
  }
  
  return antiString.join('');
};

// Do not edit below this line
module.exports = reverseString;
