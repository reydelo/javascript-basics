////Prices
//1. sumfunction
function sum () {
  options;
  var total = 0;
  for (var i = 0; i < options.length; i++) {
    total += parseInt(options[i].value);
  }
  return total;
}
//2.  count the selected prices
function countSelected (options){
  var count = 0;
  for (var i = 0; i < options.length; i++) {
    if (options[i].selected === true) {
      count ++;
    }
  }
  return count;
}
//3.  sum selected
function sumSelected (options) {
  var total = 0;
  for (var i = 0; i < options.length; i++) {
    if (options[i].selected === true) {
      total += parseInt(options[i].value);
    }
  }
  return total;
}
//4. average all the prices
function averagePrices (options) {
  var total = 0;
  for (var i = 0; i < options.length; i++) {
    total += parseInt(options[i].value);
  }
  return total/(options.length);
}
//5. average selected prices
function averageSelected (options) {
  var total = 0;
  var numberOfSelections = 0;
  for (var i = 0; i < options.length; i++) {
    if (options[i].selected === true) {
     total += parseInt(options[i].value);
     numberOfSelections ++;
    }
  }
  return total/(numberOfSelections);
}


///names

//1. show all names, take in a string, return an array; input string of names
//==> output arrays
function stringToArray (string) {
  var namesListArray  = string.split("\n");
  return namesListArray;
}
