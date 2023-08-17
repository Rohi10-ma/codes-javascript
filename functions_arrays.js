function listarray(arr){
    for(var i=0; i<arr.length;i++){
        console.log(i+1, listarray[i]);
    }
}

var colors = ["red", "green", "blue", "pink"];
listarray(colors);

//conditional statements

function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!")
        } else {
            console.log(i*100, arr[i])
        }
    }
}
listArrayItems(colors);