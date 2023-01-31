// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

document.write("<br>");

var birthYear = 1995;
document.write("My brith is " + birthYear);

document.write("<br>");

document.write("Data type of my decleared variable is number");

document.write("<br>");
document.write("<br>");
document.write("<br>");

// 4. A visitor visits an online clothing store www.xyzClothing.com . 
// Write a script to store in variables the following information: 
// a. Visitor’s name 
// b. Product title 
// c. Quantity i.e. how many products a visitor wants to order 
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitor = "<b>Umair</b>"
var productTitle = "<b>T-shirt</b>"
var quantity = "<b>5</b>"


document.write("<br>");

document.write(visitor + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store");

document.write("<br>");
document.write("<br>");



// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.

var age = "I'm 27 year old";
alert(age);

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. 
// Show his/her number of visits on your web page. For example: “You have visited this site N times”.

var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}

var visited = "You have visited\n"
var time = "\ntimes"

alert(visited + visitCount + time);

counterContainer.innerHTML = visitCount;


