var toy = {};

toy.name = "Cardboard Box";

toy.tags = ["imagination", "cats", "recyclable"];

toy.size = {
  "units": "inches",
  "width": 10,
  "height": 5,
  "depth": 3
};

toy.quantity = 10;

console.log(toy.tags[2]);
// "recyclable"

console.log(toy.size.units);
// "inches"