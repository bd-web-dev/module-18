/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burgerPrice = 600;
let coke;
let totalPayable;
console.log("Run 1");
if (burgerPrice > 500) {
  coke = 0;
  totalPayable = burgerPrice + coke;
  console.log("Free coke.");
  console.log("Total Payable: " + totalPayable);
} else {
  coke = 30;
  totalPayable = burgerPrice + coke;
  console.log("You have to pay 30tk for Coke.");
  console.log("Total Payable: " + totalPayable);
}

burgerPrice = 400;
coke = 0;
console.log("Run 2");
if (burgerPrice > 500) {
  coke = 0;
  totalPayable = burgerPrice + coke;
  console.log("Free coke.");
  console.log("Total Payable: " + totalPayable);
} else {
  coke = 30;
  totalPayable = burgerPrice + coke;
  console.log("You have to pay 30tk for Coke.");
  console.log("Total Payable: " + totalPayable);
}
