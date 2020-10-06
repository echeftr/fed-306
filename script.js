//  Deel A
/*
makeDutchSandwich
    Get one slice of bread.
    Add Cheese.
    Put a slice of bread on top.
*/
/*
const makeDutchSandwich = function() { 
    console.log("Get one slice of bread");
    console.log("Add Cheese");
    console.log("Put a slice of bread on top");
};
makeDutchSandwich();
*/

// Deel B

const makeSandwich = function (topping) {
  console.log("Get one slice of bread");
  console.log("Add " + topping);
  console.log("Put a slice of bread on top");
  console.log("There you go, a sandwich with " + topping);
};
makeSandwich("ei");
makeSandwich("hamburger");

// Deel C
const calculateDiscountedPrice = function (totalAmount, discount) {
  console.log(Math.round(totalAmount - discount));
};
calculateDiscountedPrice(25, 5);

//Deel D

const price = function (totalAmount, discount) {
  if (totalAmount > 25) {
    console.log(Math.round(totalAmount - discount));
  } else {
    console.log(totalAmount);
  }
};
price(30, 5);
