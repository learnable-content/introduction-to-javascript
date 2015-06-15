var greeting = "hello";
var animals = ["dog", "cat", "bird"];
var salutation = "goodbye";
var target = ["moon", "sun"];

addresser(greeting, animals);
// "hello dog"
// "hello cat"
// "hello bird"

addresser(salutation, target);
// "goodbye moon"
// "goodbye sun"

addresser(greeting, target);
// "hello moon"
// "hello sun"

function addresser(str, arr) {
  var counter;
  for (counter = 0; counter < arr.length; counter++) {
    console.log(str + " " + arr[counter]);
  }
}