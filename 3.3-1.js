var myArray = [1, "Hello"];
var newArray = myArray;
console.log(myArray);
// [1, "Hello"]
console.log(newArray);
// [1, "Hello"]
newArray[0] = 2;
console.log(newArray);
// [2, "Hello"]
console.log(myArray);
// [2, "Hello"]

var myObject = {"size":5, "color":"red"};
var newObject = myObject;
console.log(newObject.color);
// "red"
console.log(myObject.color);
// "red"
newObject.color = "blue";
console.log(newObject.color);
// "blue"
console.log(myObject.color);
// "blue"