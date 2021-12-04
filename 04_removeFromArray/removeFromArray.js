const removeFromArray = function(array, ...value) {
  newArray = [];
  
  i = 0;
	while (i <= (array.length - 1)) {
    item = array[i];
		if (!value.includes(item)) {
      newArray.push(array[i]);
    } 
		i++;
	}
  
  return newArray;
};


/*const removeFromArray = function(array, ...value) {
  newArray = [];
  
  array.forEach((item) => {
    if (!value.includes(item)) {
      newArray.push(item);
    }
	});
  
  return newArray;
}; */

// Do not edit below this line
module.exports = removeFromArray;
