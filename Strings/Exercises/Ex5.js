// Exercise 5: Backticks vs. Single Quotes
// Explore the difference between using backticks (`) and single quotes (') for creating strings. 
// Create a string using both methods and observe any advantages of using backticks, 
// especially when dealing with multiline strings or string interpolation.


// Single Qoutes and Double qoutes are mainly used while declaring strings
// Backticks are mainly used in  interpolation


let singleQoutes = 'Hello am Kyle';
let DoubleQoutes =  "Hello I'm Kyle";
let backTicks = `${singleQoutes} a software engineer`; //interpolation

console.log(backTicks);
