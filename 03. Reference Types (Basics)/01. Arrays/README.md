# Arrays in JavaScript

An array is an ordered, indexed collection of values. It can store multiple values of various types.

## Array Declaration

```javascript
const words = ["hello", "world", "welcome"];
// Array with strings
```

## Empty Array

```javascript
const myList = [];
// Declaration of an empty array
```

## Array of Numbers

```javascript
const numbersArray = [1, 2, 3, 4, 5];
// Array containing numeric values
```

## Array of Strings

```javascript
const stringArray = ["eat", "code", "sleep", "repeat"];
// Array containing string values
```
## Nested Array (Two-Dimensional Array)

```javascript
const nestArr = ["one", ["two", "three"], 1, true, false];
console.log(nestArr[1][1]);
// Accessing items inside a nested array: Output - "three"
```

## Array with Mixed Data Types

```javascript
const mixedArray = [
  { task1: "exercise" },
  [1, 2, 3],
  function hello() {
    console.log("hello");
  },
];
// Array with objects, arrays, and functions
```
## Accessing Items in an Array

```javascript
const myArray = ["h", "e", "l", "l", "o"];

// First element
console.log(myArray[0]); // Output: h

// Last element
console.log(myArray[myArray.length - 1]); // Output: o
console.log(myArray[4]); // Output: o
```

## Use Cases

1. **Storing Related Values:**
   - Arrays are useful for storing related values, such as a list of tasks, names, or numbers.

   ```javascript
   const tasks = ["task1", "task2", "task3"];
   ```

2. **Looping Through Elements:**
   - Arrays can be used with loops to perform operations on each element.

   ```javascript
   for (let i = 0; i < stringArray.length; i++) {
     console.log(stringArray[i]);
   }
   ```

3. **Nested Data:**
   - Nested arrays allow the organization of data hierarchically, useful for representing matrices or nested structures.

   ```javascript
   const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
   ```

4. **Mixed Data Types:**
   - Arrays can store elements of different data types, providing flexibility in data representation.

   ```javascript
   const mixedArray = [1, "hello", { key: "value" }];
   ```

5. **Accessing and Modifying Elements:**
   - Elements in an array can be accessed using index notation, and they can be modified or manipulated as needed.

   ```javascript
   myArray[0] = "H";
   console.log(myArray); // Output: ['H', 'e', 'l', 'l', 'o']
   ```

Remember that array indices start at 0, so the first element is at index 0, the second at index 1, and so on.
