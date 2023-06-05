// Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

let intInput = prompt("Write a positive number");
console.log("Positive integer: " + intInput);

const roundInput = Math.round(intInput);
console.log("Round off integer: " + roundInput);

const floorInput = Math.floor(intInput);
console.log("Using floor on integer: " + floorInput);

const ceilInput = Math.ceil(intInput);
console.log("Using ceil on integer: " + ceilInput);

<br></br>

// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

let floatInput = prompt("Write a negative floating point number");
console.log("Positive integer: " + floatInput);

const roundFloatInput = Math.round(floatInput);
console.log("Round off integer: " + roundFloatInput);

const floorFloatInput = Math.floor(floatInput);
console.log("Using floor on integer: " + floorFloatInput);

const ceilFloatInput = Math.ceil(floatInput);
console.log("Using ceil on integer: " + ceilFloatInput);

<br></br>


// Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

let inputNumber = prompt("Enter a number");
console.log("The input number is " + inputNumber);
const outputNumber = Math.abs(inputNumber);
console.log("The absolute number of inputNumber is: " + outputNumber);

<br></br>

// Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

var diceValue = Math.floor(Math.random() * 6) + 1;
console.log("Random Dice Valve is : " + diceValue)



// Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

var randomValue = Math.random();
var coinValue = (randomValue < 0.5) ? "Heads" : "Tails";
console.log("Coin toss output is : " + coinValue);


// Write a program that shows a random number between 1
// and 100 in your browser.

let randomNum = Math.floor(Math.random() * 100) + 1;
console.log("Random number from 1 to 100 : " + randomNum);



// Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


var userInput = prompt("Enter your weight:");
var weight = parseFloat(userInput);
console.log("The weight of user is " + weight);


// Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.



const secretNumber = Math.floor(Math.random() * 10) + 1;
let inNum = parseInt(prompt("Enter a number between 1 and 10"));
if (inNum > 10) {
    console.log("Please enter a number between 1 and 10");
} else if (inNum === secretNumber) {
    console.log("Congratulations, you got the secret number: " + inNum);
} else {
    console.log("Try Again \n" + "You fail to meet Secret Number: " + secretNumber)
}











