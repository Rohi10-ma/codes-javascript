function formatCurrency(strings, ...values) {
  // Get the numerical value from the expression
  const amount = values[0];

  // Format the currency with the symbol and two decimal places
  const formattedAmount = `${'$' + amount.toFixed(2)}`;

  // Combine the formatted amount with the static strings in the template
  let result = '';
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < values.length) {
      result += formattedAmount;
    }
  }
  return result;
}

const price = 42.99;
const taxRate = 0.08;
const totalPrice = price * (1 + taxRate);

// Using the tagged template function to format currency
const formattedPrice = formatCurrency`The total price is: ${totalPrice}`;

console.log(formattedPrice);

/*In this example, we have the formatCurrency tagged template function. When we use this function to tag the template literal, 
it processes the template and the interpolated values.

Let's break down what happens when formatCurrency is called with the template literal:

strings: This is an array containing the static parts of the template. In our case, it's ["The total price is: ", ""].

values: This is an array containing the values inside the placeholders. In our case, it's [totalPrice].

The formatCurrency function extracts the totalPrice from the values array and formats it with the currency 
symbol and two decimal places using toFixed(2). The result is "$43.79".

The function then combines the formatted value with the static strings and returns the final formatted currency string: "The total price is: $43.79".

So, the output of console.log(formattedPrice) would be:


The total price is: $43.79

This is a simple example, but tagged templates can be used for more complex scenarios like creating DSLs or performing advanced string processing based on the template's content and expressions.
*/


