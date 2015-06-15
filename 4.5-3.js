var toy = {"color":"red", "size":"large", "shape":"round"};
var style;

for (style in toy) {
  console.log("The " + style + " is " + toy.style);
}
// "The color is red" 
// "The size is large"
// "The shape is round"
// or maybe
// "The size is large"
// "The color is red" 
// "The shape is round"
// or...