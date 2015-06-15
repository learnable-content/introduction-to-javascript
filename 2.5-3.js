var sentence = "A sentence is a string.";
 
console.log(sentence.replace("sentence", "word"));
// "A word is a string."

console.log(sentence.substring(2, 10));
// "sentence"

console.log(sentence.substr(2, 8));
// "sentence"

console.log(sentence.substring(2));
// "sentence is a string."

console.log(sentence.substr(2));
// "sentence is a string."

console.log(sentence);
// "A sentence is a string."