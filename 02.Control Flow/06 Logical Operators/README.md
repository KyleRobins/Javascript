### Logical Operators in JavaScript:

Logical operators are used to perform logical operations on boolean values. In JavaScript, there are three main logical operators: `&&` (AND), `||` (OR), and `!` (NOT).

#### 1. AND (`&&`):

The `&&` operator returns true only if both operands are true; otherwise, it returns false.

**Example:**
```javascript
let x = true;
let y = false;

console.log(x && y); // Output: false
```

#### 2. OR (`||`):

The `||` operator returns true if at least one of the operands is true; otherwise, it returns false.

**Example:**
```javascript
let a = true;
let b = false;

console.log(a || b); // Output: true
```

#### 3. NOT (`!`):

The `!` operator is a unary operator that negates the boolean value of its operand. If the operand is true, `!` makes it false, and vice versa.

**Example:**
```javascript
let isTrue = true;

console.log(!isTrue); // Output: false
```

#### Combining Logical Operators:

Logical operators can be combined to create more complex conditions.

**Example:**
```javascript
let age = 25;
let hasLicense = true;

// Using AND and OR together
if (age >= 18 && hasLicense) {
    console.log("You are eligible to drive."); // Output: You are eligible to drive.
} else {
    console.log("You are not eligible to drive.");
}
```

#### Short-Circuit Evaluation:

JavaScript uses short-circuit evaluation with logical operators. If the result can be determined by evaluating only the first operand (for `&&`) or the first two operands (for `||`), the remaining operands are not evaluated.

**Example:**
```javascript
let result = false && someFunction(); // someFunction() is not called because the first operand is false.
```

#### Truthy and Falsy Values:

Keep in mind that JavaScript has truthy and falsy values. In logical operations, values like 0, empty strings, `null`, `undefined`, and `NaN` are considered falsy, while other values are truthy.

**Example:**
```javascript
let value = "Hello";

if (value) {
    console.log("Truthy"); // Output: Truthy
} else {
    console.log("Falsy");
}
```

Understanding and mastering logical operators is essential for writing efficient and effective conditional statements in JavaScript.