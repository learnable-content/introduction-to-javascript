var toy = {"color":"red", "size":"large", "shape":"round"};
var style;

for (style in toy) {
  console.log("The " + style + " is " + toy.style);
  // "The color is undefined" (first time)
  // "The size is undefined" (second time)
  // "The shape is undefined" (third time)
}