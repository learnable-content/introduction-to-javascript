var toy1 = {"color":"red", "size":5, "soft":true};
var toy2 = toy1;

console.log(toy1.color);
// "red"

console.log(toy2.color);
// "red"

toy2.color = "blue";

console.log(toy2.color);
// "blue"

console.log(toy1.color);
// "blue"