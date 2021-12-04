const palindromes = function (string) {
	parsedString = string.toLowerCase().replace(/[^\w]/g, "");
	console.log(parsedString);
	reversedArray = [];
	for (i = 0; i < parsedString.length; i++) {
		reversedArray.unshift(parsedString.charAt(i));
	}
	reversedString = reversedArray.join('');
	return (reversedString === parsedString);
  //could have also used array.reverse()
};


// Do not edit below this line
module.exports = palindromes;
