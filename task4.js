/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let myScore = 85;
let friendScore = 85;
console.log("Run 1");
if (myScore >= 80) {
  if (friendScore >= 80) {
    console.log("Go for lunch.");
  } else if (friendScore >= 60 && friendScore < 80) {
    console.log("Good luck next time.");
  } else if (friendScore >= 40 && friendScore < 60) {
    console.log("Keep your friend's message unseen.");
  } else {
    // Less than 40
    console.log("Block your friend.");
  }
} else {
  // myScore less thna 80
  console.log("Go to home and sleep.");
}

friendScore = 70;
console.log("Run 2");
if (myScore >= 80) {
  if (friendScore >= 80) {
    console.log("Go for lunch.");
  } else if (friendScore >= 60 && friendScore < 80) {
    console.log("Good luck next time.");
  } else if (friendScore >= 40 && friendScore < 60) {
    console.log("Keep your friend's message unseen.");
  } else {
    // Less than 40
    console.log("Block your friend.");
  }
} else {
  // myScore less thna 80
  console.log("Go to home and sleep.");
}

friendScore = 50;
console.log("Run 3");
if (myScore >= 80) {
  if (friendScore >= 80) {
    console.log("Go for lunch.");
  } else if (friendScore >= 60 && friendScore < 80) {
    console.log("Good luck next time.");
  } else if (friendScore >= 40 && friendScore < 60) {
    console.log("Keep your friend's message unseen.");
  } else {
    // Less than 40
    console.log("Block your friend.");
  }
} else {
  // myScore less thna 80
  console.log("Go to home and sleep.");
}

friendScore = 35;
console.log("Run 4");
if (myScore >= 80) {
  if (friendScore >= 80) {
    console.log("Go for lunch.");
  } else if (friendScore >= 60 && friendScore < 80) {
    console.log("Good luck next time.");
  } else if (friendScore >= 40 && friendScore < 60) {
    console.log("Keep your friend's message unseen.");
  } else {
    // Less than 40
    console.log("Block your friend.");
  }
} else {
  // myScore less thna 80
  console.log("Go to home and sleep.");
}

myScore = 75;
console.log("Run 5");
if (myScore >= 80) {
  if (friendScore >= 80) {
    console.log("Go for lunch.");
  } else if (friendScore >= 60 && friendScore < 80) {
    console.log("Good luck next time.");
  } else if (friendScore >= 40 && friendScore < 60) {
    console.log("Keep your friend's message unseen.");
  } else {
    // Less than 40
    console.log("Block your friend.");
  }
} else {
  // myScore less thna 80
  console.log("Go to home and sleep.");
}
