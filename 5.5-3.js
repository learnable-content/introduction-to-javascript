var example = function(str) {
  this.name = str;
};
var exampleJudy = new example("Judy");
var exampleFred = new example("Fred");

example.prototype.greet = function() {
  return("Hello, " + this.name);
};

console.log(exampleJudy.greet());
// "Hello, Judy"
console.log(exampleFred.greet());
// "Hello, Fred"