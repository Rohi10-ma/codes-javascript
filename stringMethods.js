var string =  'Rohail';
var string2 = 'Iqbal';

//Strings have thier own properties and methods. Some of them are discussed down below.

//the length property, which is used like this:

string.length; // 6

//To read each individual character at a specific index in a string, starting from zero, I can use the charAt() method: 

string.charAt(0); // 'R'

//The concat() method joins two strings

string.concat( string2); // 'RohailIqbal'
"Wo".concat("rl").concat("d"); // 'World'

//The indexOf returns the location of the first position that matches a character: 

"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
"ho-ho-ho".indexOf('-'); // 2

//The lastIndexOf finds the last match, otherwise it works the same as indexOf.

"ho-ho-ho".lastIndexOf('h'); // 6
"ho-ho-ho".lastIndexOf('o'); // 7
"ho-ho-ho".lastIndexOf('-'); // 5

//The split method chops up the string into an array of sub-strings:

"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']

string.toUpperCase(); // "ROHAIL"
string2.toLowerCase(); // "rohail"

//Here's a list of all the methods covered in this cheat sheet:

charAt() 

concat() 

indexOf() 

lastIndexOf() 

split() 

toUpperCase() 

toLowerCase()  