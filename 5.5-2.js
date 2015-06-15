var example = function(str) {
  var special = "Judy";
  this.name = str;  
  this.greet = function() {
    if (this.name === special) {
      return("Well, isn't that special?");
    } else {
      return("Hello, " + this.name);
    }
  };
};
var exampleJudy = new example("Judy");
var exampleFred = new example("Fred");  

console.log(exampleJudy.greet());
// "Well, isn't that special?"
console.log(exampleJudy.special);
// undefined
console.log(exampleFred.greet());
// "Hello, Fred"
console.log(exampleFred.special);
// undefined