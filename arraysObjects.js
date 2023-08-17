/*In JavaScript, arrays are objects. That means that arrays also have some built-in properties and methods.

One of the most commonly used built-in methods on arrays are the *push()* and the *pop()* methods.

To add new items to an array, I can use the push() method:*/

var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']

//To remove the last item from an array, I can use the pop() method: 
fruits.pop();
console.log(fruits); // ['apple']

//Funtion that takes all it's arguments and pushes them into an array
//Using return instead of console.log()
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

//Calling function
arrayBuilder('apple', 'pear', 'plum'); // ['apple', 'pear', 'plum']

//Saving Function to a variable
var simpleArr = arrayBuilder('apple', 'mango', 'banana');
console.log(simpleArr);