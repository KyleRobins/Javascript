
## Array Methods in JavaScript

### 1. Push Method

The `push` method adds a new element to the end of an array and returns the new length of the array.

```javascript
const fruits = ["apple", "banana", "cherry", "watermelon", "orange"];
fruits.push("lemon");
console.log(fruits); // Output: ["apple", "banana", "cherry", "watermelon", "orange", "lemon"]
```

*Application:* Useful for dynamically updating arrays, such as maintaining a list of items in a shopping cart.

### 2. Pop Method

The `pop` method removes the last element of an array and returns the removed element.

```javascript
fruits.pop();
console.log(fruits); // Output: ["apple", "banana", "cherry", "watermelon", "orange"]
```

*Application:* Often used when managing a stack of elements, like undo functionality in applications.

### 3. Shift Method

The `shift` method removes the first element of an array and returns the removed element.

```javascript
fruits.shift();
console.log(fruits); // Output: ["banana", "cherry", "watermelon", "orange"]
```

*Application:* Useful for managing a queue of elements, such as processing tasks in a specific order.

### 4. Unshift Method

The `unshift` method adds a new element to the beginning of an array and returns the new length of the array.

```javascript
fruits.unshift("cherry");
console.log(fruits); // Output: ["cherry", "banana", "cherry", "watermelon", "orange"]
```

*Application:* Handy for inserting elements at the beginning of an array, like adding a new item to the top of a to-do list.

### 5. Concat Method

The `concat` method joins two or more arrays and returns the result as a new array.

```javascript
const moreFruits = ["Avocados", "Grapes"];
const totalFruits = fruits.concat(moreFruits);
console.log(totalFruits); // Output: ["cherry", "banana", "cherry", "watermelon", "orange", "Avocados", "Grapes"]
```

*Application:* Useful for combining multiple arrays or creating a copy with additional elements.

### 6. Includes Method

The `includes` method checks if an array contains a specified element and returns a boolean.

```javascript
const pl = ["JavaScript", "Golang", "Java", "PHP"];
console.log(pl.includes("Golang")); // Output: true
```

*Application:* Useful for checking the presence of a particular value in an array, like verifying if a programming language is supported.

### 7. Join Method

The `join` method creates a string by joining all elements of an array with a specified separator.

```javascript
console.log(pl.join("-")); // Output: "JavaScript-Golang-Java-PHP"
```

*Application:* Often used to format and display arrays as a single, delimited string.

### 8. Reverse Method

The `reverse` method reverses the order of elements in an array.

```javascript
pl.reverse();
console.log(pl); // Output: ["PHP", "Java", "Golang", "JavaScript"]
```

*Application:* Useful when needing to display items in a different order, like reversing a list of messages.

### 9. Slice Method

The `slice` method selects a part of an array and returns a new array containing the selected elements.

```javascript
console.log(pl.slice(1, 3)); // Output: ["Java", "Golang"]
```

*Application:* Useful for extracting a portion of an array, such as retrieving a subset of data for further manipulation.

### 10. Sort Method

The `sort` method sorts the elements of an array in ascending order.

```javascript
const num = [5, 4, 3, 2, 1];
console.log(num.sort()); // Output: [1, 2, 3, 4, 5]
```

*Application:* Frequently used for organizing numerical or alphabetical data in a specific order. Note that the default behavior is lexicographic, so it might need a custom compare function for non-string elements.