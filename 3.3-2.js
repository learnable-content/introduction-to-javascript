var firstNumber = 4;
var secondNumber = 1000;
var word = "Hello";

firstNumber += secondNumber;
console.log(firstNumber);
// 1004

firstNumber -= secondNumber;
console.log(firstNumber);
// 4

word += firstNumber;
console.log(word);
// Hello4

firstNumber += word;
console.log(firstNumber);
// NaN

word -= firstNumber;
console.log(word);
// NaN