var smallNumber = 4;
var mediumNumber = 8;
var largeNumber = 1000;

console.log(smallNumber + mediumNumber * largeNumber);
// 8004

console.log((smallNumber + mediumNumber) * largeNumber);
// 12000

console.log(smallNumber++ * mediumNumber);
// 32 (and smallNumber is now 5)

console.log(largeNumber / --smallNumber);
// 250 (and smallNumber is now 4)

console.log(largeNumber / (smallNumber++ * smallNumber));
// 50 (and smallNumber is now 5)