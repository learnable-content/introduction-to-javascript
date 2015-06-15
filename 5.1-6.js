var color;

console.log(color); // undefined
color = returnColor(); // execute the function
console.log(color); // "green"
color = returnColor();
console.log(color); // "red"

function returnColor() {
  switch(color) {
    case "red":
      return("blue"); // return stops the function
    case "green": // no break is needed
      return("red"); 
    default:
      return("green");
  }
  console.log("This will never display");
}