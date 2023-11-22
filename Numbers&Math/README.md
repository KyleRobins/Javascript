# Numbers and Math in JavaScript

JavaScript provides powerful support for working with numbers and performing various mathematical operations. This guide will cover the basics of handling numbers, mathematical operations, and some common use cases.

## Working with Numbers

In JavaScript, you can work with different types of numbers, including integers and floating-point numbers.

### Declaring Numbers

You can declare a variable and assign a number to it:

```javascript
let myNumber = 42;
let myFloat = 3.14;
```

### Basic Math Operations

JavaScript supports standard arithmetic operations:
```javascript
let sum = 5 + 3;      // Addition
let difference = 10 - 4;  // Subtraction
let product = 6 * 7;   // Multiplication
let quotient = 20 / 5;  // Division
```

### Modulus Operator

The modulus operator % returns the remainder of a division:

```javascript
let remainder = 10 % 3;  // Returns 1 (10 divided by 3 leaves a remainder of 1)
```

### Math Object

JavaScript provides a built-in Math object with a variety of methods for more complex mathematical operations.

#### Example: Random Numbers

You can generate random numbers using Math.random():

```javascript
let randomNum = Math.random();  // Returns a random number between 0 (inclusive) and 1 (exclusive)
```

#### Example: Power and Square Root

```javascript
let square = Math.pow(4, 2);   // Returns 16 (4 raised to the power of 2)
let squareRoot = Math.sqrt(25); // Returns 5 (square root of 25)
```
