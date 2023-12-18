# JavaScript Conditional Statements.

Conditional statements in JavaScript are essential for controlling the flow of a program based on specified conditions. They enable developers to execute different blocks of code depending on whether a certain condition is true or false.

## if Statement

The `if` statement is used to execute a block of code if a specified condition is true.

```javascript
let a = 20;
let b = 10;

if (a > b) {
  console.log("a is greater than b");
}
```

## if-else Statement

The `if-else` statement allows you to execute one block of code if the condition is true and another block if it is false.

```javascript
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is not greater than b");
}
```

## if-else if-else Statement

The `if-else if-else` statement is used when there are multiple conditions to check.

```javascript
if (a > b) {
  console.log("a is greater than b");
} else if (a < b) {
  console.log("a is less than b");
} else {
  console.log("a is equal to b");
}
```

## Nested Conditional Statements

You can nest conditional statements to handle more complex scenarios.

```javascript
let c = 5;

if (a > b) {
  if (a > c) {
    console.log("a is the greatest");
  } else {
    console.log("c is the greatest");
  }
} else {
  console.log("a is not greater than b");
}
```

## Ternary Operator

The ternary operator provides a concise way to write conditional statements.

```javascript
let result = (a > b) ? "a is greater than b" : "a is not greater than b";
console.log(result);
```

## Truthy and Falsy Values

JavaScript evaluates conditions based on truthy and falsy values. Understand the concept to write effective conditional statements.

```javascript
let value = "Hello";

if (value) {
  console.log("Truthy"); // Output: Truthy
} else {
  console.log("Falsy");
}
```
