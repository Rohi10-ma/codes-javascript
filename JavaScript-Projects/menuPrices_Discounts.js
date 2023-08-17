// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for (let i = 0; i < dishData.length; i++) {
        let finalPrice;
        if (taxBoolean === true) {
            finalPrice = dishData[i].price * tax;
        } else if (taxBoolean === false) {
            finalPrice = dishData[i].price;
        } else {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }

        console.log("Dish: " + dishData[i].name);
        console.log("Price: $" + finalPrice.toFixed(2));
    }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    if (typeof guests === 'number' && guests >= 0 && guests <= 30) {
        getPrices(taxBoolean);

        let discount = 0;
        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }

        console.log("Discount is: $" + discount);
    } else {
        console.log("The Second Argument must be a number between 0 and 30");
        return; // Add a return statement to stop further execution when guests are not in the expected range
    }
}

// Call getDiscount() with taxBoolean parameter
getDiscount(true, 2);
getDiscount(false, 10);

// Test with unexpected values
getDiscount(true, "string");
getDiscount(true, -5);
getDiscount(true, 35);
getDiscount("true", 5);
getDiscount();
