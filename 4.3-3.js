var colors = ["red", "green", "blue"];
var question;
var counter;

for(counter = 0; counter < colors.length; counter++) {
  // each loop, the value of counter is incremented
  question = "Do you like " + colors[counter] + "?";
  console.log(question);
}