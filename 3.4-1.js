var arr = [1, 2];
var arr2 = [1, 2];
var obj = {"color":"red"};
var obj2 = {"color":"red"};

console.log(arr == arr);
// true
console.log(arr == [1, 2]);
// false
console.log(arr == arr2);
// false
arr2 = arr;
console.log(arr == arr2);
// true

console.log(obj == obj);
// true
console.log(obj == {"color":"red"});
// false
console.log(obj == obj2);
// false
obj2 = obj;
console.log(obj == obj2);
// true