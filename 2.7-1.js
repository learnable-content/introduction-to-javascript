var value1 = 1;
var value2 = "1";
var same = (value1 == value2);
var exact = (value1 === value2);

console.log(same);
// true (coerced both values to String type)

console.log(exact);
// false (no type coercion)
