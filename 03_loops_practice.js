console.log("This will be used to practice the loops in JS");

// Print all the even numbers from 0 to 100 using all types of loops possible

// for loops

for (let i = 0; i <= 100; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}

// while loop
let i = 0;
while (i <= 100){
    if (i % 2 == 0){
        console.log(i);
    }
    i++;
}

// do while loop
let j = 0;
do {
    if (j % 2 == 0){
        console.log(j);
    }
    j++;
}while (j <= 100)

