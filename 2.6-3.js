var example = 5.5;

console.log(example.toString());
// "5.5"

console.log(parseInt(example, 10));
// 5 (parsed using base 10)

console.log(parseFloat(example));
// 5.5

console.log(example.toString());
// "5.5"

console.log(example.toFixed());
// "6" (rounded up)

console.log(example.toPrecision(3));
// "5.50" (with a total length of 3 digits)
