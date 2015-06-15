var newVariable = 1;

console.log(typeof(newVariable));
// "number"

console.log(Boolean(newVariable));
// true

newVariable = null;

console.log(typeof(newVariable));
// "object"

console.log(Boolean(newVariable));
// false