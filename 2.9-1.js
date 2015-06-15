var words1 = ["This", "is", "an", "array"];
var words2 = words1;

console.log(words1);
// ["This", "is", "an", "array"]

console.log(words2);
// ["This", "is", "an", "array"]

words2[0] = "That";

console.log(words2);
// ["That", "is", "an", "array"]

console.log(words1);
// ["That", "is", "an", "array"]