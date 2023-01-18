// Intro To Variables.
//  There are $ ways to Declare a JS Variable
// Using var - var keyword is used in all JavaScript Code from 1995 to 2015.
// Using let - added from 2015.
// Using const - added from 2015.
// Using nothing

//  Declaring Variables using var.
var x = 10;
var y = 20;
var z = x + y;

// Declaring Variables using let.

let x2 = 5;
let y2 = 10;
let z2 = x+y;

// Declaring Variables using const.

const price1 = 5;
const price2 = 6;
let total = price1 + price2;

// All JavaScript variables must be identified with unique names.


// Defining Multiple Variables with one Statement.

let person = "Rimmel" , session = "javascript", price=300;
console.log('Output : ',person );


// If you re-declare a JavaScript variable declared with var, it will not lose its value.

var carName = "Volvo";
var carName;

// You cannot re-declare a variable declared with let or const.

let carName2 = "Civic";
// let carName2;  // This will prompt Error.


// Code here: