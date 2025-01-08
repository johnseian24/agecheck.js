// ageCheck.js

// Prompt the user to enter their age
let age = parseInt(prompt("Please enter your age:"));

// Check the user's age category using if-else statements
if (age < 13) {
  console.log("You are a child.");
} else if (age >= 13 && age <= 19) 
    {
  console.log("You are a teenager.");
} else if (age >= 20) 
    {
  console.log("You are an adult.");
} else {
    
  console.log("Invalid age entered. Please enter a valid number.");
}
