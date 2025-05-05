// Task 5. Speed Limit Warning System

// Store a speed value.

// If it's over 120 km/h, print "Too fast! Slow down!".

// If it's between 80 and 120, print "You're driving safely.".

// If it's below 80, print "Speed up a little!".

let speed = 82;

if (speed > 120) {
  console.log(`Your speed is ${speed} km/h: Too fast! Slow down!`);
} else if (speed > 80) {
  console.log(`Your speed is ${speed} km/h: You're driving safely.`);
} else {
  console.log("Speed up a little!");
}