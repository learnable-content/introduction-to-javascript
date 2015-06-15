var truth = true;
var falsehood = false;
var firstWord = "Hello";
var secondWord = "World";

console.log(falsehood || falsehood);
// false

console.log(truth || falsehood);
// true

console.log((3 < 4) || ("Banana" > "Apple"));
// true

console.log(firstWord || secondWord);
// "Hello"

console.log(secondWord || firstWord);
// "World"

console.log(falsehood || firstWord);
// "Hello"