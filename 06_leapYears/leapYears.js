const leapYears = function(year) {
if ((year >= 400) && (year % 4 === 0) && (year % 400 === 0)) {
  return true;
} else if ((year >= 100) && (year % 4 === 0) && (year % 100 === 0)) {
    return false;
} else if (year % 4 === 0) {
    return true;
} else if (!(year % 4 === 0)) {
    return false;
} else {
    return 'ERROR';
}
/*
  simple solution I was too dumb to come up with:
    return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
*/
};

// Do not edit below this line
module.exports = leapYears;
