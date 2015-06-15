var adjectiveCount = 3;
var adjectiveArray = [];
var compliment;

switch (adjectiveCount) {
  case 4: 
    adjectiveArray.push("exquisite");
  case 3: 
    adjectiveArray.push("fantastic");
  case 2:
    adjectiveArray.push("amazing");
  default: 
    adjectiveArray.push("great");
}

compliment = "You have " + adjectiveArray.join(", ") + " taste!";
console.log(compliment);
// You have fantastic, amazing, great taste!