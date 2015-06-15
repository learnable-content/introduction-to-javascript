var color;

console.log(color); // undefined
changeColor(); // function defined below
console.log(color); // "green"
changeColor();
console.log(color); // "blue"
changeColor();
console.log(color); // "red"
changeColor();
console.log(color); // "green" (etc.)

function changeColor() {
  switch(color) { // has access to color
    case "red":
      color = "blue";
      break;
    case "green":
      color = "red";
      break;
    default:
      color = "green";
  }
}