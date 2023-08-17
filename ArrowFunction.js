// Traditional function to add two numbers
function add(a, b) {
    return a + b;
}
  
// Arrow function to subtract two numbers
const subtract = (a, b) => a - b;
  
// Arrow function with implicit return to multiply two numbers
const multiply = (a, b) => a * b;
  
// Arrow function with no parameters to generate a random number between 1 and 100
const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
  
// Example usage
const num1 = 10;
const num2 = 5;
  
console.log(`Adding ${num1} and ${num2}:`, add(num1, num2)); // Output: Adding 10 and 5: 15
console.log(`Subtracting ${num1} from ${num2}:`, subtract(num1, num2)); // Output: Subtracting 5 from 10: 5
console.log(`Multiplying ${num1} and ${num2}:`, multiply(num1, num2)); // Output: Multiplying 10 and 5: 50
console.log("Random number:", generateRandomNumber()); // Output: Random number between 1 and 100
  