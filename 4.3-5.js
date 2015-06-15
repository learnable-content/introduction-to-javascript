var counter = 0; // initial condition

for(;;) { // will loop infinitely until a break
  console.log("this could go on forever");
  counter++; // iterator
  if(counter >= 10) { // terminal condition
    break;
  }
}