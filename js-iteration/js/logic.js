/*

Hints for the first problem:

  1. Define a function that:
    - is assigned to a variable named `sum`
    - has one parameter named `options`
    - returns the calculated sum of all of the values of all of the options passed in

NOTE: use a `for` loop to make this happen.

*/

// **Prices (use `while` loops here)**

// Users can see the sum of all prices
var sum = function () {
  var total = 0;
  for (var i = 0; i < prices.length; i++) {
    total += parseInt(prices[i].value);
  }
  return total;
}
// Users can see the number of prices that are selected (the count)
var count = function () {
  var count = 0;
  for (i in prices) {
    if (prices[i].selected === true) {
      count ++;
    }
  }
  return count;
}
// Users can see the sum of the selected prices
var someSum = function () {
  var total = 0;
  for (i in prices) {
    if (prices[i].selected === true) {
      total += parseInt(prices[i].value);
    }
  }
  return total;
}
// Users can see the average of all of the prices
