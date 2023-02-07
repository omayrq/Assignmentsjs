// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, 
// uppercase letter or lower case letter. 

function checkCharacterType(char) {
    if (isNaN(char) === false) {
      document.write("Input is a number");
    } else if (char === char.toUpperCase() && char.toUpperCase() !== char.toLowerCase()) {
      document.write("Input is an uppercase letter");
    } else if (char === char.toLowerCase() && char.toUpperCase() !== char.toLowerCase()) {
      document.write("Input is a lowercase letter");
    } else {
      document.write("Input is not a number or a letter");
    }
  }
  
  var inputChar = prompt("Write any characters");
  checkCharacterType(inputChar);

document.write("\n");
document.write("<br>");
document.write("<br>");

//   2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

function compareNumbers(num1, num2) {
  if (num1 > num2) {
    document.write(num1 + " is larger than " + num2);
  } else if (num1 < num2) {
    document.write(num2 + " is larger than " + num1);
  } else {
    document.write(num1 + " and " + num2 + " are equal");
  }
}

var num1 = parseInt(prompt("Enter first number"));
var num2 = parseInt(prompt("Enter second number"));
compareNumbers(num1, num2);

document.write("\n");
document.write("<br>");
document.write("<br>");


// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

function checkNumber(num) {
  if (num > 0) {
    document.write(num + " is positive");
  } else if (num < 0) {
    document.write(num + " is negative");
  } else {
    document.write(num + " is zero");
  }
}

var num = parseInt(prompt("Enter a number"));
checkNumber(num);

document.write("\n");
document.write("<br>");
document.write("<br>");


// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

function checkVowel(char) {
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    document.write(char + " is a vowel");
  } else {
    document.write(char + " is not a vowel");
  }
}

var char = prompt("Write a character");
checkVowel(char);

document.write("\n");
document.write("<br>");
document.write("<br>");


// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches 
// the original password”. Show “Incorrect password” otherwise.

function checkPassword(pass1, pass2) {
    if (pass1 === pass2) {
      document.write("Correct! The password you entered matches the original password");
    } else {
      document.write("Incorrect password");
    }
  }
  var pass1 = prompt("Enter your password");
  var pass2 = prompt("Enter your password again");
  checkPassword(pass1, pass2);

  document.write("\n");
  document.write("<br>");
  document.write("<br>");



// 6. This if/else statement does not work. Try to fix it: 

// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
//     greeting = "Good day"; 
// else greeting = "Good evening"; 
// }

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

document.write("\n");
document.write("<br>");
document.write("<br>");

// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. 
// Implement the following case using if, else & else if statements

// time = 1900

// time >= 0000 && time < 1200 is true print Good Morning or if false 
// the check time >=1200 && time < 1700 is true print Good Afternoon or if false
// the check time >=1700 && time < 2100 is true print Good Evening or if false
// the check time >=2100 && time < 2400 is true print Good Night

function checkTime(time) {
    if (time >= 0000 && time < 1200) {
        document.write("Good Morning");
    } else if (time >= 1200 && time < 1700) {
        document.write("Good Afternoon");
    } else if (time >= 1700 && time < 2100) {
        document.write("Good Evening");
    } else if (time >= 2100 && time < 2400) {
        document.write("Good Night");
    }
}
var time = parseInt(prompt("Enter time"));
checkTime(time);

document.write("\n");
document.write("<br>");
