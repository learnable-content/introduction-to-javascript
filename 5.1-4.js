var color;

console.log(changeColor);
// shows the code of the function
console.log(changeColor());
// undefined (but the function is executed)
console.log(color);
// "green"

function changeColor() {
  switch(color) {
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