var toy = {"color":"red", "size":"large", "shape":"round"};
var toyProperties = Object.keys(toy); // get an array of keys
var counter;
var style;

console.log(toyProperties);
// ["color", "size", "shape"]

for (counter = 0; counter < toyProperties.length; counter++) {
  style = toyProperties[counter];
  console.log("The " + style + " is " + toy[style]);
  // "The color is red" (first time)
  // "The size is large" (second time)
  // "The shape is round" (third time)
}