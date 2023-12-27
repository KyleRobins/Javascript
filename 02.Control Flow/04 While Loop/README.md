# JavaScript While Loops

In JavaScript, a `while` loop is another type of loop that repeatedly executes a block of code as long as a specified condition is true.

## Basic Syntax

```javascript
while (condition) {
    // code to be executed
}
```

- **Condition:** Evaluated before each iteration. If `true`, the loop continues; if `false`, the loop exits.

## Example

```javascript
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
```

This loop will output the numbers 0 through 4.

## Breaking Down the Components

### Initialization

- `let i = 0`: Initializes a counter variable `i` before the loop.

### Condition

- `i < 5`: Specifies that the loop should continue as long as `i` is less than 5.

### Code Block

- `console.log(i)`: Outputs the value of `i` to the console in each iteration.
- `i++`: Increments the value of `i` by 1 after each iteration.

## Common Patterns

### Infinite Loop

```javascript
while (true) {
    // code that runs indefinitely
}
```

Be cautious when using an infinite loop and ensure there is a way to break out of it.

### Looping through an Array

```javascript
const array = [1, 2, 3, 4, 5];
let i = 0;

while (i < array.length) {
    console.log(array[i]);
    i++;
}
```

This loop iterates through each element of the array.

### Breaking the Loop

```javascript
let i = 0;

while (i < 5) {
    if (i === 3) {
        break; // Exits the loop when i is equal to 3
    }
    console.log(i);
    i++;
}
```

Exits the loop when `i` is equal to 3.

### Skipping Iterations

```javascript
let i = 0;

while (i < 5) {
    i++;
    if (i === 2) {
        continue; // Skips the rest of the code in this iteration and moves to the next
    }
    console.log(i);
}
```

Skips the iteration when `i` is equal to 2.

## Conclusion

While loops offer a different way to create loops in JavaScript. Understanding their syntax and common patterns will help you write flexible and efficient code, especially when the number of iterations is not known in advance.