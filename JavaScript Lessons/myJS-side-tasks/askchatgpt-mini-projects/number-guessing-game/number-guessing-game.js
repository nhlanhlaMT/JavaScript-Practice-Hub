// Task 2. Number Guessing Game (One Attempt)

// Set a random number (e.g., let secret = 7;).

// Store a guessed number in a variable.

// Use if-statements to print:

// "Correct!" if guessed right.

// "Too high!" if guess > secret.

// "Too low!" if guess < secret.

  let secret = Math.floor(Math.random() * 10) + 1;

  let guess = 7;

  if (guess === secret) {
    console.log("Correct!");
  } else if (guess > secret) {
    console.log("Too High!");
  } else {
    console.log("Too Low");
  }

  console.log(secret);