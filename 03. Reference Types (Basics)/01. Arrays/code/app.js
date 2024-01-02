// -----------------------------------
// An array is an object that can store multiple values at once. For example,
// const words = ["hello", "world", "welcome"];
// ['string', 123, true, []]
// -----------------------------------

// -----------------------------------

// Empty Array

const myList = [];

// array of numbers

const numbersArray = [1, 2, 3, 4, 5];
// console.log(numbersArray);

// array of strings

const stringArray = ["eat", "code", "sleep", "repeat"];
// console.log(stringArray);

// accessing items from your array

// console.log(stringArray[0]);
// console.log(stringArray[1]);
// console.log(stringArray[2]);
// console.log(stringArray[3]);

// Nested Array || Two Dimension Array

const nestArr = ["one", ["two", "three"], 1, true, false];
//console.log(nestArr[1]); // The nested array in this case is index 1
console.log(nestArr[1][1]); //  accessing items inside a nested array

// array with mixed data types

const mixedArray = [
  { task1: "exercise" },
  [1, 2, 3],
  function hello() {
    console.log("hello");
  },
];

// ---------------------------------

// Acessing Items

const myArray = ["h", "e", "l", "l", "o"];

// first element
console.log(myArray[0]); // h

// last element
console.log(myArray[myArray.length - 1]); // o
