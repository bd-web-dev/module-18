/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

let weight = 64; // in kg
let height = 2; // in m

console.log("Run 1");
let BMI = weight / height ** 2;
if (BMI < 18.5) {
  console.log("Underweight.");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("Normal.");
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log("Overweight.");
} else {
  console.log("Obese.");
}

weight = 80;
console.log("Run 2");
BMI = weight / height ** 2;
if (BMI < 18.5) {
  console.log("Underweight.");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("Normal.");
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log("Overweight.");
} else {
  console.log("Obese.");
}

weight = 108;
console.log("Run 3");
BMI = weight / height ** 2;
if (BMI < 18.5) {
  console.log("Underweight.");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("Normal.");
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log("Overweight.");
} else {
  console.log("Obese.");
}

weight = 128;
console.log("Run 4");
BMI = weight / height ** 2;
if (BMI < 18.5) {
  console.log("Underweight.");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("Normal.");
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log("Overweight.");
} else {
  console.log("Obese.");
}
