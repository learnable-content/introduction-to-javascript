var words = ["these", "are", "some", "words"];

console.log(words.length);
// 4

console.log(words.reverse());
// ["words", "some", "are", "these"]

console.log(words.sort());
// ["are", "some", "these", "words"]

console.log(words.toString());
// "are,some,these,words"

console.log(words.join(" # "));
// "are # some # these # words"

console.log(words.push("augmented"));
// 5 (and "augmented" is now the 5th element)

console.log(words.pop());
// "augmented" (now words has only 4 elements)

console.log(words);
// ["are", "some", "these", "words"]