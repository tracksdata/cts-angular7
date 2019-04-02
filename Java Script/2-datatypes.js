
// data types
console.log("data types");

/*
    Data Types
    ------------
    1. Numbers
    2. String
    3. undefined
    4. boolean

*/

// 1. Numebrs
var n=100;
var x=87.34;

// 2. String
var s1="Praveen";
var s2='James';

// Cancating strings
var s3="hello "+s1;

// Expression by using backtic operator for multi line text
var s4= `
Hello ${s1}`

// 3. Undefined
var num;

// 4. boolean type

var hey=false;
var flag=true;

//-------------------------------

// Function Basics

/*
    1. Named Functions
    2. Function Expression (Anonomus Functions)



*/

// 1. Named Function

function hello(){
    console.log('-- hello function');
}
hello();

// 2. Function Expression -> without function name

var empName=function(){
    console.log("hello ...");
    return "Praveen";
}


