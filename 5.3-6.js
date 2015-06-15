function predefined() {
  var before = 5; // declared and initialized
  var after = 10; // declared and initialized
  return(before + after);
}

function undefinedAfter() {
  var before = 5; // declared and initialized
  return(before + after);
  var after = 10; // initialized, declaration hoisted
}

function undeclaredAfter() {
  var before = 5; // declared and initialized
  return(before + after);
}

console.log(predefined());
// 15

console.log(undefinedAfter());
// NaN

console.log(undeclarededAfter());
// error: ReferenceError: after is not defined