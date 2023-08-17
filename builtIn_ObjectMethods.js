//Built-in methods

/*The Object.keys() method:

The Object.keys() method receives an object as its parameter. Remember, 
this object is the object you want to loop over. 
It's still too early to explain how you'll loop over the object itself; for now, 
focus on the returned array of properties when you call the Object.keys() method.

Here's an example of running the Object.keys() method on a brand new car2 object: */

const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']

/*So, when I run Object.keys() and pass it my car2 object, the returned value is an array of strings, 
where each string is a property key of the properties contained in my car2 object.*/

/*The Object.values() method:

Another useful method is Object.values():*/

const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

//The Object.values() method will return the values of the properties of the car3 Object

T/*he Object.entries() method:

Finally, there's another useful method, Object.entries(), which returns an array listing both the keys and the values. */ 

const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4)); //[ ['speed', 400], ['color', 'magenta'] ]

/*This time, the values that get returned are 2-member arrays nested inside an array. 
In other words, you get an array of arrays, where each array item has two members, 
the first being a property's key, and the second being a property's value.*/

/*Effectively, it's as if you was listing all of a given object's properties, a bit like this:

[
    [propertyKey, propertyVal],
    [propertyKey, propertyVal],
    ...etc
]
*/

/*To summarise, you learned that you can loop over arrays using the for of loop.  
You also learned that you can extract object's keys, values, or both, 
using the Object.keys(), Object.values() and Object.entries() syntax.*/


//***EXAMPLE***//:

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(keys, ":", clothingItem[key])
}