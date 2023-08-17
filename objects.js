/* Creating Objects */

//creating an object with properties and their values
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

//a table object
var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}

console.log(table);//display the object 
console.log(table.color); // 'brown'

//a house object
var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}

//Another way of creating objects:
/*An alternative approach of building objects is to first save an empty object 
literal to a variable, then use the dot notation to declare new properties on the fly, 
and use the assignment operator to add values to those properties; for example: */

var houses = {};
houses.rooms = 4;
houses.color = "pink";
houses.priceUSD = 12345;

//we can also update a previously created objects using this new approach

//ADDING NEW PROPERTIES
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000}
house.windows = 10;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 10}

//CHANGING CURRENT PROPERTIES
house.windows = 11;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 11}

/*In JavaScript, objects are a fundamental data structure used to store and manipulate data. 
They are a collection of key-value pairs, where each key is a string (or symbol) that acts as an identifier for 
the corresponding value. Objects can be created using object literals, constructor functions, or classes.
Here's an overview of working with objects in JavaScript:

Object Literals:
The simplest way to create an object is by using object literals, 
which involves enclosing key-value pairs within curly braces {}.
*/

const person = {
  name: 'John',
  age: 30,
  gender: 'male'
};

console.log(person.name); // Output: John
/*Accessing Object Properties:
Object properties can be accessed using dot notation or bracket notation.
*/

//dot notation
console.log(person.age); // Output: 30

//bracket notation
console.log(person['gender']); // Output: male
person['gender']= 'NA'; //Gender is now 'NA' instead of 'male'

/*Adding and Removing Properties:
You can add new properties to an object or remove existing ones using assignment or the delete keyword.
*/
person.city = 'New York'; // Adding a new property
console.log(person.city); // Output: New York
delete person.gender; // Removing a property
console.log(person.gender); // Output: undefined



//Bracket Notation
var houses; //declaration 
houses = {}; // Initialization
houses["rooms"] = 4;
houses['color']= "pink";
houses["priceUSD"] = 12345;
console.log(houses); // {rooms: 4, color: 'pink', priceUSD: 12345}

//With the brackets notation, I can add space characters inside property names, like this:
var car;
car= {};
car["number of doors"] = 4;
console.log(car); // {number of doors: 4}

//Additionally, I can add numbers (as the string data type) as property keys:
car["2023"]= 1990;
console.log(car["2023"]); //1990

/*However, doing this is discouraged, due to obvious reasons of having a
property key as a number string not really conveying a lot of useful information.*/

/*Finally, there's one really useful thing that bracket notation has but is not 
available in the dot notation: It can evaluate expressions.*/

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}
/*OUTPUT: 
100
200
red
*/



