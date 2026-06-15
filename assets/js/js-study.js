"use strict";

const arr = [1, "2", "Hello", { name: "Hi", age: 12 }, 8, 88, 100, 234, 450]
const fruits = ["Banana", "Orange", "Apple"];

console.log(arr.toString());
console.log(...arr);
console.log(fruits instanceof Array);
console.log(Array.isArray(fruits))

/* =================Array basic method test====================== */
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

const arrTwoDimension = [[12, 13], [14, 15], [16, 17]]
console.log('Array before using flat:', arrTwoDimension);
console.log('Array after using flat:', arrTwoDimension.flat());
const arrFlatMap = [12, 13, 14, 15, 16, 17]
console.log('Array before using flat map:', arrFlatMap);
console.log('Array after using flat map:', arrFlatMap.flatMap(x => [x, x * 10, x * 100]));
console.log('Array before using flat map:', arrFlatMap);


const spliceArr = [12, 32, 52]
console.log('Array before splice:', spliceArr);
spliceArr.splice(1, 5, 'hello', 'Minh')
console.log('Array after splice:', spliceArr)

const arrBeforeSlice = [34, 25, 12, 32, 52]
const arrAfterSlice = arrBeforeSlice.slice(3)
console.log('Original array:', arrBeforeSlice)
console.log('Sliced array:', arrAfterSlice)
/* =================Array basic method test====================== */

/* =================Array search method test====================== */
const searchArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, NaN]
console.log('Index of 4:', searchArr.indexOf(4));
console.log('Last index of 4:', searchArr.lastIndexOf(4));
console.log('indexOf() NaN', searchArr.indexOf(NaN));
console.log('includes() NaN:', searchArr.includes(NaN));
console.log('find() method:', searchArr.find((value, index, arr) => {
    return value < 7;
}));
console.log('findIndex() method:', searchArr.findIndex((value, index, arr) => {
    return value > 7;
}));
console.log('findLast() method:', searchArr.findLast((value, index, arr) => {
    return value > 7;
}));
console.log('findLastIndex() method:', searchArr.findLastIndex((value, index, arr) => {
    return value > 7;
}));

const numSortArray = [1, 4, 5, 8, 3, 2, 53, 34, 10]
const charSortArray = ['hello', 'banana', 'matcha', 'apple', 'conquer', 'happy']
numSortArray.sort()
console.log('Array of numbers after sort:', numSortArray)
charSortArray.sort()
console.log('Array of strings after sort:', charSortArray.sort())
numSortArray.reverse()
console.log('Array of numbers after reverse:', numSortArray.reverse())
charSortArray.reverse()
console.log('Array of strings after reverse:', charSortArray.reverse())
const numSortArrayWithToSorted = [1, 4, 5, 8, 3, 2, 53, 34, 10]
const charSortArrayWithToReversed = ['hello', 'banana', 'matcha', 'apple', 'conquer', 'happy']
numSortArrayWithToSorted.toSorted()
console.log('Array of numbers after using toSorted():', numSortArrayWithToSorted)
charSortArrayWithToReversed.toReversed()
console.log('Array of string after using toReversed():', charSortArrayWithToReversed)
console.log('Find the minimum number:', Math.min.apply(null, numSortArrayWithToSorted))
console.log('Find the minimum number:', Math.max.apply(null, numSortArrayWithToSorted))
console.log(Boolean(0))
/* =================Array search method test====================== */

/* =================Array iteration method test====================== */
const arrForEach = [1, 2, 53, 634, 45, 23, 634, 63]
arrForEach.forEach((value, index, array) => {
    value = value * 2;
    array[index] = value;
})
console.log(arrForEach);

const arrMapMethod = [1, 34, 235, 53, 4, 63, 4, 5, 675, 685, 345]
const arrMapMethod2 = arrMapMethod.map((value, index, array) => {
    return array[index] = index;
})
console.log(arrMapMethod2);

const arrReduce = [23, 4, 63, 67, 8, 456, 745, 75, 4]
let sumArrReduce = arrReduce.reduce((initalValue, value) => {
    return initalValue + value;
}, 100000)
console.log("Total from reduce method:", sumArrReduce);
/* =================Array iteration method test====================== */