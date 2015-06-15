var color = "red";

console.log("You chose " + color);
// "You chose red"

if (color == "blue") {
  console.log("Blue is my favorite color");
} else if (color == "red") {
  console.log("That's not as bad as green");
} else {
  conslole.log("You have bad taste");
}
// "That's not as bad as green"
// because (color == "blue") is false
// but (color == "red") is true