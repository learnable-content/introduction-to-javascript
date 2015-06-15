var truth = true;
var falsehood = false;

console.log(truth && falsehood && truth);
// false

console.log(truth || falsehood || truth);
// true

console.log(truth && falsehood || truth);
// true

console.log(truth || falsehood && truth);
// true

console.log(truth && falsehood || falsehood);
// false