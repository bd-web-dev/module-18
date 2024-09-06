// Multi Level Conditionals
let purchaseTotal = 5000;
console.log("Run 1");

if (purchaseTotal >= 5000) {
  // 10% discount
  const discount = purchaseTotal * (10 / 100);
  console.log("Discount: " + discount);
  const payableAmount = purchaseTotal - discount;
  console.log("Final Price: " + payableAmount);
} else {
  console.log("Final Price: " + purchaseTotal);
}

// Smaller total purchase
purchaseTotal = 4000;
console.log("Run 2");

if (purchaseTotal >= 5000) {
  // 10% discount
  const discount = purchaseTotal * (10 / 100);
  console.log("Discount: " + discount);
  const payableAmount = purchaseTotal - discount;
  console.log("Final Price: " + payableAmount);
} else {
  console.log("Final Price: " + purchaseTotal);
}

// Bigger total purchase
purchaseTotal = 10000;
console.log("Run 3");

if (purchaseTotal >= 5000) {
  // 10% discount
  const discount = purchaseTotal * (10 / 100);
  console.log("Discount: " + discount);
  const payableAmount = purchaseTotal - discount;
  console.log("Final Price: " + payableAmount);
} else {
  console.log("Final Price: " + purchaseTotal);
}

// Purchase satisfying second if condition
purchaseTotal = 4000;
console.log("Run 4");

if (purchaseTotal >= 5000) {
  // 10% discount
  const discount = purchaseTotal * (10 / 100);
  console.log("Discount: " + discount);
  const payableAmount = purchaseTotal - discount;
  console.log("Final Price: " + payableAmount);
} else if (purchaseTotal > 2500) {
  // 5% discount
  const discount = purchaseTotal * (5 / 100);
  console.log("Discount: " + discount);
  const payableAmount = purchaseTotal - discount;
  console.log("Final Price: " + payableAmount);
} else {
  console.log("Final Price: " + purchaseTotal);
}

// Purchase satisfying else condition
purchaseTotal = 2000;
console.log("Run 5");

if (purchaseTotal >= 5000) {
  // 10% discount
  const discount = purchaseTotal * (10 / 100);
  console.log("Discount: " + discount);
  const payableAmount = purchaseTotal - discount;
  console.log("Final Price: " + payableAmount);
} else if (purchaseTotal > 2500) {
  // 5% discount
  const discount = purchaseTotal * (5 / 100);
  console.log("Discount: " + discount);
  const payableAmount = purchaseTotal - discount;
  console.log("Final Price: " + payableAmount);
} else {
  console.log("Final Price: " + purchaseTotal);
}
