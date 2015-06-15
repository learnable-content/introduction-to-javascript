var colors = ["red", "green", "blue"];
var question;
var counter;

for(
  counter = 0; // initial counter state
  counter < colors.length; // terminal counter state
  counter++) // iteration for each loop 
  { // block of code
    question = "Do you like " + colors[counter] + "?";
    console.log(question);
    // "Do you like red?" (first time)
    // "Do you like green?" (second time)
    // "Do you like blue?" (third time)
  }