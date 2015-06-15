var firstNumber = 3;
var secondNumber = 1000;
var word = "Hello";

firstNumber *= secondNumber;
console.log(firstNumber);
// 3000

firstNumber /= secondNumber;
console.log(firstNumber);
// 3

secondNumber %= firstNumber;
console.log(secondNumber);
// 1

word *= firstNumber;
console.log(word);
// NaN