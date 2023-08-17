var clothes = []; //Creating an empty array

//Using push() to give 5 values to clothes[]
clothes.push('Flannels', 'Jeans', 'Jackets', 'Sneakers', 'Shirts'); 
clothes.pop(); //Removes the last item from clothes[] i.e 'Shirts'
clothes.push('Socks'); //Adds 'Socks' at the fifth position of the array clothes[]

console.log(clothes[2]); //Outputs the Third item in clothes[] i.e 'Jackets'

// Creating an empty Object
var favCar = {};

//Adding Properties using dot notation
favCar.color = 'white';
favCar.convertible = true;

//Outputs the entire Object
console.log(favCar); //{color = 'white', 'convertible'= true}