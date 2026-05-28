"use strict";
console.log("Hello")

const arr = [1, "2", "Hello", { name: "Hi", age: 12 }]
console.log(arr.toString());
console.log(...arr);

const fruits = ["Banana", "Orange", "Apple"];

console.log(fruits instanceof Array);
console.log(Array.isArray(fruits))