// 1. Create variable name (fruit) & store "banana".
// 2. If case is "Banana" print "Banana is good!"
// 3. If case is "Orange" print "I am not a fan of orange."
// 4. If case is "Apple" print "How you like them apples?"
// 5. default "I  have never heard of that fruit."

let fruit = "banana";

switch (fruit) {
  case 1:
    fruit = "Banana";
    console.log("Banana is good!");
    break;

  case 2:
    fruit = "Orange";
    console.log("I am not a fun of oranges");
    break;

  case 3:
    fruit = "Apple";
    console.log("How do you like them apples");
    break;
  default:
    console.log("I have never heard of that fruit");
}
