let firstName = "Kyle ";
let secondName = "Robins";

// 1. Concatenation

let fullName = firstName.concat(secondName);
console.log(fullName);

// 2. Append

// firstName += " appended text";
// console.log(firstName);

// 3. Length

console.log(firstName.length);

// 4. Cases

console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

// 5. Slice

console.log(firstName.slice(0, 2));

// 6. Split & Join

console.log(firstName.split(" ").join(" "));

// 7. Includes

console.log(firstName.includes("y"));

// 8. Trim

console.log(firstName.trim());

// Use of backticks

let backTicks = `Hello
there`;
console.log(backTicks);

console.log(`${firstName} ${secondName}`); // appending strings
