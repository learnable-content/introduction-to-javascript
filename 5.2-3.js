console.log(titleCase("hello world."));
// "Hello World."

function titleCase(str) {
  var strArray = str.split(" ");
  var counter;
  for (counter = 0; counter < strArray.length; counter++) {
    strArray[counter] = capitalize(strArray[counter]);
  }
  return strArray.join(" ");
}

function capitalize(str) {
  var result = [];
  result[0] = str.charAt(0).toUpperCase();
  result[1] = str.substring(1); 
  return (result.join(""));
}