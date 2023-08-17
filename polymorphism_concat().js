/*Here's another example of Polymorphism,the concatenation operator, used by calling the built-in concat() method.

If I use the concat() method on two strings, it behaves exactly the same as if I used the + operator.*/


"abc".concat("def"); // 'abcdef'


//I can also use the concat() method on two arrays. Here's the result: 


["abc"].concat(["def"]); // ['abc', 'def']


//Consider using the + operator on two arrays with one member each:  


["abc"] + ["def"]; // ["abcdef"]


/*This means that the concat() method is exhibiting polymorphic behavior since it behaves 
differently based on the context - in this case, based on what data types I give it.*/