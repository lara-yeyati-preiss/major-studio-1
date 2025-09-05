/*
  Exercise 2
  JavaScript quirks and tricks
*/

var schoolName = "Parsons";
var schoolYear = 1936;

// Task
// What is the value of test3?
var test1;
if (1 == true) {
  test1 = true;
} else {
  test1 = false;
}

var test2;
if (1 === true) {
  test2 = true;
} else {
  test2 = false;
}

var test3 = test1 === test2;

// Test 3 is assigned the boolean that results from comparing test 1 and test 2. Test 1 is true (1 is equal to true after type coercion) 
// and test 2 is false (1 is not strictly equal to true). 
// Therefore, test 3 is false.


// Task
// Change this code so test4 is false and test5 is true. Use console.log() to confirm your code works.

// The original test is the following:
// var test4 = 0 == "";
// var test5 = 1 === "1";
// The required change is made by replacing the loose equality operator with the strict equality operator in test 1, and doing the opposite in test 2.

var test4 = 0 === "";
var test5 = 1 == "1";

console.log("test4 is", test4, "and test 5 is", test5);

// Task
// What are the values of p, q, and r? Research what is going on here.
var w = 0.1;
var x = 0.2;
var y = 0.4;
var z = 0.5;

var p = w + x;

var q = z - x;

var r = y - w;

// The expected result is 0.3 for all three cases. However, p is 0.30000000000000004, q is 0.3, and r is 0.30000000000000004.
// This happens because of how floating-points are handled in programming languages like JavaScript.
// Every number is stored in binary, and some decimals can't be represented exactly in binary.
// The program then stores approximate versions instead. When doing operations between these numbers,
// slight errors can appear).


console.log(p);
console.log(q);
console.log(r);
