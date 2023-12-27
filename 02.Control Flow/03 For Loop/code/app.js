// for (initialExpression; condition; incrementExpression or decrementExpression) {}

for (let i = 1; i <= 10; i++) {
  console.log("--- Outer Loop ---");
  //nested loop
  for (let j = 1; j <= 5; j++) {
    console.log("Inner Loop", j);
  }
}
