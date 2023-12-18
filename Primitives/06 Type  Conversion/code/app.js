// Type COnversion

// Convert String to Number

let string = "2000";
let string2 = "2300";
let string3 = "4000";

string = parseInt(string); // method 1

string2 = +string2; // method 2

string3 = Number(string3); // method 3

console.log(typeof string2);

// Convert Number to String

let number = 123;

number = number.toString(); // method 1
console.log(typeof number);

number = String(number); // method 2

// Convert String To Decimal

let stringDecimal = "20.54";
stringDecimal = parseFloat(stringDecimal);
console.log(typeof stringDecimal);

