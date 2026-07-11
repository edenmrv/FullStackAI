let usernameLength = 6;
let passwordLength = 7;
let userAge = 15;

if (usernameLength < 5) {
  console.log("Username must be at least 5 characters.");
} else if (passwordLength < 8) {
  console.log("Password must be at least 8 characters.");
} else if (userAge < 13) {
  console.log("User must be 13 or older.");
} else {
  console.log("Account created successfully!");
}