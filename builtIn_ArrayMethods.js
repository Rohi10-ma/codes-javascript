/*
The forEach() method
Arrays in JavaScript come with a handy method that allows you to loop over each of their members.
*/
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);
/*
***Output***
0. kiwi
1. mango
2. apple
3. pear

To explain the syntax, the forEach() method accepts a function that will work on each array item. 
That function's first parameter is the current array item itself, and the second (optional) parameter is the index.

Very often, the function that the forEach() method needs to use is passed in directly into the method call, like this:
*/

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${fruit}`);
});

/*The filter() method
Another very useful method on the array is the filter() method. It filters your arrays based on a specific test. 
Those array items that pass the test are returned.

Here's an example:*/

const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})
//[30,40,50]

/*Similar to the forEach() method, the filter() method also accepts a function 
and that function performs some work on each of the items in the array.*/

/*The map method
Finally, there's a very useful map method. 

This method is used to map each array item over to another array's item, 
based on whatever work is performed inside the function that is passed-in to the map as a parameter. 

For example:*/

[0,10,20,30,40,50].map( function(num) {
    return num / 10
})
//[0,1,2,3,4,5]