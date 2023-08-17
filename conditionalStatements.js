//if else statements
var age = 10;
if(age >= 65){
    console.log("You will get your Pension!");
}else if(age >18 && age < 65){
    console.log("You will get your Salary!");
}else if(age < 18){
    console.log("You will get your Allowance!");
}else{
    console.log("Incorrect Age!");
}

//Switch Statements
var day="Sunday";
switch(day){
    case "Monday":{
        console.log("Learn JavaScript")
        break;
    }
    case "Tuesday":{
        console.log("Practice JavaScript")
        break;
    }
    case "Wednesday":{
        console.log("Implement JavaScript")
        break;
    }
    case "Thursday":{
        console.log("Create a Website")
        break;
    }
    case "Friday":{
        console.log("Sell The Website")
        break;
    }
    case "Saturday":{
        console.log("Rest")
        break;
    }
    case "Sunday":{
        console.log("Rest")
        break;
    }
    default:{
        console.log("You Might be on MARS")
    }

}

//While Loop
var counter = 3;

while(counter >0){
  console.log(counter);
  counter= counter-1;
}
console.log("Happy Birthday!")
 
//For Loop


for(var i=1;i<=5;i++){
    console.log(i);
}
console.log("Count Complete!");

for(var i=5;i>=1;i--){
    console.log(i)
}
console.log("Count Complete!");

var count = 1;
while(count>=5){
    console.log(i)
    count++;
}
console.log("Count Complete!")