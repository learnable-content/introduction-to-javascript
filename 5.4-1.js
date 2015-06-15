(function() {
  function greeter(str, arr) {
    var counter;
    for (counter = 0; counter < arr.length; counter++) {
      console.log(str + " " + arr[counter]);
    }
  }

  greeter("Hello", ["Fred", "Judy"]);
  // Hello Fred
  // Hello Judy
}());

console.log(window.greeter);
// undefined

window.greeter("Hello", ["Fred", "Judy"]);
// error TypeError: window.greeter is not a function