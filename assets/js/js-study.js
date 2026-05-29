"use strict";

const arr = [1, "2", "Hello", { name: "Hi", age: 12 }]
const fruits = ["Banana", "Orange", "Apple"];

console.log(arr.toString());
console.log(...arr);
console.log(fruits instanceof Array);
console.log(Array.isArray(fruits))

/* =================Array method test====================== */
console.log('Array length:',arr.length)
arr.length = 3;
console.log('Array length after change:',arr.length)
console.log(arr)
console.log(arr.at(-1));
// console.log(arr[-1]); undefined
console.log(arr.pop())
console.log('Array after is popped:',arr)
console.log(arr.push(7))
console.log('Array after is pushed:',arr)
console.log(arr.shift())
console.log('Array after is shifted:',arr)
console.log(arr.unshift("Unshift"))
console.log('Array after is unshifted:',arr)
/* =================Array method test====================== */