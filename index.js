function isPalindrome(word) {
  // Write your algorithm here
  const reverseWord = word.split("").reverse("").join("") 

  if(word === reverseWord) {
    return true
  }else{
    return false
  }
}

console.log(isPalindrome("abba"))
console.log(isPalindrome("racecar"))
console.log(isPalindrome("robot"))
console.log(isPalindrome("a"))
console.log(isPalindrome("ab"))
console.log(isPalindrome("nursesrun"))

// basically iam supposed to come up with an expressions that takes in a word,
//the word will be taken through an expression that will look if when the word is read backwards
//it will give us the same word
/* 
  Add your pseudocode here
  in this challenge we will be using an if... else statement where the if statemnet will take in
  the truthy condition, and the else will return a falsey

  so as to reverse a word/string youo have to first change it into an array using the 
  .split(), then use the reverse() which reverses the arrangement of elements in an array
  then use the join(), this joins elements in an array back into string.


*/

/*
  Add written explanation of your solution here
  we were tasked with creating a function expression that will take in a string,
  this string will be put into a function that will reverse it and if the reverse and the 
  original is still the same, our solution will run a true, else it will return the false
  and to confirm we will need to call the function, rememebrer when calling that your argument is still a string.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
