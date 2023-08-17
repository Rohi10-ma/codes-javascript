/*In JavaScript, template literals are string literals that allow for easy interpolation of variables and expressions within a string. 
They are defined using backticks ( ) instead of single quotes (' ') or double quotes (" ").

Nesting template literals means using one template literal inside another. 
This can be useful when you need to create more complex strings that involve multiple levels of interpolation or formatting.

To nest template literals, you simply place one template literal inside the placeholder of another. 
Here's an example to illustrate this concept:
*/
const firstName = 'Rohail';
const lastName = 'Iqbal';
const age = 19;

// Simple template literal
const simpleTemplate = `My name is ${firstName} ${lastName} and I am ${age} years old.`;

console.log(simpleTemplate);
// Output: My name is Rohail Iqbal and I am 19 years old.

// Nesting template literals
const nestedTemplate = `My name is ${firstName} ${lastName} and I am ${age} years old. 
I live in ${`New York City`} and I work as a ${`software ${'engineer'}`}.`;

console.log(nestedTemplate);
/* Output:
My name is Rohail Iqbal and I am 19 years old.
I live in New York City and I work as a software engineer.
*/
