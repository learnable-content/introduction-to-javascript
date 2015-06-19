function greeter(str, arr, display) {
  var counter;
  var output;
  for (counter = 0; counter < arr.length; counter++) {
    output = display(str + " " + arr[counter]);
    console.log(output);
  }
}

greeter("Hello", ["Fred", "Judy"], function(str) {
  return(str);
});
// Hello Fred
// Hello Judy

greeter("Hello", ["Fred", "Judy"], function(str) {
  return(str.toUpperCase() + "!!!");
});
// "HELLO FRED!!!"
// "HELLO JUDY!!!"
