"use strict";

const arr = [1, "2", "Hello", { name: "Hi", age: 12 }, 8, 88, 100, 234, 450]
const fruits = ["Banana", "Orange", "Apple"];

console.log(arr.toString());
console.log(...arr);
console.log(fruits instanceof Array);
console.log(Array.isArray(fruits))

/* =================Array method test====================== */
console.log('Array length:', arr.length)
arr.length = 7;
console.log('Array length after change:', arr.length)
console.log(arr)
console.log(arr.at(-1));
// console.log(arr[-1]); undefined
console.log('element return after using pop():', arr.pop())
console.log('Array after is popped:', arr)
console.log('Arr length after using push', arr.push(7))
console.log('Array after is pushed:', arr)
console.log(arr.shift())
console.log('Array after is shifted:', arr)
console.log(arr.unshift("Unshift"))
console.log('Array after is unshifted:', arr)
console.log('Array using join():', arr.join(' . '))
arr[0] = "Hello"
console.log('After Change the first element', arr)
console.log('Is \`arr\` an array', Array.isArray(arr))
console.log('Is 1 an array', Array.isArray(1))
const str1 = "Hello"
const str2 = "word"
const arr2 = [49, 'new arr2', 'hello', 22, 423]
const arr3 = [53, 'new arr3', 'word']
console.log('str concat', str1.concat(str2))
console.log('Arr with concatenating', arr.concat(arr2))
console.log('Arr with multiple concatenating', arr.concat(arr2, arr3))
console.log('Arr with string concatenating', arr.concat('string1', 'string 2'))
arr2.copyWithin(2, 0, 2)
console.log('Array2 after using copyWithin():', arr2)
/* =================Array method test====================== */