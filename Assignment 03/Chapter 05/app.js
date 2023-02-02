
// Write a program that take two numbers & add them in a new variable. Show the result in your browser.

document.write("<h1>Variables Sum</h1>");
var num1 = parseInt(prompt("Enter first number"));
var num2 = parseInt(prompt("Enter second number"));
var sum = num1 + num2;
alert("The sum is " + sum);
document.write("Sum of num1 and num2 is " + "<b>" + sum + "</b>")
document.write("<br/>");

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

document.write("<h1>Variables Subtraction, Multiplication, Division & Modulus</h1>");
var num1 = parseInt(prompt("Enter first number"));
var num2 = parseInt(prompt("Enter second number"));
var sub = num1 - num2;
var add = num1 + num2;
var mul = num1 * num2;
var div = num1 / num2;
var mod = num1 % num2;
alert("The subtraction is " + sub + " and the addition is " + add + " and the multiplication is " + mul + " and the division is " + div + " and the modulus is " + mod);
document.write("Subtraction of num1 and num2 is " + sub + "<br>" + " and the addition of num1 and num2 is " + add + "<br>" + " and the multiplication of num1 and num2 is " + add + "<br>" + " and the division of num1 and num2 is " + div + "<br>" + " and the modulus of num1 and num2 is " + mod )

document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");

// 3. Do the following using JS Mathematic Expressions 
// a. Declare a variable.

document.write("<h1>Mathematic Expressions</h1>");

var value;

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 

document.write("Value after variable declaration is: " + value);
document.write("<br/>");

// c. Initialize the variable with some number. 

value = 20;

// d. Show the value of variable in your browser like “Initial value: 5”. 

document.write("Initial value: " + value);
document.write("<br/>");

// e. Increment the variable.

value++;

// f. Show the value of variable in your browser like “Value after increment is: 6”. 

document.write("Value after increment is: " + value);
document.write("<br/>");

// g. Add 7 to the variable. 

value += 7;

// h. Show the value of variable in your browser like “Value after addition is: 13”. 

document.write("Value after adding 7 is: " + value);
document.write("<br/>");

// i. Decrement the variable. 

value--;

// j. Show the value of variable in your browser like “Value after decrement is: 12”. 

document.write("Value after decrement is: " + value);
document.write("<br/>");

// k. Show the remainder after dividing the variable’s value by 3.

value = value / 3;

// l. Output : “The remainder is : 0”.

document.write("The remainder is: " + value);
document.write("<br/>");


document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");


// 4. Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
// Example output:

document.write("<h1>Cost of one ticket is 600 PKR then calculating cost of  tickets</h1>");
var ticketPrice;

ticketPrice = 600;
ticket05 = 600 * 5;
document.write("The cost of one ticket is 600 and the cost of buying 5 tickets to a movie is: " + ticket05);
document.write("<br/>");

document.write("<br/>");
document.write("<br/>");
document.write("<br/>");

// 5. Write a script to display multiplication table of any number in your browser. E.g

document.write("<h1>Multiplication Table of 2</h1>");
document.write("<b>Table of 2</b>")
document.write("<br/>");

const num = 2;

for(let i = 1; i <= 10; i++)
{
    document.write(num + " x " + i + " = " + num * i + "<br/>");
}

document.write("<br/>");





// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:
// celsius = (fahrenheit - 32) x 5/9


document.write("<h1>Calculating Celsius and fahrenheit values using standard formula of mathematics</h1>");

var celsius = 20;
var fahrenheit = (celsius * 1.8) + 32;
document.write("The temperature in Celsius is " + celsius +" when fahrenheit is " + fahrenheit + "<br/>");
document.write("The temperature in Fahrenheit is " + fahrenheit + "When celsius is " + celsius + "<br/>");
document.write("<br/>");


document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website.
// Store the following in variables

// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.

document.write("<h1>Ecommerce Cart Checkout</h1>");


var price1 = 100;
document.write("Price of item 1: " + price1 + "<br>")
var price2 = 200;
document.write("Price of item 2: " + price2 + "<br>")
var quantity1 = 2;
document.write("Ordered quantity of item 1: " + quantity1 + "<br>")
var quantity2 = 3;
document.write("Ordered Quantity of item 2: " + quantity2 + "<br>")

document.write("<br/>");
var shippingCharges = 10;
document.write("Shipping charges of item 1: " + shippingCharges + "<br>");
document.write("<br/>");

var totalCost = price1 * quantity1 + price2 * quantity2 + shippingCharges;
document.write("The total cost of your order is " + totalCost + "<br/>");
document.write("<br/>");



// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result 
// in your browser

document.write("<h1>Mark Sheet</h1>");
var totalMarks = 100;
document.write("Total marks obtained by a student: " + totalMarks + "<br>");
document.write("<br/>");
var marksObtained = 90;
document.write("Marks obtained by a student: " + marksObtained + "<br>");
document.write("<br/>");
var percentage = (marksObtained / totalMarks) * 100;
document.write("Percentage of marks obtained by a student: " + percentage + "%<br>");
document.write("<br/>");

document.write("<br/>");
document.write("<br/>");
document.write("<br/>");


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
//  Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 270.24 Pakistani Rupee and
//  1 Saudi Riyal = 72.02 Pakistani Rupee)

document.write("<h1>Currency Conversion</h1>");

var usDollars = 10;
document.write("Dollars = " + usDollars + "</br>");
var saudiRiyals = 25;
document.write("SaudiRiyals = " + saudiRiyals + "</br>");
var pakistaniRupees = usDollars * 270.24 + saudiRiyals * 72.02;
document.write("The total currency in PKR " + pakistaniRupees + "<br/>");

document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");


// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 
// Perform all calculations in a single expression

document.write("<h1>Arithmetic</h1>");

var unit = 5;
document.write("The sum of " + unit + " is equal to " + (unit + 5) + "<br/>");
document.write("The Multiply by " + unit + " is equal to " + (unit * 10) + "<br/>");
document.write("The Divide by " + unit + " is equal to " + (unit / 2) + "<br/>");
document.write("<br/>");

document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



// 11. The Age Calculator: Forgot how old someone is? Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.

document.write("<h1>Age Calculator</h1>");
var currentYear = new Date().getFullYear();
document.write("The current year is " + currentYear + "<br/>");
var birthYear = 1995;
document.write("The birth year is " + birthYear + "<br/>");
var age = currentYear - birthYear;
document.write("They are either " + age + " or " + age + " years old<br/>");
document.write("<br/>");

document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



// The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”. 
// (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// Calculate the area based on the radius, and output “The area is NN”. 
// (Hint : Area of a circle = π r2, π = 3.142)

document.write("<h1>Geometrizer</h1>");
var radius = 20;
document.write("The radius of the circle is " + radius + "<br/>");
var circumference = 2 * Math.PI * radius;
document.write("The circumference of the circle is " + circumference + "<br/>");
var area = Math.PI * radius * radius;
document.write("The area of the circle is " + area + "<br/>");
document.write("<br/>");

document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?
// Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.


document.write("<h1>Lifetime Supply Calculator</h1>");
var favoriteSnack = "chocolate";
document.write("Your favorite snack is " + favoriteSnack + "<br/>");
var currentYear = new Date().getFullYear();
document.write("The current year is " + currentYear + "<br/>");
var currentage = 28;
document.write("The current age is " + currentage + "<br/>");
var maxage = 100;
document.write("The maximum age is " + maxage + "<br/>");
var estimatedAmountPerDay = 10;
document.write("The estimated amount per day is " + estimatedAmountPerDay + "<br/>");
document.write("You will need " + (maxage - currentage) * estimatedAmountPerDay + " to last you until the ripe old age of " + maxage + "<br/>");
document.write("<br/>");


