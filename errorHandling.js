function addTwoNums(a,b){
    try{
        if(typeof(a)!= 'number'){
            throw new ReferenceError("The First Argument is Not a Number");
        }
        else if(typeof(b)!= 'number'){
            throw new ReferenceError("The Second Argument is Not a Number");
        }
        else{
            console.log(a+b);
        }
    }
    catch(err){
        console.log('Error!',err);
    }
    
}
addTwoNums('5', 5);
console.log('It Still Works!')