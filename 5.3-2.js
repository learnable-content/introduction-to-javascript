var phrase = "always available";

function example() {
  var local = "Only available inside example()";
  console.log(phrase);
  console.log(local);
}

example();
// "always available"
// "Only available inside example()"

console.log(phrase);
// "always available"

console.log(local);
// "error" (ReferenceError: local is not defined)