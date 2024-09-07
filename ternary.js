// Ternary Operator: Meaning it has 3 parts
// Condition ? Code to be executed if true : Code to be executed if false

let age = 20;
console.log("Run 1");
if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("Ghumai thako.");
}

age = 12;
console.log("Run 2");
age >= 18 ? console.log("You can vote.") : console.log("Ghumai thako.");

age = 112;
console.log("Run 3");
age >= 18 ? console.log("You can vote.") : console.log("Ghumai thako.");

let price = 500;
let isLeader = true;

console.log("Run 1");
if (isLeader === true) {
  price = 0;
} else {
  price += 100;
}
console.log("Price: " + price);

price = 500;
isLeader = false;
console.log("Run 2");
isLeader === true ? (price = 0) : (price += 100);
// price = isLeader == true ? 0 : price + 100;
console.log("Price: " + price);

// Optional: semi-advanced ternary
isLeader = true;
price = 1500;
console.log("Run 1");
if (isLeader == true) {
  if (price > 1000) {
    price = price / 2;
  } else {
    price = 0;
  }
} else {
  price += 1000;
}
console.log(price);

isLeader = false;
price = 1500;
console.log("Run 2");
price = isLeader == true ? (price > 1000 ? price / 2 : 0) : price + 1000;
console.log(price);
