//A function is reffered to as a method when it is a property of an Object.
//example of adding properties and methods to an object
var car = {};
//properties
car.mileage = 98765;
car.color = "red";
console.log(car);
//method properties
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}

car.turnTheKey();
car.lightsOn()

/*Output:

{ mileage: 98765, color: 'red' }
The engine is running
The lights are on.

*/