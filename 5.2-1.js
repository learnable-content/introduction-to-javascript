var word = "hello";
var list = ["dog", "cat", "bird"];

greeter(word, list); // arguments
// "hello dog"
// "hello cat"
// "hello bird"

function greeter(str, arr) { // parameters
  var counter;
  for (counter = 0; counter < arr.length; counter++) {
    console.log(str + " " + arr[counter]);
  }
}