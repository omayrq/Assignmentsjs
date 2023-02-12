// 1. Declare and initialize an empty multidimensional array. (Array of arrays)

var arr1 = new Array();
arr1[0] = new Array();
console.log(arr1);
document.write(arr1);

document.write("<br>");
document.write("<br>");
document.write("<br>");


// 2. Declare and initialize a multidimensional array representing the following matrix:
// 0 1 2 3
// 1 0 1 2
// 2 1 0 1

var arr = new Array();
arr[0] = new Array();
arr[0][0] = 0;
arr[0][1] = 1;
arr[0][2] = 2;
arr[0][3] = 3;
arr[1] = new Array();
arr[1][0] = 1;
arr[1][1] = 0;
arr[1][2] = 1;
arr[1][3] = 2;
arr[2] = new Array();
arr[2][0] = 2;
arr[2][1] = 1;
arr[2][2] = 0;
arr[2][3] = 1;
arr[3] = new Array();

console.log(arr);
document.write(arr);

document.write("<br>");
document.write("<br>");
document.write("<br>");


// 3. Write a program to print numeric counting from 1 to 10.

for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

document.write("<br>");
document.write("<br>");
document.write("<br>");

// 4. Write a program to print multiplication table of any number using for loop. 
// Table number & length should be taken as an input from user.

// Take the table number and length as inputs from the user
var tableNumber = parseInt(prompt("Enter a number to show its multiplication table: "));
document.write("Multiplication table of " + tableNumber);
document.write("<br>");
var tableLength = parseInt(prompt("Enter the length multiplication table: "));
document.write("Length " + tableLength)
document.write("<br>");
document.write("<br>");

// Print the multiplication table
for (var i = 1; i <= tableLength; i++) {
  console.log(tableNumber + " x " + i + " = " + tableNumber * i);
  document.write(tableNumber + " x " + i + " = " + tableNumber * i + "<br/>");
}

document.write("<br>");
document.write("<br>");
document.write("<br>");

// 5. Write a program to print items of the following array using for loop: 
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + "<br/>");
}

document.write("<br>");

document.write("ELement at index 0 is " + fruits[0] )
document.write("<br>");
document.write("ELement at index 1 is " + fruits[1] )
document.write("<br>");
document.write("ELement at index 2 is " + fruits[2] )
document.write("<br>");
document.write("ELement at index 3 is " + fruits[3] )
document.write("<br>");
document.write("ELement at index 4 is " + fruits[4] )
document.write("<br>");

document.write("<br>");
document.write("<br>");
document.write("<br>");

// 6. Generate the following series in your browser. See example output. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
// e. Series: 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 18000, 20000

document.write("<b>" + "Counting" + "<b>")
document.write("<br>");
document.write("<br>");

for (var i = 1; i <= 10; i++) {
  document.write(i + " ");
}

document.write("<br>");
document.write("<br>");

document.write("<b>" + "Reverse counting" + "<b>")
document.write("<br>");
document.write("<br>");

for (var i = 10; i >= 1; i--) {
  document.write(i + " ");
}

document.write("<br>");
document.write("<br>");

document.write("<b>" + "Even" + "<b>")
document.write("<br>");
document.write("<br>");

for (var i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    document.write(i + " ");
  }
}

document.write("<br>");
document.write("<br>");

document.write("<b>" + "Odd" + "<b>")
document.write("<br>");
document.write("<br>");

for (var i = 1; i <= 10; i++) {
  if (i % 2!= 0) {
    document.write(i + " ");
  }
}

document.write("<br>");
document.write("<br>");

document.write("<b>" + "Series" + "<b>")
document.write("<br>");
document.write("<br>");

for (var i = 2000; i <= 20000; i+=2000) {
  document.write(i + "   ");
}

document.write("<br>");
document.write("<br>");
document.write("<br>");

// 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an array. 
// After searching, prompt the user whether the given item is found in the list or not.


var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var a = prompt("Welcome to ABC Bakery. What do you want to order sir/mam? " + ("        cake apple pie cookie chips patties"));

if(a == "cake") {
    document.write("cake is available at index 0 in our bakery");
} else if(a == "apple pie") {
    document.write("apple pie is available at index 1 in our bakery");
} else if(a == "cookie") {
    document.write("cookie is available at index 2 in our bakery");
} else if(a == "chips") {
    document.write("chips is available at index 3 in our bakery");
} else if(a == "patties") {
    document.write("patties is available at index 4 in our bakery");
} else {
    document.write("We are sorry, " + a + "is not available in our bakery");
}
 
document.write("<br>");
document.write("<br>");
document.write("<br>");

// 8. Write a program to identify the largest number in the given array. 
// A = [24, 53, 78, 91, 12].


var A = [24, 53, 78, 91, 12];
document.write("Array items: " + A);
document.write("<br>");
document.write("The largest number is " + Math.max.apply(null, A));

document.write("<br>");
document.write("<br>");
document.write("<br>");


// 9. Write a program to identify the smallest number in the given array. 
// A = [24, 53, 78, 91, 12]

var A = [24, 53, 78, 91, 12];
document.write("Array items: " + A);
document.write("<br>");
document.write("The smallest number is " + Math.min.apply(null, A));

document.write("<br>");
document.write("<br>");
document.write("<br>");


// 10. Write a program to print multiples of 5 ranging 1 to 100.

for (var i = 1; i <= 100; i++) {
  if (i % 5 == 0) {
    document.write(i + " ");
  }
}
