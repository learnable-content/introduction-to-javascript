var things = [];
var words = ["Another", "array"];

things[0] = words;
things[2] = 2;
things[3] = true;

console.log(things);
// [["Another", "array"], undefined, 2, true]

console.log(typeof(things[0]));
// "object"

console.log(typeof(things[1]));
// "undefined"

console.log(typeof(things[2]));
// "number"

console.log(typeof(things[3]));
// "boolean"