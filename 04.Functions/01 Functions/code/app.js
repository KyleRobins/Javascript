// Functions --> a function is a reusable block of code that performs a specific task or set of tasks.

// Basic syntax of Defining a function

function functionName() {
  //code to be executed
  // statements
  return functionName;
}

functionName(); // execute, call, run your function

// Function Example:

function greet() {
  console.log("hello there");
}

greet();

// Function with a parameter example:

function outputName(name) {
  // parsing a parameter
  console.log(`Hello ${name}`);
}

outputName("Kyle"); // parse an argument

// Return Keyword in Functions

function add(x, y) {
  return x + y;
}

const res = add(10, 20);
console.log(res);