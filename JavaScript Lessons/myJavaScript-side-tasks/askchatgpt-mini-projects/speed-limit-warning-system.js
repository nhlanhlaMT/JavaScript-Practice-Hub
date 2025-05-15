// Task 5. Speed Limit Warning System

// Store a speed value.

// If it's over 120 km/h, print "Too fast! Slow down!".

// If it's between 80 and 120, print "You're driving safely.".

// If it's below 80, print "Speed up a little!".

// let speed = 81;

// if (speed > 120) {
//   console.log("Too fast! Slow down!");
// } else if (speed > 80) {
//   console.log("You're driving safely.");
// } else {
//   console.log("Speed up a little!");
// }

let speed = 121;

console.log(speed > 120 ? "Too fast! Slow down!" :
            speed > 80 ? "You are driving safely." :
            "Speed up a little!"
);

