var example = function(str) {
  this.name = str;
  this.greet = function() {
    return("Hello, " + this.name);
  };
};
var exampleJudy = new example("Judy");
var exampleFred = new example("Fred");

console.log(exampleJudy.greet());
// "Hello, Judy"
console.log(exampleFred.greet());
// "Hello, Fred"