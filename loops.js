// JavaScript Loops
// Loops can execute a block of code a number of times.
// Loops are handy, if you want to run the same code over and over again, 
// each time with a different value.

// Different Kinds of Loops
// JavaScript supports different kinds of loops:

// for - loops through a block of code a number of times.
// for/in - loops through the properties of an object.
// for/of - loops through the values of an iterable object.
// while - loops through a block of code while a specified condition is true.
// do/while - also loops through a block of code while a specified condition is true.


// for Loop
for (let i = 0; i < 5; i++) {
    text = "The number is " + i ;
    console.log(text);
  }

// for/in Loop.
const person = {fname:"John", lname:"Doe", age:25};


for (let x in person) {
    text = person[x];
    console.log(x);
}

// for/of Loop.
const person2 = ["Rimmel", "haris","Mark ZingerBurger"]
for (let c of person2){
    console.log(c);
}

// While Loops

// while (condition) {
//     // code block to be executed
//   }

let num = 0;
while (num < 10) {
    text = "The number is " + num;
    console.log(text);
    num++;
}

// Do/While.

let num2 = 10;
do {
    text = "The number is " + num2;
    console.log(text)
    num2++;
}
while (num2 < 10);