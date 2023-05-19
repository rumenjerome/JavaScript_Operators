console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");

var a = 20;
var b = 4;
var add = a + b;
var minus = a - b;
var multiply = a * b;
var dividing = a / b ;

console.log(a, b, add, minus, multiply, dividing)

// Exercise 2
console.log("EXERCISE 2:\n==========\n");

let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins"; 

var one = num + str;
var two = num + str2;
var three = num + isPresent;
var four = firstName + num;
var five = isPresent + str;
var six = firstName + lastName;

console.log(one, two, three, four, five, six)

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

let val = 5;
let str3 = "5";
let str4 = "five";
let isAwake = false;

var seven = val == str3;
//true^
var eight = val === str3;
//false^
var nine = !isAwake;
//true^
var ten = "eleven" == str4 && val >= str3
//false^
var eleven = !isAwake || isAwake
//true^
var twelve = 0 == false
//true^
var thirteen = 0 === false
//false^
var fourteen = 0 != false
//false^
var fifteen = 0 !== false
//true^

console.log(seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen)