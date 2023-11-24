// Exercise 7: String Comparison
// Create two strings, "apple" and "orange." Use string comparison operators (<, >, ===, etc.) to determine which string comes first alphabetically.

let string1 = "apple";
let string2 = "orange";

if (string1 < string2) {
    console.log(string1 + " comes before " + string2 + " alphabetically.");
} else if (string1 > string2) {
    console.log(string2 + " comes before " + string1 + " alphabetically.");
} else { 
    console.log("Both Strings are equal");
}
