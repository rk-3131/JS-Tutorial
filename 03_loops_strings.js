console.log("This will be used for the purpose of loops and strings")

// for loops

for (let i = 0; i < 10; i++){
    console.log('The number at',i,"is", i + 1);
}

// while loop

let i = 1;
while (i <= 10){
    console.log("Number at", i - 1, "index is", i);
    i++;
}

// do while loop

let j = 1;
do {
    console.log(j);
    j++;
}while(j <= 10);

// for of loop
// This is used to get each value in string or in array and hence we can use it for the purpose of iteration
let str = "Radhakrushna";
for (let ch of str){
    console.log(ch);
}
// this should not be used for the purpose of iterrating over object

// To iterate over the object we can use the concept of for in loop

const myObject = {
    rollNo : 72,
    name : "Radhakrushna Mahadik",
    CGPA : 8.8,
    phoneNumber : "7558313179"
};

for (let key in myObject){
    console.log(key, "-->", myObject[key]);
}

// String are collection or sequence of chaarcters

let str1 = "This is my first string";
let str2 = 'This is my second string';

// properties and functions of strings

// length
console.log("str.length is used to get the length of the string",str1.length);

// access the character at particular index of the js string

console.log("The string under consideration is", str1, "and character at the 5th index is", str1[5]);
// we can access the character withing valid range using the above used format

// strings can also be defined and declared using the backticks
// This declaration of the string is very useful in the context of strings where there is both the double and single quotes in them
// Hence this will be used to get the overhead of using slash everytime they come
// This is called as template literal

let specialString = `This is the speacial string and it's type is string but it is just declared using the backticks`;

console.log(specialString);

let var1 = 110;
let var2 = 110;

// String interpolation is another method in javascript which is used to get the string in a way where we can substitute the expression and use that expression in the process of calculating the result in real quick manner and easy to understanding syntactical way
// When using the template literal and then string interpolation then there is a fact where the expression numbers are converted to the string and they are not highlighted as number

console.log(`Here is the string with string interpolation example hidden in it`);
console.log(`Here we will find the value of ${var1} + ${var2} which is equal to ${var1 + var2}`);

// escape characters
// There are number of escape sequence character which we can use to create and add some new effect to the escape sequence
// escape character are calulated as 1 and not 2
// \n new line
// \t tab space

// string methods

// uppercase
console.log(str1.toUpperCase())

// lowercase
console.log(str1.toLowerCase());

// trim the whitespace in front and back of the string
console.log(str1.trim());

// slice
console.log(str1.slice(3, 5));

// add two strings
console.log(str1.concat(str2));

// replace value in the string with new value
console.log(str1.replace('Th', 'h'));

console.log(str1.charAt(5));


