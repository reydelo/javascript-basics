/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

*/
var prices = document.getElementsByClassName("all-prices")[0].children;
var sumSelected = document.getElementById("sum-selected");
var sumAll = document.getElementById("sum-all");
var countSelected = document.getElementById("count-selected");
var avrAll = document.getElementById("average-all");
var avrSelected = document.getElementById("average-selected");

sumAll.onclick = function () {
  console.log(sum());
}
countSelected.onclick = function () {
  console.log(count());
}
sumSelected.onclick = function () {
  console.log(someSum());
}
avrAll.onclick = function () {
  console.log(sum()/prices.length);
}
avrSelected.onclick = function () {
  console.log(someSum()/count());
}
