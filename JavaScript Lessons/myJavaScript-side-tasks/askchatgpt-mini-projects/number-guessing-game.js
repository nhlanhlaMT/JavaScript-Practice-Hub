// Task 2. Number Guessing Game (One Attempt)

// Set a random number (e.g., let secret = 7;).

// Store a guessed number in a variable.

// Use if-statements to print:

// "Correct!" if guessed right.

// "Too high!" if guess > secret.

// "Too low!" if guess < secret.

let secret = 4;

let guess = Math.floor(Math.random() * 10) + 1;

if (guess === secret) {
  console.log("Correct!");
} else if (guess > secret) {
  console.log("Too high!");
} else if (guess < secret) {
  console.log("Too low!");
}

console.log(`Secret No: ${secret}, Your Guess: ${guess}`);