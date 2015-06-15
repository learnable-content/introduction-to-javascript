var truth = true;
var falsehood = false;
var firstWord = "Hello";
var secondWord = "World";

console.log(truth && truth);
// true

console.log(truth && falsehood);
// false

console.log((3 < 4) && ("Banana" > "Apple"));
// true

console.log(firstWord && secondWord);
// "World"

console.log(secondWord && firstWord);
// "Hello"

console.log(falsehood && firstWord);
// false