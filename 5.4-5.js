var greeter = function(str, arr, display) {
  var counter;
  var output;
  for (counter = 0; counter < arr.length; counter++) {
    output = display(str + " " + arr[counter]);
    console.log(output);
  }
};

var say = function(str) {
  return(str);
};

var shout = function(str) {
  return(str.toUpperCase() + "!!!");
};

greeter("Hello", ["Fred", "Judy"], say);
// Hello Fred
// Hello Judy

greeter("Hello", ["Fred", "Judy"], shout);
// "HELLO FRED!!!"
// "HELLO JUDY!!!"