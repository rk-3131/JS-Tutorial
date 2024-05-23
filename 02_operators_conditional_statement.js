console.log("For the operators and conditional statement");

// This is single line comment
/*
This is multiline comment
here you can see that there is not error or output for this line of code
*/

// operators in java
// +, -, *, /
// modulus
// exponentiation
// incremant
// decrement

let a = 5;
let b = 2;

console.log("a + b = ",a + b);
console.log("a - b = ",a - b);
console.log("a * b = ",a * b);
console.log("a / b = ",a / b);
console.log("a % b = ",a % b);
console.log("a ** b = ",a ** b);
console.log("a++ = ",a++);
// value of a has became now 11 as it has been increamented in the previous step
console.log("++a = ",++a);
console.log("--b = ",--b);

// assignment operators
// =, +=, -=, *=, %=, **=
// here value is newly assigned value
// The operation which is specified out there will now be used
// That opearation will be performed on the same variable mentioned there and also the value will also be performed on that same variable only

// comparison operators

// == will be used to check if two variable are equal or not
console.log(2 == '2');
// Here we got the value as true as 2 and '2' are equal but there type is not
// hence if we want to find if they are equal along with the data type to which they both belong then there is the new method which we have to use

// === this will check if both the variable are equal along with type 
console.log(2 === '2');
console.log(2 === 2);

// != will check if two variables that we have mentioned there are not equal
// This will return true if those two variable mentioned there wont match
console.log(a != b);
// it will return true as a and b are two different variables having different values
console.log(2 != '2')
// It will return false as they are equal 


// !== this is used to check if the variables mentioned there are not equal along with the type
console.log(2 !== '2');
// this will return true as values are equal but type are not equal


// Comparison operator present there
console.log("a=",a,"b=",b)
console.log("a < b",a < b);
console.log("a > b",a > b);
console.log("a >= b",a >= b);
console.log("a <= b",a <= b);

// logical operators 
// && here both the conditions must be true
console.log(a > b && a >= b);
console.log(a > b && a == b);

// || here any of the mentioned condition has to be true
console.log(a > b || a < b);

// ! this is used to negate the sentence and text data present there that is it will be used to revert the condition out there
console.log(!(a < b));


// conditional statements
// if else if else

let age = 25;

if (age < 18){
    console.log("No you are not eligible to get the licence child")
}else if (age == 18){
    console.log("It seems you just turn 18 and now you can get the driving licence")
}else{
    console.log("Yes you are an adult now and hence you can get the driving licence")
}

// ternary operator
// Here three thing are there
// once is condition and other two are outputs which are expected there

age > 18 ? console.log("Adult") : console.log("Child");
let result = age > 18 ? "Adult" : "Child";
console.log("result", result)


// switch is just like if else but here specific use cases are to be used
switch(age){
    case 15:
        console.log("You cannot vote buddy")
        break;

    case 18:
        console.log("Go and get your registration for the voting card")
        break;
    
    default:
        console.log("You can vote this time")
}




