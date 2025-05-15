// Task 2. Number Guessing Game (One Attempt)

// Set a random number (e.g., let secret = 7;).

// Store a guessed number in a variable.

// Use if-statements to print:

// "Correct!" if guessed right.

// "Too high!" if guess > secret.

// "Too low!" if guess < secret.

// let secretNumber = Math.floor(Math.random() * 10) + 1;

// let guess = 3;

// if (guess === secretNumber) {
//   console.log(`Secret No: ${secretNumber}, Your guess: ${guess} = Correct!`);
// } else if (guess > secretNumber) {
//   console.log(`Secret No: ${secretNumber}, Your guess: ${guess} = Too high!`);
// } else if (guess < secretNumber) {
//   console.log(`Secret No: ${secretNumber}, Your guess: ${guess} = Too low!`);
// }

let secretNumber = Math.floor(Math.random() * 10) + 1;

let guess = 6;

console.log(guess === secretNumber ? `Secret No: ${secretNumber}, Your guess: ${guess} = Correct!` :
            guess > secretNumber ? `Secret No: ${secretNumber}, Your guess: ${guess} = Too high!` :
            `Secret No: ${secretNumber}, Your guess: ${guess} = Too low!`
);
