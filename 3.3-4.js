var aNumber = 3;
var arr = [1, 2];
var obj = {"age":25};

console.log(arr);
// [1,2]
console.log(typeof(arr));
// "object"
console.log(obj.age);
// 25
console.log(typeof(obj));
// "object"

arr += aNumber;
console.log(arr);
// "1,23"
console.log(typeof(arr));
// String

obj += aNumber;
console.log(obj.age);
// undefined
console.log(obj);
// "[object Object]3"
console.log(typeof(obj));
// String