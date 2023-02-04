// 1. Write a program to take a number in a variable, 
// do the required arithmetic to display the following result in your browser:

document.write('Result:');
document.write('<br>');

var a;
a = 10;

document.write('The value of a is: ' + a);
document.write('<br>');
document.write('<br>');
document.write('****************************************************************');

document.write('<br>');
document.write('<br>');

++a;
document.write('The value of ++a is: ' + a);
document.write('<br>');
document.write('Now the value of a is: ' + a);
document.write('<br>');

document.write('<br>');
document.write('<br>');

a++;
document.write('The value of a++ is: ' + a);
document.write('<br>');
document.write('Now the value of a is:'+ a);
document.write('<br>');

document.write('<br>');
document.write('<br>');

--a;
document.write('The value of --a is:'+ a);
document.write('<br>');
document.write('Now the value of a is:'+ a);
document.write('<br>');

document.write('<br>');
document.write('<br>');

a--;
document.write('The value of a-- is:'+ a);
document.write('<br>');
document.write('Now the value of a is:'+ a);
document.write('<br>');


document.write('<br>');
document.write('<br>');
document.write('<br>');



// 2. What will be the output in variables a, b & result after execution of the following 
// script: 
// var a = 2, b = 1; 
// var result = --a - --b + ++b + b--; 
// Explain the output at each stage: --a;
//  --a - --b;
//  --a - --b + ++b;
//  --a - --b + ++b + b--;


var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write('a is ' + a);
document.write('<br>');
document.write('b is ' + b);
document.write('<br>');
document.write('result is '+ result);
document.write('<br>');

document.write('<br>');
document.write('<br>');

--a;
document.write('a is ' + a);
document.write('<br>');
document.write('(--a)result is '+ result);
document.write('<br>');

document.write('<br>');
document.write('<br>');

--a - --b;
document.write('a is ' + a);
document.write('<br>');
document.write('b is '+ b);
document.write('<br>');
document.write('(--a - --b)result is '+ result);
document.write('<br>');

document.write('<br>');
document.write('<br>');

--a - --b + ++b;
document.write('a is'+ a);
document.write('<br>');
document.write('b is'+ b);
document.write('<br>');
document.write('(--a - --b + ++b)result is '+ result);
document.write('<br>');

document.write('<br>');
document.write('<br>');

--a - --b + ++b + b--;
document.write('a is'+ a);
document.write('<br>');
document.write('b is'+ b);
document.write('<br>');
document.write('(--a - --b + ++b + b--)result is '+ result);
document.write('<br>');

document.write('<br>');
document.write('<br>');


// 3. Write a program that takes input a name from user & greet the user

var input = prompt('Please enter your name');
document.write('Hello ' + input + "," + "<br>" + ' Hope your day going great');

document.write('<br>');
document.write('<br>');
document.write('<br>');

// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. 
// If user does not enter a new number, multiplication table of 5 should be displayed by default.

        var number;
        number = +prompt('Enter table number');
        
        if (number == "") {
          number = 5;
        } else {
          number = number;
        }
        
        for (var i = 1; i <= 10; i++) {
          document.write(number + " x " + i + "=" + (number*i) + "<br>");
        }

document.write("<br/>");
document.write("<br/>");
document.write("<br/>");


// 6. 
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)



       

      function calculateResult() {

        var sub1 = prompt("Enter first subject name")
        var sub2 = prompt("Enter Second subject name")
        var sub3 = prompt("Enter Third   subject name")

        var mrk1 = +prompt("Enter obtained marks of " + sub1);
        var mrk2 = +prompt("Enter obtained marks of " + sub2);
        var mrk3 = +prompt("Enter obtained marks of " + sub3);
        var tol1 = 300;
        var tol2 = mrk1 + mrk2 + mrk3;
        var tol3 = (mrk1 / totalMarks * 100) + (mrk2 / totalMarks * 100) + (mrk3 / totalMarks * 100) + "%";

        var totalMarks = int(100);
        var table = document.getElementById("result");
        var row1 = table.insertRow();
        var cell1_1 = row1.insertCell(0);
        var cell1_2 = row1.insertCell(1);
        var cell1_3 = row1.insertCell(2);
        var cell1_4 = row1.insertCell(3);
        cell1_1.innerHTML = sub1;
        cell1_2.innerHTML = totalMarks;
        cell1_3.innerHTML = mrk1;
        cell1_4.innerHTML = (mrk1 / totalMarks * 100).toFixed(2) + "%";
        var row2 = table.insertRow();
        var cell2_1 = row2.insertCell(0);
        var cell2_2 = row2.insertCell(1);
        var cell2_3 = row2.insertCell(2);
        var cell2_4 = row2.insertCell(3);
        cell2_1.innerHTML = sub2;
        cell2_2.innerHTML = totalMarks;
        cell2_3.innerHTML = mrk2;
        cell2_4.innerHTML = (mrk2 / totalMarks * 100).toFixed(2) + "%";
        var row3 = table.insertRow();
        var cell3_1 = row3.insertCell(0);
        var cell3_2 = row3.insertCell(1);
        var cell3_3 = row3.insertCell(2);
        var cell3_4 = row3.insertCell(3);
        cell3_1.innerHTML = sub3;
        cell3_2.innerHTML = totalMarks;
        cell3_3.innerHTML = mrk3;
        cell3_4.innerHTML = (mrk3 / totalMarks * 100).toFixed(2) + "%";
        var row4 = table.insertRow();
        var cell4_1 = row4.insertCell(0);
        var cell4_2 = row4.insertCell(1);
        var cell4_3 = row4.insertCell(2);
        var cell4_4 = row4.insertCell(3);
        cell4_1.innerHTML = "";
        cell4_2.innerHTML = tol1;
        cell4_3.innerHTML = tol2;
        cell4_4.innerHTML = tol3;
      }

      document.write(calculateResult());
      

document.write('<br/>');










