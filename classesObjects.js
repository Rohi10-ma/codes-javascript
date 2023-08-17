/* The original base or super class for everything is the Object class,
all objects derive from this class.

This allows us to utilize the Object.create() method.
to create or instansiate objects of our classes.*/

class Animal { /* ...class code here... */ }

var myDog = Object.create(Animal)

console.log (Animal); //[class Animal]

/*A more common method of creating obbjects from classes is to use the new  keyword.
When using a default or empty constructor method,
JavaScript implicitly calls the Object superclass to create the instance.*/

class Animal { /* ...class code here... */ }

var myDog = new Animal() //[class Animal]

