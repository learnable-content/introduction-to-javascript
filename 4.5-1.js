var toy = {"color":"red", "size":"large", "shape":"round"};
var style;

for (style in toy) // iteration for each property 
  { // block of code
    console.log("The " + style + " is " + toy[style]);
    // "The color is red" (first time)
    // "The size is large" (second time)
    // "The shape is round" (third time)
  }