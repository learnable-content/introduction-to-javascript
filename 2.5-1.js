var sentence = "A sentence is a string.";
var sentence2 = sentence;

console.log(sentence);
// "A sentence is a string."

console.log(sentence2);
// "A sentence is a string."

sentence2 = "This is a different sentence.";

console.log(sentence);
// "A sentence is a string."

console.log(sentence2);
// "This is a different sentence."