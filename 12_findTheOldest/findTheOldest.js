const findTheOldest = function(array) {
  currentYear = (new Date()).getFullYear();
  
  array.sort( (a, b) => {
    if (a.yearOfDeath === undefined) a.yearOfDeath = currentYear;
    if (b. yearOfDeath === undefined) b.yearOfDeath = currentYear;
    
    firstPerson = a.yearOfDeath - a.yearOfBirth;
    secondPerson = b.yearOfDeath - b.yearOfBirth;
    
    return firstPerson > secondPerson ? -1 : 1;
  });
  
  console.log(array);
  return array[0];
};
//drawbacks of this approach is that it re-orders the array. a better solution using reduce is in solutions.
// Do not edit below this line
module.exports = findTheOldest;
