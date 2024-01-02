// Push method --> adds a new element to the end of an array and returns the new length of an array

const fruits = ["apple", "banana", "cherry", "watermelon", "orange"];
fruits.push("lemon");
console.log(fruits);

// Pop method --> removes the last element of an array and returns the removed element

fruits.pop();
console.log(fruits);

// Shift method --> removes the first element of an array and returns the removed element

fruits.shift();
console.log(fruits);

// Unshift method --> adds a new element to the beginning of an array and returns the new length of an array

fruits.unshift("cherry");
console.log(fruits);

// concat method  --> joins two or more arrays and returns a result

const moreFruits = ["Avoccados", "Grapes"];
const totalFruits = fruits.concat(moreFruits);
console.log(totalFruits);

// Includes method --> checks if an array contains a specified element

const pl = ["JavaScript", "Golang", "Java", "PHP"];
console.log(pl.includes("Golang"));

// Join method -->

console.log(pl.join("-"));

// Reverse method --> reverses the order of the elements in an array

pl.reverse();
console.log(pl);

// Slice -->  selects the part of an array and returns the new array

console.log(pl.slice(1, 3));

// Sort method --> sorts the elements of an array in ascending order

const num = [5, 4, 3, 2, 1];
console.log(num.sort());
