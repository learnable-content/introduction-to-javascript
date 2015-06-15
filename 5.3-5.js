// local to a function
function thousands(price) {
  var count = price * 1000;
}

// immediately invoked function expressions 
(function() { // start a function expression
  var count;
  for (count = 0; count < 6; count++) {
    // do something six times
  }
}()); // execute that function expression

// local to a private object (less safe)
var myApp = {};
myApp.count = "Hello".length;

console.log(count);
// error: ReferenceError: count is not defined