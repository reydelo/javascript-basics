var answers = document.getElementById('answer');
//options list to access prices
var options = document.getElementsByTagName('option');
//sum all button
var sumAllButton = document.getElementById('sum-all');
///count selected button
var countSelectedButton = document.getElementById('count-selected');
//sum selected button
var sumSelectedButton = document.getElementById('sum-selected');
//average all button
var averageAllButton = document.getElementById('average-all');
//average selected button
var averageSelectedButton = document.getElementById('average-selected');

//Event handlder functions to make buttons do things

//1. sum all button
///first line ==>> where to listen from, 2nd line ==> what to do when clicked and where to insert it
sumAllButton.addEventListener("click", function (){
  answers.innerHTML = sum();
  });
//2. count selected button
countSelectedButton.addEventListener("click", function () {
  answers.innerHTML = countSelected (options);
});
//3. sum selected button
sumSelectedButton.addEventListener("click", function () {
  answers.innerHTML = sumSelected (options);
});
//4.average all button
averageAllButton.addEventListener("click", function () {
  answers.innerHTML = averagePrices(options);
});
//5. averageSelected button
averageSelectedButton.addEventListener("click", function () {
  answers.innerHTML = averageSelected(options);
});

// /////names
// //assign variables to get items
//
// //nameAnswers - where the selected names get printed
// var nameAnswers = document.getElementById('nameAnswers');
// //location of the all the names
// var namesList = document.getElementsByTagName('textarea')[0].value;
// //print all names button
// var printAllNamesButton = document.getElementById('all-names');
// //print first names button
// var printFirstNamesButton = document.getElementById('first-names');
// //print last names button
// var printLastNamesButton = document.getElementById('last-names');
// //print full names with length
// var printFullNamesLength = document.getElementById('names-with-lengths');
//
//
//
//
// //print all names button action
// printAllNamesButton.addEventListener("click", function () {
//   nameAnswers.innerHTML = "";
//   var finalArrayList = stringToArray(namesList);
//
//   for (var i = 0; i < finalArrayList.length; i++) {
//     var li = document.createElement('li');
//   var ul = document.getElementById('nameAnswers');
//   ul.appendChild(li).innerHTML = finalArrayList[i];
//   }
// });
//
//
// //print all first namaes button
// printFirstNamesButton.addEventListener("click", function  () {
//   nameAnswers.innerHTML = "";
//    var finalArrayList = stringToArray(namesList);
//
//   for (var i = 0; i < finalArrayList.length; i++) {
//     var li = document.createElement('li');
//   var ul = document.getElementById('nameAnswers');
//   ul.appendChild(li).innerHTML = finalArrayList[i].split(" ").shift();
//   }
// });
//
// //print all last names button
// ///need to refactor to account for IV on the first name
// printLastNamesButton.addEventListener("click", function  () {
//   nameAnswers.innerHTML = "";
//   var finalArrayList = stringToArray(namesList);
//
//   for (var i = 0; i < finalArrayList.length; i++) {
//     var li = document.createElement('li');
//   var ul = document.getElementById('nameAnswers');
//   ul.appendChild(li).innerHTML = finalArrayList[i].split(" ").pop();
//   }
// });
//
// printFullNamesLength.addEventListener("click", function () {
//   nameAnswers.innerHTML = "";
//   var finalArrayList = stringToArray(namesList);
//
//   for (var i = 0; i < finalArrayList.length; i++) {
//     var li = document.createElement('li');
//   var ul = document.getElementById('nameAnswers');
//   ul.appendChild(li).innerHTML = finalArrayList[i] + "-" + finalArrayList[i].length;
//   }
// });
