// one script that uses a counter
count = 5;

// another script that sets count based on a price
function thousands(price) {
  count = price * 1000;
  return(count);
}
thousands(50);

// another script that uses count for an iterator
for (count = 0; count < 6; count++) {
  // do something six times
}

// A whole bunch of code later...

console.log(count);
// could be anything