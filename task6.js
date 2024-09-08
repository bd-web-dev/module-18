/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 5;
let isStudent = false;
let ticketPrice = 800;
let discount;
let finalPayable;

console.log("Run 1");
if (age < 10) {
  finalPayable = 0;
  console.log("Final Payable: " + finalPayable);
} else if (isStudent) {
  discount = ticketPrice * (50 / 100);
  finalPayable = ticketPrice - discount;
  console.log("Final Payable: " + finalPayable);
} else if (age >= 60) {
  discount = ticketPrice * (15 / 100);
  finalPayable = ticketPrice - discount;
  console.log("Final Payable: " + finalPayable);
} else {
  finalPayable = ticketPrice;
  console.log("Final Payable: " + finalPayable);
}

isStudent = true;
age = 15;
console.log("Run 2");
if (age < 10) {
  finalPayable = 0;
  console.log("Final Payable: " + finalPayable);
} else if (isStudent) {
  discount = ticketPrice * (50 / 100);
  finalPayable = ticketPrice - discount;
  console.log("Final Payable: " + finalPayable);
} else if (age >= 60) {
  discount = ticketPrice * (15 / 100);
  finalPayable = ticketPrice - discount;
  console.log("Final Payable: " + finalPayable);
} else {
  finalPayable = ticketPrice;
  console.log("Final Payable: " + finalPayable);
}

isStudent = false;
age = 65;
console.log("Run 3");
if (age < 10) {
  finalPayable = 0;
  console.log("Final Payable: " + finalPayable);
} else if (isStudent) {
  discount = ticketPrice * (50 / 100);
  finalPayable = ticketPrice - discount;
  console.log("Final Payable: " + finalPayable);
} else if (age >= 60) {
  discount = ticketPrice * (15 / 100);
  finalPayable = ticketPrice - discount;
  console.log("Final Payable: " + finalPayable);
} else {
  finalPayable = ticketPrice;
  console.log("Final Payable: " + finalPayable);
}

age = 45;
console.log("Run 4");
if (age < 10) {
  finalPayable = 0;
  console.log("Final Payable: " + finalPayable);
} else if (isStudent) {
  discount = ticketPrice * (50 / 100);
  finalPayable = ticketPrice - discount;
  console.log("Final Payable: " + finalPayable);
} else if (age >= 60) {
  discount = ticketPrice * (15 / 100);
  finalPayable = ticketPrice - discount;
  console.log("Final Payable: " + finalPayable);
} else {
  finalPayable = ticketPrice;
  console.log("Final Payable: " + finalPayable);
}
