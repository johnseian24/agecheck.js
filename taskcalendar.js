// dayTask.js

// Prompt the user to enter a day of the week
let day = prompt("Enter a day of the week (e.g., Monday, Tuesday):").trim().toLowerCase();

// Use a switch statement to assign tasks for each day
switch (day) {
  case "monday":
console.log("Task for Monday: Team meeting at 10 AM.");
    break;
  case "tuesday":
console.log("Task for Tuesday: Work on project deliverables.");
    break;
  case "wednesday":
console.log("Task for Wednesday: Attend training session.");
    break;
  case "thursday":
console.log("Task for Thursday: Review reports and prepare for the weekend.");
    break;
  case "friday":
console.log("Task for Friday: Submit weekly summary and wrap up tasks.");
    break;
  case "saturday":
console.log("Task for Saturday: Family outing or leisure activities.");
    break;
  case "sunday":
 console.log("Task for Sunday: Relax and prepare for the upcoming week.");
    break;
  default:
console.log("Invalid input. Please enter a valid day of the week (e.g., Monday).");
}
