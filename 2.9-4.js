var sentence = "This is a sentence";
var odds = "1,3,5,7,9";
var words = sentence.split(" ");
var oddArray = odds.split(",");
var chunks = sentence.split("s");
var singleItem = sentence.split("Q");

console.log(words);
// ["This", "is", "a", "sentence"]
console.log(oddArray);
// ["1", "3", "5", "7", "9"]
console.log(chunks);
// ["Thi", " i", " a ", "entence"]
console.log(singleItem);
// ["This is a sentence"]