// Task 1
var dairy = ['cheese', 'milk', 'yogurt', 'ice cream', 'milkshake', 'sour cream'];
function logDairy(dairy){
    for (prop of Object.keys(dairy)) {
        console.log(dairy[prop]);
    }
}
logDairy(dairy);
// Task 2

const animal = {
canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (prop of Object.keys(bird)) {        
        console.log(prop + ":" + bird[prop]);
    }
}
console.log("Bird: ");
birdCan(bird);

// Task 3
function animalCan() {
    for (prop in bird) {
        console.log(prop + ":" + bird[prop]);
    }
}
console.log("Animal: ");
animalCan(animal);