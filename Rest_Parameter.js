/*Rest Parameter:
The rest parameter is also denoted by three consecutive dots "..." but is used in function declarations 
to collect multiple arguments into a single array. This enables functions to accept a variable number of arguments 
without the need for explicitly specifying them in the function's parameter list.

Usage in Function Parameters:
*/
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

sum(1, 2, 3, 4); // Result: 10
sum(5, 10, 15, 20, 25); // Result: 75

/*
In the above example, the rest parameter ...numbers allows the sum function 
to accept any number of arguments and store them in an array called numbers. 
The function then iterates through the array and calculates the sum of all the values.

In summary, the spread operator is used to split arrays or objects into individual elements, 
while the rest parameter is used to collect multiple function arguments into an array. 
Both of these features significantly improve the flexibility and readability of JavaScript code.

*/