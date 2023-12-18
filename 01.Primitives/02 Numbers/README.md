# JavaScript Numbers

In JavaScript, numbers are a primitive data type used to represent numeric values. They are used for various mathematical operations and computations in JavaScript programs.

## Numeric Primitives

JavaScript provides a single numeric type for all numbers, regardless of whether they are integers or floating-point values. The `number` primitive encompasses both whole numbers and decimals.

### Examples:

```javascript
let integerNumber = 42;
let floatingPointNumber = 3.14;
```

## Arithmetic Operations

JavaScript supports common arithmetic operations for numbers, including addition, subtraction, multiplication, and division.

### Examples:

```javascript
let sum = 10 + 5;        // Addition
let difference = 20 - 8;  // Subtraction
let product = 6 * 7;      // Multiplication
let quotient = 15 / 3;    // Division
```

## Special Numeric Values

JavaScript has two special numeric values: `Infinity` and `NaN` (Not a Number).

- **Infinity:** Represents positive infinity and is the result of dividing a positive number by zero.

  ```javascript
  let positiveInfinity = Infinity;
  ```

- **NaN (Not a Number):** Represents an undefined or unrepresentable value, often the result of an invalid mathematical operation.

  ```javascript
  let notANumber = NaN;
  ```

## Number Methods

JavaScript provides various methods for performing operations on numbers. Some common methods include:

- `isNaN()`: Checks if a value is NaN.
- `parseInt()`: Parses a string and returns an integer.
- `parseFloat()`: Parses a string and returns a floating-point number.
- `toFixed()`: Formats a number using fixed-point notation.

### Example:

```javascript
let numericString = "42";
let parsedInteger = parseInt(numericString);
```

## Number Properties

The `Number` object in JavaScript has several properties, such as:

- `Number.MAX_VALUE`: Represents the maximum numeric value in JavaScript.
- `Number.MIN_VALUE`: Represents the minimum positive numeric value in JavaScript.
- `Number.NaN`: Represents the "Not a Number" value.
- `Number.POSITIVE_INFINITY`: Represents positive infinity.

### Example:

```javascript
let maxNumber = Number.MAX_VALUE;
```

## Conclusion

Understanding JavaScript numbers is crucial for performing mathematical operations and handling numeric values in your applications. Whether you're dealing with integers or floating-point numbers, JavaScript provides a versatile set of tools for working with numeric data.


