

// Create a JavaScript program that checks whether a given year is a leap year or not. A leap year is a year that is evenly divisible by 4, except for years that are divisible by 100. However, years divisible by 400 are also leap years.

// Write a function called `isLeapYear` that takes a year as an argument and returns `true` if it's a leap year and `false` otherwise. Use logical operators to implement the conditions for leap years.

// After defining the function, test it with different years and log the results to the console.




function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Test cases
console.log(isLeapYear(2000)); // Should return true
console.log(isLeapYear(2020)); // Should return true
console.log(isLeapYear(1900)); // Should return false
console.log(isLeapYear(2022)); // Should return false
console.log(isLeapYear(2024)); // Should return true
