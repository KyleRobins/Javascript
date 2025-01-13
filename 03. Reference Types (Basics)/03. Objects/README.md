# Objects in JavaScript

Objects in JavaScript are a complex data type that allows you to store and organize data in key-value pairs. They are versatile and commonly used for representing real-world entities and organizing related information.

## Creating an Object

```javascript
const cars = {
  model: "Toyota",
  year: 2020,
  type: "sedan",
};
```

In this example, `cars` is an object with three properties: `model`, `year`, and `type`. The values associated with these properties are "Toyota," 2020, and "sedan," respectively.

## Accessing Items from an Object

### Dot Notation

```javascript
const games = {
  ballGames: "basketball",
  tableGames: "tabletennis",
  waterGames: "swimming",
};

console.log(games.tableGames); // Output: tabletennis
console.log(games.ballGames); // Output: basketball
console.log(games.waterGames); // Output: swimming
```

Dot notation is the most common way to access properties of an object. Simply use a dot followed by the property name to retrieve its value.

### Bracket Notation

```javascript
const careers = {
  techCareers: "programmer",
  accountingCareers: "accountant",
};

console.log(careers["accountingCareers"]); // Output: accountant
console.log(careers["techCareers"]); // Output: programmer
```

Bracket notation allows you to access object properties using a string inside square brackets. This is useful when the property name contains special characters or spaces.

## Adding Items to an Object

```javascript
const languages = {
  scripting: "bash",
  lowLevel: "C",
  highLevel: "python",
};

languages.compiled = "Java";
console.log(languages);
```

You can add new properties to an object by simply assigning a value to a new property. In this example, the `compiled` property is added to the `languages` object.

## Deleting Elements from an Object

```javascript
delete languages.compiled;
console.log(languages);
```

Use the `delete` keyword followed by the property name to remove a property from an object. In this example, the `compiled` property is deleted from the `languages` object.

Objects in JavaScript provide a powerful and flexible way to organize and manipulate data. Understanding how to create, access, add, and delete properties from objects is fundamental to JavaScript programming.