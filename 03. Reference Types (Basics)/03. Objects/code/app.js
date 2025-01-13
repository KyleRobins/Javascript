// Objects --> a complex data type that allows you to store and organize data in key-value pairs.

// Sample object

const cars = {
  model: "Toyota",
  year: 2020,
  type: "sedan",
};

// Acessing items from an object

// Dot notation
const games = {
  ballGames: "basketball",
  tableGames: "tabletenis",
  waterGames: "swimming",
};

console.log(games.tableGames);
console.log(games.ballGames);
console.log(games.waterGames);

// Brackets notation
const careers = {
  techCareers: "programmer",
  accountingCareers: "accountant",
};

console.log(careers["accountingCareers"]);
console.log(careers["techCareers"]);

// Adding items to an object

const languages = {
  scripting: "bash",
  lowLevel: "C",
  highLevel: "python",
};

languages.compiled = "Java";
console.log(languages);

// delete elements from object

delete languages.compiled;
console.log(languages);
