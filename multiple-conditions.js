let salary = 25000;

if (salary > 20000) {
  console.log("Run 1");
  console.log("Su-patro.");
} else {
  console.log("Run 1");
  console.log("Onno patro khuji.");
}

let height = 61;
if (salary > 20000 && height > 66) {
  console.log("Run 2");
  console.log("Su-patro.");
} else {
  console.log("Run 2");
  console.log("Onno patro khuji.");
}

height = 68;

if (salary > 20000 && height > 66) {
  console.log("Run 3");
  console.log("Su-patro.");
} else {
  console.log("Run 3");
  console.log("Onno patro khuji.");
}

if (salary > 25000 || height > 72) {
  console.log("Run 4");
  console.log("Su-patro.");
} else {
  console.log("Run 4");
  console.log("Onno patro khuji.");
}

salary = 25001;
if (salary > 25000 || height > 72) {
  console.log("Run 5");
  console.log("Su-patro.");
} else {
  console.log("Run 5");
  console.log("Onno patro khuji.");
}

salary = 21001;
if (salary > 25000 || height > 72) {
  console.log("Run 6");
  console.log("Su-patro.");
} else {
  console.log("Run 6");
  console.log("Onno patro khuji.");
}

height = 78;
if (salary > 25000 || height > 72) {
  console.log("Run 7");
  console.log("Su-patro.");
} else {
  console.log("Run 7");
  console.log("Onno patro khuji.");
}

salary = 31001;
if (salary > 25000 || height > 72) {
  console.log("Run 8");
  console.log("Su-patro.");
} else {
  console.log("Run 8");
  console.log("Onno patro khuji.");
}

// More and more conditions
salary = 21001;
height = 68;
const isBCS = true;
if (salary > 25000 || height > 72 || isBCS == true) {
  console.log("Run 9");
  console.log("Su-patro.");
} else {
  console.log("Run 9");
  console.log("Onno patro khuji.");
}

if (salary > 25000 && height > 72 && isBCS == true) {
  console.log("Run 10");
  console.log("Su-patro.");
} else {
  console.log("Run 10");
  console.log("Onno patro khuji.");
}

// Complex Conditionals
const hasCar = false;
if ((salary > 25000 && hasCar == true) || isBCS == true) {
  console.log("Run 11");
  console.log("Su-patro.");
} else {
  console.log("Run 11");
  console.log("Onno patro khuji.");
}

if ((salary > 25000 || hasCar == true) && isBCS == true) {
  console.log("Run 12");
  console.log("Su-patro.");
} else {
  console.log("Run 12");
  console.log("Onno patro khuji.");
}
