function greeter(str, arr) {
  var counter;
  var phrase;
  for (counter = 0; counter < arr.length; counter++) {
     phrase = str + " " + arr[counter];
     console.log(shout(phrase));
  }

  function shout(words, emphasis) {
    var punctuation = emphasis;
    if (!punctuation) {
      punctuation = "!";
    }
    return(words.toUpperCase() + punctuation);
  }
}

greeter("Hello", ["Fred", "Judy"]);
// "HELLO FRED!"
// "HELLO JUDY!"