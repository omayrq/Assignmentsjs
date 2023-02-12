// 1. Declare an empty array using JS literal notation to store student names in future.

var s_name = ["empty"];
document.write(s_name);

document.write("<br>");
document.write("<br>");
document.write("<br>");

// 2. Declare an empty array using JS object notation to store student names in future.

var s_name = new Array("empty");
document.write(s_name);

document.write("<br>");
document.write("<br>");
document.write("<br>");

// 3. Declare and initialize a strings array.

var s_name = ["John", "Jane", "Mary"];
document.write(s_name);
document.write("<br>");
document.write(s_name.length);

document.write("<br>");
document.write("<br>");
document.write("<br>");

// 4. Declare and initialize a numbers array.

var s_name = [1, 2, 3];
document.write(s_name);
document.write("<br>");
document.write(s_name.length);

document.write("<br>");
document.write("<br>");
document.write("<br>");

// 5. Declare and initialize a boolean array.

var s_name = [true, false, true];
document.write(s_name);
document.write("<br>");
document.write(s_name.length);

document.write("<br>");
document.write("<br>");
document.write("<br>");

// 6. Declare and initialize a mixed array.

var s_name = ["John", "Jane", "Mary", 1, 2, 3];
document.write(s_name);
document.write("<br>");
document.write(s_name.length);

document.write("<br>");
document.write("<br>");
document.write("<br>");


// 7. Declare and Initialize an array and store available education qualifications in Pakistan 
// (e.g. SSC, HSC, BCS, BS, B_COM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:


document.write("<h1>" + "Qualification" + "</h1>");
var s_qual = ["1) SSC", "2) HSC", "3) BCS", "4) BS", "5) B_COM", "6) MS", "7) M. Phil.", "8) PhD"];
document.write("<b>" + s_qual[0] + "</b>");
document.write("<br>");
document.write("<b>" + s_qual[1] + "</b>");
document.write("<br>");
document.write("<b>" + s_qual[2] + "</b>");
document.write("<br>");
document.write("<b>" + s_qual[3] + "</b>");
document.write("<br>");
document.write("<b>" + s_qual[4] + "</b>");
document.write("<br>");
document.write("<b>" + s_qual[5] + "</b>");
document.write("<br>");
document.write("<b>" + s_qual[6] + "</b>");
document.write("<br>");
document.write("<b>" + s_qual[7] + "</b>");
document.write("<br>");


document.write("<br>");
document.write("<br>");
document.write("<br>");


// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. 
// Assume that total marks are 500 for each student, display the scores & percentages of students like:

var name_s = ["Michael", "John", "Tony"];
var score_s = [896, 758, 965];
var t_num = 1100;
var Percentage = [(score_s[0]/t_num)*100 + " %", (score_s[1]/t_num)*100 + " %", (score_s[2]/t_num)*100 + " %"]
document.write("Score of " + score_s[0] + ". Percentage: " + Percentage[0]);
document.write("<br>");
document.write("Score of " + score_s[1] + ". Percentage: " + Percentage[1]);
document.write("<br>");
document.write("Score of " + score_s[2] + ". Percentage: " + Percentage[2]);
document.write("<br>");


document.write("<br>");
document.write("<br>");

// 9. Initialize an array with color names. Display the array elements in your browser. 

var colors = ["red", " green", " blue"];
document.write(colors);
document.write("<br>");

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. 
// Display the updated array in your browser. 

var c_name = prompt("Enter a color name at start of array")
colors.unshift(c_name)
document.write(colors);
document.write("<br>");

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. 
// Display the updated array in your browser. 

var c_name_end = prompt("Enter a color name at end of array")
colors.push(c_name_end)
document.write(colors);
document.write("<br>");

// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser. 

var c_name_start = ["black", "gray"]
colors.unshift(c_name_start)
document.write(colors);
document.write("<br>");

// d. Delete the first color in the array. 
// Display the updated array in your browser.

colors.shift()
document.write(colors);
document.write("<br>");

// e. Delete the last color in the array. 
// Display the updated array in your browser. 

colors.pop();
document.write(colors);
document.write("<br>");

// f. Ask the user at which index he/she wants to add a color & color name. 
// Then add the color to desired position/index. 
// Display the updated array in your browser.

var index1 = parseInt(prompt("At which index do you want to add a color?"));
var color1 = prompt("Enter the color name:");
colors.splice(index1, 0, color1);
document.write(colors);
document.write("<br>");

// g. Ask the user at which index he/she wants to delete color(s) & 
// how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . 
// Display the updated array in your browser.

var index = parseInt(prompt("From which index do you want to delete the colors?"));
var numOfColors = parseInt(prompt("How many colors do you want to delete?"));
colors.splice(index, numOfColors);
document.write(colors);

document.write("<br>");
document.write("<br>");
document.write("<br>");

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

var score_s = [320, 230, 480, 120];
document.write("Scores of Students: " + score_s);
score_s.sort();
document.write("<br>");
document.write("Ordered Scores of Students: " + score_s);

document.write("<br>");
document.write("<br>");
document.write("<br>");

// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities array.

var cities = ["Karachi", "Lahore", "Islamabad", "Que_tta", "Peshawar"];
var selectedCities = cities.slice(2, 4);
// var f_S_cities = selectedCities.slice(3, 2)
document.write("<b>" + "Cities list:" + "<b>" + "<br>" + cities + "<br>");
document.write("<br>");
document.write("<b>" + "Selected cities list:" + "<b>" + "<br>" + selectedCities + "<br>")
document.write("<br>");

// 12. Write a program to create a single string from the below mentioned 
// array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

var arr_a = ["This ", " is ", " my ", " cat"];
document.write("<b>" + "Array:" + "<b>" + "<br>" + arr_a);

var joint_ = (arr_a.join(""));
document.write("<b>" + "String:" + "<b>" + "<br>" + joint_);

document.write("<br>");
document.write("<br>");
document.write("<br>");

// 13. Create a new array. Store values one by one in such a way that you can access 
// the values in the order in which they were stored. (FIFO-First In First Out)

document.write("<b>" + "Devices:" + "<b>");
var arr_001 = ["keyboard", "mouse", "printer", "monitor"];
document.write("<br>");
document.write(arr_001);
document.write("<br>");
document.write("<br>");

document.write("<b>" + "Out" + "<br>");
document.write(arr_001.shift());

document.write("<br>");

document.write("<b>" + "Out" + "<br>");
document.write(arr_001.shift());

document.write("<br>");

document.write("<b>" + "Out" + "<br>");
document.write(arr_001.shift());

document.write("<br>");

document.write("<b>" + "Out" + "<br>");
document.write(arr_001.shift());
document.write("<br>");

document.write("<br>");
document.write("<br>");
document.write("<br>");

// 14. Create a new array. Store values one by one in such a way that you can access 
// the values in reverse order. (Last In-First Out)

document.write("<b>" + "Devices:" + "<b>");
var arr_002 = ["keyboard", "mouse", "printer", "monitor"];
document.write("<br>");
document.write(arr_002);
document.write("<br>");
document.write("<br>");

document.write("<b>" + "Out" + "<br>");
document.write(arr_002.pop());
document.write("<br>");

document.write("<b>" + "Out" + "<br>");
document.write(arr_002.pop());
document.write("<br>");

document.write("<b>" + "Out" + "<br>");
document.write(arr_002.pop());
document.write("<br>");

document.write("<b>" + "Out" + "<br>");
document.write(arr_002.pop());
document.write("<br>");

document.write("<br>");
document.write("<br>");
document.write("<br>");

// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in your browser using document.write() method:

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<br>");

      // Display the dropdown menu in the browser
      document.write("<select>");
      for (var i = 0; i < manufacturers.length; i++) {
        document.write("<option>" + manufacturers[i] + "</option>");
      }
      document.write("</select>");


