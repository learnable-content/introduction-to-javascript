var greeting = "Hello";
var items = ["World"];

function greeter(str, arr) {
  var counter; // local variable in the function
  for (counter = 0; counter < arr.length; counter++) {
    console.log(str + " " + arr[counter]);
  }
}

greeter(greeting, items);
// "Hello World"

console.log(counter);
// "error" (ReferenceError: counter is not defined)