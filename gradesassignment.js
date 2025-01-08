// gradeAssignment.js

// Prompt the user to input their score
let score = parseFloat(prompt("Enter your score:"));

// Determine the grade using else if statements
if (score >= 90) 
    {
  console.log("Grade: Excellent");
} else if (score >= 80 && score <= 89) 
    {
  console.log("Grade: Good");
} else if (score >= 70 && score <= 79) 
    {
  console.log("Grade: Fair");
} else if (score < 70) 
    {
  console.log("Grade: Needs Improvement");
} else 
{
  console.log("Invalid input. Please enter a valid score.");
}
