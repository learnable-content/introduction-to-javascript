var greeter = function(str, arr) {
  var counter;
  for (counter = 0; counter < arr.length; counter++) {
    console.log(str + " " + arr[counter]);
  }
};

greeter("Hello", ["Fred", "Judy"]);
// Hello Fred
// Hello Judy