# JavaScript Do-While Loop

The `do-while` loop is a type of loop in JavaScript that executes a block of code repeatedly until a specified condition evaluates to `false`. Unlike the `while` loop, the `do-while` loop guarantees that the code block will be executed at least once, even if the condition is initially `false`.

## Syntax

```javascript
do {
  // Code to be executed
} while (condition);
```

- The `do` keyword initiates the code block.
- The code inside the block is executed once.
- The `while` keyword is followed by the condition. If the condition is `true`, the code block will be executed again.
- The loop continues to execute as long as the condition remains `true`.

## Example

```javascript
let count = 0;

do {
  console.log(`Count: ${count}`);
  count++;
} while (count < 5);
```

In this example, the loop will run five times, printing the value of `count` each time. Even though the condition is checked at the end of the loop, the code block is guaranteed to execute at least once.

## Use Cases

- **User Input Validation:**
  ```javascript
  let userInput;
  
  do {
    userInput = prompt("Enter a number: ");
  } while (isNaN(userInput));
  ```

  This ensures that the user enters a valid number before exiting the loop.

- **Menu-driven Programs:**
  ```javascript
  let choice;
  
  do {
    console.log("1. Option 1");
    console.log("2. Option 2");
    console.log("3. Exit");
    
    choice = parseInt(prompt("Enter your choice: "));
  } while (choice !== 3);
  ```

  This keeps displaying a menu until the user chooses to exit.

## Considerations

- Be cautious with the loop condition to avoid infinite loops.
- Ensure that the loop body modifies the variables involved in the condition to avoid an infinite loop.
