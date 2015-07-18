/* Define a function called `oldestPerson` that takes an object with names as
 keys and ages as values (e.g., {'Chuck': 22, 'Brian': 46}), and then returns
 the name of the oldest living person. */

/* Define a function called `longestWord` that takes a string and returns the
 longest word in the string. */
/* Refactor the `longestWord` function so that it ignores punctuation. */

function longestWord(string) {
  // logic to remove punctuation
  string = string.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  string = string.replace(/\s{2,}/g," ");
  // longest word logic
  var words = string.split(' ');
  var longest = "";
  for (i in words) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

console.log(longestWord("This, right here, is my, string!"));

/* Define a function called `factorial` that takes a random number as an
 argument and then returns the factorial of that given number. */

/* **Bonus**: Write a function called `palindrome` that takes a string as an
 argument and returns the string in reversed order. Return true if the string is
 the same as the reversed string, otherwise return false. */
