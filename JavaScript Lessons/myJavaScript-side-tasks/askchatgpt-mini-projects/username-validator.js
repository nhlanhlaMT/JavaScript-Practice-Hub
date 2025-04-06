// Task 3. Username Validator

// Store a username as a string.

// Check if it starts with a capital letter and has at least 5 characters.

// Print "Valid username" or "Invalid username". 

let username = "Nhle";

if (username[0] === username[0].toUpperCase() && username.length > 5) {
  console.log("Valid username");
} else {
  console.log("Invalid username");
}