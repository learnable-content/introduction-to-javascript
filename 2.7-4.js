var valueless;
console.log(valueless);
// undefined
console.log(Boolean(valueless));
// false

var notNumber = 2.0 * "Hello";
console.log(notNumber);
// NaN
console.log(Boolean(notNumber));
// false

console.log(Boolean(0));
// false

console.log(Boolean(""));
// false