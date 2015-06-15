var count = 5;

console.log(count);
// 5
console.log(window.count);
// 5

window.count = 10;
console.log(count);
// 10
console.log(window.count);
// 10