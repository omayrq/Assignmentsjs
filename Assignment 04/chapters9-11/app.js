
// 1. Write a program to take “city” name as input from user. 
// If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

var city;
city = prompt("Enter city name");

if (city === "Karachi") {
    alert("Welcome to city of lights");
} else {
    alert("Wrong city name");
}

// 2. Write a program to take “gender” as input from user. If the user is male, 
// give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

var gender;
gender = prompt("Enter gender(male/female)");
if (gender === "male") {
    alert("Good Morning Sir");
} else if (gender === "female") {
    alert("Good Morning Ma’am");
} else {
    alert("Wrong gender");
}

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
// Signal color
// Message Red Must Stop
// Yellow
// Ready to move Green Move now

var color;
color = prompt("Enter color of road traffic signal (Red, Green, Yellow)");
if (color === "Red") {
    alert("Must Stop");
} else if (color === "Yellow") {
    alert("Ready to Move");
} else if (color === "Green") {
    alert("Move now");
} else {
    alert("Wrong color");
}

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres,
//  show the message “Please refill the fuel in your car”

var fuel;
fuel = prompt("Enter remaining fuel in car (in litres)");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
} else {
    alert("Fuel in your car");
}

// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs. 

// a. displayed message

var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true");
 }

//  b. Not displayed because here we are using post increment operator instead

var b = 82;
if (b++ === 83){ 
    alert("given condition for variable b is true");
 }

//  c. Condition 2 and 4 is true 
 
 var c = 12; 
 if (c++ === 13){ 
    alert("condition 1 is true");
 } 
 if (c === 13){ 
    alert("condition 2 is true");
 } 
 if (++c < 14){ 
    alert("condition 3 is true");
 } 
 if(c === 14){ 
    alert("condition 4 is true");
 }

//  d. True condition, its will execute

 var materialCost = 20000; 
 var laborCost = 2000; 
 var totalCost = materialCost + laborCost; 
 if (totalCost === laborCost + materialCost){ 
    alert("The cost equals");
 }


//  e. will execute true condition
 
 if (true){ 
    alert("True");
 } 
 if (false){ 
    alert("False");
 }

//  f. 
 
 if("car" < "cat"){ 
    alert("car is smaller than cat");
 }


// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the 
// resulting percentage on your page. Take percentage & compute grade as per following:

// percentage:
// greater than or equal to 80
// greater than or equal to 70
// greater than or equal to 60
// less than 60

// Grade
// A-one
// A
// B
// Fail

// Remarks
// Excellent
// Good
// You need to improve
// sorry

// Show the total marks, marks obtained, percentage, grade & remarks like:

document.write('<h1>Marks Sheets</h1>');

var marksObtained;
var totalMarks;
var percentage;
var grade;

marksObtained = prompt("Enter marks obtained in three subjects");
totalMarks = prompt("Enter total marks");
percentage = (marksObtained / totalMarks) * 100;
if (percentage >= 80) {
    grade = "A-one";
} else if (percentage >= 70) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else {
    grade = "Fail";
}
document.write("Marks obtained: " + marksObtained + "<br>" + "Total marks: " + totalMarks + "<br>" + "Percentage: " + percentage + "<br>" + "Grade: " + grade + "<br>" + "Remarks: Excellent, Good, You need to improve, sorry");


// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. 
// Prompt user to guess the secret number. 
// a. If user guesses the same number, show “Bingo! Correct answer”. 
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

var secretNumber;
secretNumber = prompt("Enter secret number");
if (secretNumber === 1) {
    alert("Bingo! Correct answer");
} else if (secretNumber === 2) {
    alert("Close enough to the correct answer");
} else if (secretNumber === 3) {
    alert("Close enough to the correct answer");
} else if (secretNumber === 4) {
    alert("Close enough to the correct answer");
} else if (secretNumber === 5) {
    alert("Close enough to the correct answer");
} else if (secretNumber === 6) {
    alert("Close enough to the correct answer");
} else if (secretNumber === 7) {
    alert("Close enough to the correct answer");
} else if (secretNumber === 8) {
    alert("Close enough to the correct answer");
} else if (secretNumber === 9) {
    alert("Close enough to the correct answer");
} else if (secretNumber === 10) {

    alert("Close enough to the correct answer");
} else {
    alert("Wrong answer");
}

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user 
// if the number is divisible by 3.

var number;

number = prompt("Enter a number");
if (number % 3 === 0) {
    alert("Number is divisible by 3");
} else {
    alert("Number is not divisible by 3");
}

// 9. Write a program that checks whether the given input is an even number or an odd number.

var number;

number = prompt("Enter a number");
if (number % 2 === 0) {
    alert("Number is an even number");
} else {
    alert("Number is an odd number");
}

// 10. Write a program that takes temperature as input and shows a message based on following criteria 
// a. T > 40 then “It is too hot outside.” 
// b. T > 30 then “The Weather today is Normal.” 
// c. T > 20 then “Today’s Weather is cool.” 
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temperature;
temperature = prompt("Enter temperature");
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It is normal outside.");
}

// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: 
// a. First number 
// b. Second number 
// c. Operation (+, -, *, /, %) 
// Compute & show the calculated result to user.

var firstNumber;

firstNumber = prompt("Enter first number");
var secondNumber;
secondNumber = prompt("Enter second number");
var operation;
operation = prompt("Enter operation (+, -, *, /, %)");
if (operation === "+") {
    var result = firstNumber + secondNumber;
} else if (operation === "-") {
    var result = firstNumber - secondNumber;
} else if (operation === "*") {
    var result = firstNumber * secondNumber;
} else if (operation === "/") {
    var result = firstNumber / secondNumber;
} else if (operation === "%") {
    var result = firstNumber % secondNumber;
} else {
    alert("Invalid operation");
}

document.write("Result: " + result);




