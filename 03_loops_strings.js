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
