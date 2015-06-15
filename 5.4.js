function greeter(str, arr) {
  var counter;
  for (counter = 0; counter < arr.length; counter++) {
    console.log(str + " " + arr[counter]);
  }
}

console.log(window.greeter);
// the code of the function greeter

window.greeter("Hello", ["Fred", "Judy"]);
// Hello Fred
// Hello Judy