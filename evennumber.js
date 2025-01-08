// evenNumbers.js

// Program to print numbers from 1 to 10 using a for loop
console.log("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Program to print only even numbers between 1 and 10
console.log("Even numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) 
  if (i % 2 === 0) {
    console.log(i);
  }
