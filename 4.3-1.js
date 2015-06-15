var colors = ["red", "green", "blue"];
var question;
var counter; // Declare iterator variables first

for(counter = 0; counter < colors.length; counter++) { 
  question = "Do you like " + colors[counter] + "?";
  console.log(question);
}