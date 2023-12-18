// Boolean Primitives

let isTrue = true;
let isFalse = false;

// Logical Operators

let resultAnd = true && false;  // Evaluates to false
let resultOr = true || false;   // Evaluates to true
let resultNot = !true;          // Evaluates to false

// Comparison Operators

let isEqual = (5 == '5');      // Evaluates to true
let isStrictEqual = (5 === '5');// Evaluates to false
let isNotEqual = (5 != 10);     // Evaluates to true
let isStrictNotEqual = (5 !== '5'); // Evaluates to true

// Truthy Values

let truthyString = "Hello, World!";
let truthyNumber = 42;
let truthyObject = { key: "value" };

if (truthyString && truthyNumber && truthyObject) {
  // This block will execute because all values are truthy
}

// Falsy Values

let falsyString = "";
let falsyNumber = 0;
let falsyNull = null;

if (!falsyString || falsyNumber === 0 || falsyNull === null) {
  // This block will execute because at least one value is falsy
}

// Implicit Type Conversion

let value = "Hello";

if (value) {
  // This block will execute because the string is truthy
}
