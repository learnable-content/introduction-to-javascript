var example = function(str) {
  var special = "Judy";
  this.name = str;  
};
var exampleJudy = new example("Judy");

example.prototype.greet = function() {
  if (this.name === special) {
    return("Well, isn't that special?");
  } else {
    return("Hello, " + this.name);
  }
};

console.log(exampleJudy.greet());
// error ReferenceError: special is not defined