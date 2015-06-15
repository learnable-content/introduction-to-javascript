var example = function(str) {
  this.name = str;
};
var exampleJudy = new example("Judy");
var exampleFred = new example("Fred");

console.log(exampleJudy.name);
// "Judy"

console.log(exampleFred.name);
// "Fred"