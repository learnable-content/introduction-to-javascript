function example() {
  var local = "Only available inside example()"; // with var
  global = "Available anywhere once executed"; // without var
}

console.log(local);
// "error" (ReferenceError: local is not defined)

console.log(global);
// "error" (ReferenceError: local is not defined)

example(); // execute the example function

console.log(local);
// "error" (ReferenceError: local is not defined)

console.log(global);
// "Also available anywhere"