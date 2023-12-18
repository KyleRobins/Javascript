# JavaScript Type Conversion
Type conversion in JavaScript refers to the process of converting a value from one data type to another. This process is often necessary when working with different types of data or when performing operations that expect a specific data type.

## String to Number

### Method 1: `parseInt()`

```javascript
let string = "2000";
let convertedNumber = parseInt(string);
console.log(typeof convertedNumber); // Output: number
```

### Method 2: Unary Plus `+`

```javascript
let string2 = "2300";
let convertedNumber2 = +string2;
console.log(typeof convertedNumber2); // Output: number
```

### Method 3: `Number()`

```javascript
let string3 = "4000";
let convertedNumber3 = Number(string3);
console.log(typeof convertedNumber3); // Output: number
```

## Number to String

### Method 1: `toString()`

```javascript
let number = 123;
let convertedString = number.toString();
console.log(typeof convertedString); // Output: string
```

### Method 2: `String()`

```javascript
let convertedString2 = String(number);
console.log(typeof convertedString2); // Output: string
```

## String to Decimal

### Method 1: `parseFloat()`

```javascript
let stringDecimal = "20.54";
let convertedDecimal = parseFloat(stringDecimal);
console.log(typeof convertedDecimal); // Output: number
```

## Implicit Type Conversion

JavaScript also performs automatic type conversion, known as implicit type conversion or coercion, when operands of different types are involved in an operation.

```javascript
let number1 = 10;
let stringNumber = "5";

let result = number1 + stringNumber; // JavaScript implicitly converts number1 to a string
console.log(result); // Output: "105"
```

## Truthy and Falsy Values

JavaScript has truthy and falsy values. When using a non-boolean value in a boolean context (e.g., in an `if` statement), JavaScript performs type coercion to determine the truthiness or falsiness.

```javascript
let value = "Hello";

if (value) {
  console.log("Truthy"); // Output: Truthy
} else {
  console.log("Falsy");
}
```

## Boolean to String/Number

### Method 1: `toString()`

```javascript
let booleanValue = true;
let convertedStringBoolean = booleanValue.toString();
console.log(typeof convertedStringBoolean); // Output: string
```

### Method 2: `Number()`

```javascript
let convertedNumberBoolean = Number(booleanValue);
console.log(typeof convertedNumberBoolean); // Output: number
```