var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    
    totalPrice: function(shoes, stateTax){
        var calculation = this.shoes * this.stateTax;
        console.log("The Price: ", calculation);
    }
}
purchase1.totalPrice();

var purchase2 = {
    shoes: 60,
    stateTax: 1.2,

    totalPrice: function(shoes, stateTax){
        var calculation = this.shoes * this.stateTax;
        console.log("The Price: ", calculation);
    }
}
purchase2.totalPrice();