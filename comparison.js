// Greater than and less than
console.log("5 > 10: " + (5 > 10)); // false
console.log("5 < 10: " + (5 < 10)); // true

// Equal to
console.log("10 == 10: " + (10 == 10)); // true
console.log("5 == 10: " + (5 == 10)); // false

// Greater than or equal to
console.log("15 >= 10: " + (15 >= 10)); // true
console.log("10 >= 10: " + (10 >= 10)); // true
console.log("5 >= 10: " + (5 >= 10)); // false

// Less than or equal to
console.log("5 <= 10: " + (5 <= 10)); // true
console.log("10 <= 10: " + (10 <= 10)); // true
console.log("15 <= 10: " + (15 <= 10)); // false

// Not equal to
console.log("10 != 10.1: " + (10 != 10.1)); // true
console.log("10 != 10: " + (10 != 10)); // Are they not equal? false, they are equal
console.log("10 != '10': " + (10 != "10")); // Are they not equal? false, they are equal due to type coercion
console.log("10 !== '10': " + (10 !== "10")); // Are they not equal? true, they are not equal due to no type coercion. They are different types

// Comparison using variables
var peyaraPrice = 40;
var applePrice = 250;

// Same comparison done in 2 different ways
console.log(peyaraPrice > applePrice); // false
console.log(applePrice < peyaraPrice); // false

// == vs ===
console.log("10 == 10: " + (10 == 10)); // true
console.log("10 == '10': " + (10 == "10")); // true due to type coercion
console.log("10 === '10': " + (10 === "10")); // false due to no type coercion
console.log("10 === 'tomato': " + (10 === "tomato")); // false
