var rand = function(max) {
  return(Math.floor(Math.random() * max) + 1);
};

console.log(rand(5));
// 2 (maybe)
console.log(rand(5));
// 1 (maybe)
// etc.