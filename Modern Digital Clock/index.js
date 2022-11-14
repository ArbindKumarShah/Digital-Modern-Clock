<!-- jAVASCRIPT CONSOLE API (Application Program interference) -->
// 1.WAYS TO PRINT IN JAVASCRIPT
console.log("Hello World");
//alert("me");
//document.write("This Is Documment Write");

// 2.JAVASCRIPT CONSOLE API
// console.log("Hello World");
// console.log("Hello World", 4 + 6, "Another log");
// console.warn("This Is Warning");
// console.error("This is an error");

//3. Javascript variables
//What are variables? -containers to store data values
// var number1 = 34;
//here var is container and variable is numbers
// var number2 = 56;
// console.log(number1 + number2);

//.Comments in Javascrip-single line(//)
/* multi- line comments */

// 4. Data types in Javascript
// Numbers
// var num1 = 455;
// var num2 = 56.41;


// strings
// var str1 = "This is a string type";
// var str2 = 'This is a string type ';

// Objects
// var marks = {
//     ravi: 34,
//     shubhan: 78,
//     harry: 99.97
// }
// console.log(marks);


//Booleans
// var a = true;
// var b = false;
// console.log(a, b);

//symbol 


// undefined means made varible but it kept as empty
// var und = undefined;
// console.log(undefined);

// var n = null;
// null means nothing is there 
// console.log(n);

/*At a very high leve, there are two types of data types in Javascript
1. primitive data types:undefined, null,number,boolean,symbol,string(6)
2. Reference datat types:Arrays and Objects
*/

//Array 
// var arr = [1, "Arbind", 2, 3, 4, 5]
// console.log(arr)
// console.log(arr[1])
// console.log(arr[4])

//operators in Javasscript
// var a = 40;
// var b = 20;
// console.log("The value of a + b is", a + b);
// console.log("The value of a - b is", a - b);
// console.log("The value of a * b is", a * b);
// console.log("The value of a / b is", a / b);

//Assignment operators
// var c = b;
// c += 2;
// c *= 2;
//similary other operators can be done 
// console.log(c);

//comparison operator
// var x = 10;
// var y = 20;
// console.log(x == y);
// console.log(x > y);
// console.log(x < y);

//logical operators

//Logical AND
//if both are true than true or else false
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

//Logical OR
// At least one of them is true than its true or else false
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false)

// Logical NOT
//It is just opposite one
// console.log(!false);
// console.log(!true);

//Function in Javascript
// DRY-Do not repeat yourself

// function avg(a, b) {
//     return (a + b) / 2;
// }
// c = avg(4, 8);
// console.log(c);

//Conditionals in javascript
var age = 35;
// Single if statement
// if (age > 20) {
//     console.log("you are matured ");
// }

// if else statemet
// if (age > 20) {
//     console.log("you are matured ");
// } else {
//     console.log("you are not matured");
// }



// if else Ladder
/*if (age > 32) {
    console.log("you are not a kid");
}
if (age > 20) {
    console.log("Bache nahi rahe ");
}

if (age > 22) {
    console.log("yes, Bache nahi rahe ");
}
if (age > 18) {
    console.log(" 18 Bache nahi rahe ");

} else {
    console.log("Bache rahe ");
} */


//Loops in Javascript

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr);
// for (var i = 0; i < arr.lenght; i++) {
//     console.log(arr[i])
// }

// arr.forEach(function(element) {
//     console.log(element);
// })


// const ac = 0;
// ac++;
// c = ac + 1;

let j = 0;
// while (j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }


// do {
//     console.log(arr[j]);
//     j++;

// }
// while (j < arr.length);

// Break and Continuous
// break is uded to break the loops and go out of rules and regulations
//continue-is used to continue the conditions


// for (var i = 0; i < arr.length; i++) {
//     if (i == 2) {
//         break;
//         // continue;
//     }

// console.log(arr[i])

// let myArr = ["Fan", "Camera", 34, null, true];
//ARRAYS METHODS

// console.log(myArr.length); //used to print total number of arrays
// myArr.pop(); //used to exclude last element from array
// console.log(myArr);
// // myArr.push("Arbind"); //used to include new element
// console.log(myArr)
//     // myArr.shift() //used to exclude first element from array
// console.log(myArr);
// const newLen = myArr.unshift("Harry")
// console.log(newLen); //prints and includes in new line 
// console.log(myArr);
// myArr.sort() //arranges the disctionary wise
// console.log(myArr);

//STRING METHODS IN JAVASCRIPT
let myLovelyString = "Arbind is a good  and very good person";
// console.log(myLovelyString.length); //Counts total number of characters
// console.log(myLovelyString.indexOf("good")); //position of string
// console.log(myLovelyString.slice(0, 5)); //prints specific characters
// console.log(myLovelyString.replace("good", "bad")); //replace the first word

// TO PRINT THE DATES
// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());


// WHAT IS DOM ?
//     The Javascript DOM(Document Object Model) is an
// interface that allows developers to manipulate the cont
// ent, structure and style of a website.

let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container")
console.log(elemClass);
// elemClass[0].style.background = "yellow"
// elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("text-success")
// elemClass[0].classList.remove("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

tn = document.getElementsByTagName('div')
console.log(tn);
createdElement = document.createElement('p');
createdElement.innnerText = "This is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innnerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
//removeChild(element);..>....removes an element


//selecting using Query...>Searching anything available in program or html containt 
sel = document.querySelector('.container')
console.log(sel)
sel = document.querySelectorAll('.container')
console.log(sel)


// Events in Javascrip;
// function clicked() {
//     console.log('The button wass clicked Successfully')
// }

// window.onload = function() {
//     console.log('The Document was loaded')
// }

// firstContainer.addEventListener('click', function() {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"
//     console.log("clicked On Container ")

// })

// firstContainer.addEventListener('mouseover', function() {
//     console.log("Mouse On Container ") //result will be seen after clicking on firstContainer

// })

// firstContainer.addEventListener('mouseout', function() {
//     console.log("mouse out of Container ") //result will be seen after clicking on firstContainer

// })


//NEW THING 
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function() {
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("mouseup when clicked on Container") //result will be seen after clicking on firstContainer

// })

// firstContainer.addEventListener('mousedown', function() {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"
//     console.log("mousedown when clicked on Container ") //result will be seen after clicking on firstContainer

// })

// Arrow Functions
// function sum(a, b) {
//     return a + b;
// }
summ = (a, b) => {
    return a + b;
}

logKaro = () => {
    console.log("This is use of settimeout and function  will display after 2 seconds")
}

// SetTimeout and setInterval
clr = setTimeout(logKaro, 2000);
clr = setInterval(logKaro, 2000); // used for continuous display
//use clearInterval/clearTimeout to cancel setinterval/setTimeout

// Local Storage in JavaScript
//JSON