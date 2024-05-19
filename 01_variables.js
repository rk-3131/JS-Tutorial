// to print the variable on the console or any string on the console we have to use the console.log in javascript

console.log("Hello World and welcome to javascript");

console.log("Radhakrushna Mahadik");

console.log("You are here because you deserved!");

// console.log() will always print the code on new line and hence we dont need to add any extra new line character

// alert("Are you okay?");

// variables are used to store the values inside them
// They will be assigned the memory based on the datatype present there

age = 22; 
my_name = "Radhakrushna Mahadik";
score = 96.53;
// Variables can be declared without using any datatype and hence it can be considered as dynamically typed language

console.log("Hello my age is " + age);
console.log("Hello my age is" , age);
// To add the two strings we can use + symbol or we can even use , operator and hence we can use both to print on the console
// Major difference between + operator or , operator is that + operator will not add any white space and it will just concanate the string to the variable and hence we have to expliciltly add the white space out there
// But when we use the , operator the white space will be added to the variable no matter what

console.log("My name is", my_name);
console.log("My score is " + score);
console.log("Age has now been updated to", age + 1)

x = null;
console.log("Here null means there is no value and not else", x);
// Null is there is no value it just means nothing is stored

y = undefined;
console.log("Undefined is we dont know what is the value", y);
// undefined tell that there will be a value which will be stored in the variable and hence at this point only it is not defined

isFollow = true;
isUnfollow = false;
// Boolean are used to store the true or false values which can be used to check the conditions

// JavaScript is dynamically types language

// = is called assignment operator 
// name of variable can be given anything
// variable names are case sensitive
// letters, digits, underscore and $ can be used to define the name of the variable
// number cannot be the first letter of the variable
// resereved words cannot be the name of the variables

// var is used to declare the variables
// it is used to declare the global score variables
// variables can be re-declared and updated

// let is also used to declare the variables
// it is local score variable declaration keyword
// variable can be updated but it can't be re-declared

// const is block scope 
// It can't be re-declared and not even updated

// Hence we have to use these keywords for defining the new variables based on the use case we want to use

let name = "Radhakrushna Mahadik";
console.log(name);

name = "Sanket Ugale";
console.log(name);

name = 9988;
console.log(name);

// let name = "Sanket Ugale";
// console.log(name);
// As we have mentioned in the rules specified in the previously
// The name variable is created by using let keyword and hence it has local scope and it cannot be re-declared
// But the variables can be assigned different values as they can be updated
// variables declared using let and not assigned any values then they will have the undefined value hence they can be just declared and not initialized 

var roll_no = 2012;
console.log(roll_no);

roll_no = "Jay Ho";
console.log(roll_no);

var roll_no = 3072;
console.log(roll_no);

// Hence from the above example we can say that the variables declared as var can be re-declared as well as they can also be updated and hence they are also known for thier use in the global scope
// as var can be re-decalred again and again hence this might give us confusion and hence we should not use the var keyword so often and we should be using the let to delcare the variable

const my_var = 994;
console.log(my_var);

// my_var = 45;
// console.log(my_var);
// This will not be possible as we cannot update the constant operator
// const are declared in the capital case so that they are seen easily


{
    let a = 5;
    console.log(a);
    // let a = 10;
    // console.log(a);
    // It wont work
}

let a = 10;
console.log(a);
// Here a is re-delared as let as local scope

{
    let a = 100;
    console.log(a);
}

// let a = 99;
// This wont work as we have a initialied in the variable even before they were there


{
    var a2 = 100;
    console.log(a2);
}

console.log(a2)
// a2 can be accessed outside of the block as a2 has global scope

// there are different types of data in the JS which are

// 1. Number
let num1 = 456;
let num2 = 4568.5;
console.log(num1, typeof(num1));
console.log(num2, typeof(num2));

// 2. String
let str1 = "My Name";
let str2 = 'My Name';
console.log(str1, typeof(str1));
console.log(str2, typeof(str2));

// 3. Boolean
let isTrue = true;
let isFalse = false;
console.log(isTrue, typeof(isTrue));
console.log(isFalse, typeof(isFalse));

// 4. Undefined
let undef;
console.log(undef, typeof(undef));

// 5. null
let nullValue = null;
console.log(nullValue, typeof(nullValue));

// 6. BigInt
let bigInt = BigInt(45164566);
console.log(bigInt, typeof(bigInt));

// 7. Symbol
let sym = Symbol("hello Ji!!!");
console.log(sym, typeof(sym));

// Arrays and objects are another datatypes which we can use and hence we can have our own datatype 
// we will see them later

// Object stores the value in the key value format

const studentData = {
    fullName : "Rahul Kumar",
    stdAge :  22,
    cgpa : 8.8,
    isPass : true
};
// I am not sure why but variables declared inside of the object using let and var are giving me error hence they are declared without using these keyword of let and var

console.log(studentData, typeof(studentData));
console.log(studentData["fullName"], typeof(studentData["fullName"]));
console.log(studentData.fullName, typeof(studentData.fullName));

console.log("Before", studentData.stdAge);
studentData.stdAge = studentData.stdAge + 1;
console.log("After", studentData.stdAge);
// here even object is constant still we can update variable in the objects
// Array is also collection of datatype but it is linear


