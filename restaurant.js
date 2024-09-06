let age = 17;
const price = 500;
console.log("Run 1");
if (age <= 12) {
  console.log("You can eat for free.");
} else if (age >= 60) {
  // 50% discount
  const discount = price * (50 / 100);
  const payableAmount = price - discount;
  console.log("Final Price: " + payableAmount);
} else {
  console.log("Final Price: " + price);
}

age = 12;
console.log("Run 2");
if (age <= 12) {
  console.log("You can eat for free.");
} else if (age >= 60) {
  // 50% discount
  const discount = price * (50 / 100);
  const payableAmount = price - discount;
  console.log("Final Price: " + payableAmount);
} else {
  console.log("Final Price: " + price);
}

age = 62;
console.log("Run 3");
if (age <= 12) {
  console.log("You can eat for free.");
} else if (age >= 60) {
  // 50% discount
  const discount = price * (50 / 100);
  const payableAmount = price - discount;
  console.log("Final Price: " + payableAmount);
} else {
  console.log("Final Price: " + price);
}

age = 55;
console.log("Run 4");
if (age <= 12) {
  console.log("You can eat for free.");
} else if (age >= 60) {
  // 50% discount
  const discount = price * (50 / 100);
  const payableAmount = price - discount;
  console.log("Final Price: " + payableAmount);
} else if (age >= 50) {
  // 25% discount
  const discount = price * (25 / 100);
  const payableAmount = price - discount;
  console.log("Final Price: " + payableAmount);
} else {
  console.log("Final Price: " + price);
}

age = 45;
console.log("Run 5");
if (age <= 12) {
  console.log("You can eat for free.");
} else if (age >= 60) {
  // 50% discount
  const discount = price * (50 / 100);
  const payableAmount = price - discount;
  console.log("Final Price: " + payableAmount);
} else if (age >= 50) {
  // 25% discount
  const discount = price * (25 / 100);
  const payableAmount = price - discount;
  console.log("Final Price: " + payableAmount);
} else if (age >= 40) {
  // 10% discount
  const discount = price * (10 / 100);
  const payableAmount = price - discount;
  console.log("Final Price: " + payableAmount);
} else {
  console.log("Final Price: " + price);
}
