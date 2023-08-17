/*In JavaScript, both Map and Set are built-in data structures that allow developers 
to work with collections of data in a more organized and efficient manner.


In JavaScript, both Map and Set are built-in data structures that allow developers 
to work with collections of data in a more organized and efficient manner.

Map:
A Map is an object that holds key-value pairs and remembers the original insertion order of the keys. 
In other words, it allows you to associate a value with a specific key and then quickly access that value using the key. 
Some key features of Map are:

Key-Value Pairs: 
Each entry in a Map is a key-value pair. The key can be any data type (including objects and primitive types), 
and the value can also be any data type.

Order: 
Map maintains the insertion order of its elements, which means the keys are iterated in the same order as they were added.

No Duplicates: 
Unlike objects, a Map allows duplicate keys; each key can only occur once in the collection.

***Creating a Map:***
To create a new Map, you can use the Map constructor or the Map literal syntax:*/


// Using the constructor

//const myMap = new Map();

// Using the literal syntax with initial key-value pairs

/*const myMap = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
]);
*/

/*Common Methods:

set(key, value): Adds a new key-value pair to the Map.

get(key): Returns the value associated with the given key. If the key doesn't exist, it returns undefined.

has(key): Checks if a specific key exists in the Map.

delete(key): Removes the key-value pair associated with the given key.

clear(): Removes all key-value pairs from the Map.

size: Returns the number of key-value pairs in the Map.

***Example:*/

const myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);

console.log(myMap.get('name')); // Output: "John"
console.log(myMap.has('age'));  // Output: true
console.log(myMap.size);       // Output: 2


/*Set:
A Set is a collection of unique values, where each value can occur only once in the collection. 
It is useful for storing a list of items without any duplicates. 
Some key features of Set are:

Unique Values: 
Each value can occur only once in a Set, ensuring there are no duplicates.

No Indexing: 
Unlike arrays, Set does not use numerical indexing to access elements, as it has no concept of order.

Iterability: 
You can iterate over the elements in a Set using methods like forEach or using the for...of loop.

**Creating a Set**
To create a new Set, you can use the Set constructor or the Set literal syntax:*/

// Using the constructor

//const mySet = new Set();

// Using the literal syntax with initial values

//const mySet = new Set([1, 2, 3]);


/*Common Methods:

add(value): Adds a new value to the Set.

has(value): Checks if a specific value exists in the Set.

delete(value): Removes the value from the Set.

clear(): Removes all values from the Set.

size: Returns the number of elements in the Set.
*/

const mySet = new Set();
mySet.add('apple');
mySet.add('banana');
mySet.add('apple'); // Ignored as 'apple' already exists in the Set

console.log(mySet.has('banana')); // Output: true
console.log(mySet.size);          // Output: 2

/*Both Map and Set provide useful tools for managing collections of data in JavaScript. 
Depending on your specific use case, you can choose the appropriate data structure to make your code more efficient and maintainable.*/
