// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

let firstName = prompt("Write your first name");
let secondName = prompt("Write your second name");

let fullName = firstName + " " + secondName;

console.log("Hello\n" + fullName + "\nStay blessed.");


// Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

let phoneModel = prompt("Write your phone model");

console.log("Your phone model is " + phoneModel.length + " characters long.");


// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

let word1 = "Pakistani";

let index1 = word1.indexOf("n");

console.log("The index of letter “n” is " + index1 + ".");

// Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

let word2 = "Hello World";

let index2 = word2.lastIndexOf("l");

console.log("The last index of letter “l” is " + index1 + ".");


// Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

let word3 = "Pakistani";

let index = word3.charAt(3);

console.log("The character at 3rd index is " + index + ".");


// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
// Repeat using string concat() method.

// using concat() method
let firstName2 = prompt("Enter your first name:");
let lastName2 = prompt("Enter your last name:");
let fullName2 = firstName2.concat(" ", lastName2);
console.log("Hello, " + fullName2 + "!");


// Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

let word = "Hyderabad";

let newWord = word.replace("Hyder", "Islam");

console.log("The new word is " + newWord + ".");



// Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;


let message = "Ali and Sami are best friends. They play cricket and football together.";

let newMessage = message.replace("and", "&");

console.log("The new message is " + newMessage + ".");


// Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

let value = "472";
console.log("Value: " + value);

console.log("Type: " + typeof value);

let convertedValue = value.replace("472", 472);

console.log("Value: " + convertedValue);

console.log("Type: " + typeof convertedValue);


// Write a program that takes user input. Convert and
// show the input in capital letters.

let userInput3 = prompt("Enter you input");

let convertedUserInput = userInput3.toUpperCase();

console.log("Your input is " + convertedUserInput + ".");



// Write a program that takes user input. Convert and
// show the input in title case.

let userInput4 = prompt("Enter you input");

let updateUserInput = userInput4.charAt(0).toUpperCase();
let otherWords = userInput4.slice(1).toLowerCase();

console.log("Your input is " + updateUserInput + otherWords +".");



// Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


let num = 35.36;

let convertedNum = num.toString();

let result = convertedNum.replace(".", "")

console.log(result);



// Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

let username = prompt('Enter your username');
const specialSymbol = ['@', '.', ',', '!'];

for (let i = 0; i < specialSymbol.length; i++) {
    if (username.indexOf(specialSymbol[i]) !== -1) {
        return console.log("Please enter a valid username");
    } else {
      return console.log("Entered username is valid");
    }
}


// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

const arr = ["cake", "apple pie", "cookie", "chips", "patties"];
const userInput = prompt("Enter an item:");

let found = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === userInput) {
    found = true;
    break;
  }
}

if (found) {
  console.log("Found");
} else {
  console.log("Not Found");
}


// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

let password = prompt("Enter your password");

if (password.length < 6) {
    console.log("Password must be at least 6 characters long");
} else if (!hasNumberAndAlphabet(password)) {
    console.log("Password must contain both numbers and alphabets");
} else if (isNumber(password[0])) {
    console.log("Password must not start with a number");
} else {
    console.log("Valid Password");
}

function hasNumberAndAlphabet(password) {
    let hasNumber = false;
    let hasAlphabet = false;

    for (let char of password) {
        if (isNumber(char)) {
            hasNumber = true;
        } else if (isAlphabet(char)) {
            hasAlphabet = true;
        }

        if (hasNumber && hasAlphabet) {
            return true;
        }
    }

    return false;
}

function isNumber(char) {
    return /[0-9]/.test(char);
}

function isAlphabet(char) {
    return /[a-zA-Z]/.test(char);
}


// Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var university = "University of Karachi";
var array = university.split(" ");

for (var i = 0; i < array.length; i++) {
  for (var j = 0; j < array[i].length; j++) {
    console.log(array[i][j]);
  }
}

// Write a program to display the last character of a user
// input.

const userInput1 = "Pakistan";
const userInput2 = userInput1.charAt(userInput1.length - 1);
console.log(userInput2);

// You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

var sentence = "The quick brown fox jumps over the lazy dog";
var wordToCount = "the";

var lowercaseSentence = sentence.toLowerCase();
var lowercaseWord = wordToCount.toLowerCase();

var words = lowercaseSentence.split(" ");

var count = 0;
for (var i = 0; i < words.length; i++) {
  if (words[i] === lowercaseWord) {
    count++;
  }
}

console.log("Number of occurrences of the word 'the':", count);
