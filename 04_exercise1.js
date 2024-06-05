console.log("This one is for the Array practice");

// This is the array and I have to find the average of all the elements of that array

let marks = [99,95,90,88,95,90];

// Method number 1
let sum1 = 0;
for (let i = 0; i < marks.length; i++){
    // console.log(marks[i]);
    sum1 += marks[i];
}

console.log("The average using first method is", sum1 / marks.length);

// Method number 2
let sum2 = 0;
for (let i of marks){
    sum2 += i;
}

console.log("The average using second method is", sum2 / marks.length);


// Question number 2
let items = [250,645,300, 900,50];
console.log("Array before discount", items);
for (let i = 0; i < items.length; i++){
    items[i] = items[i] - (items[i] * 0.1);
}
console.log("Array after discount", items);

// Question number 3

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// remove first elements from the array
console.log(companies);
companies.shift();
console.log(companies);

// remove uber and ola in its place
companies.splice(1,1,"Ola");
console.log(companies);

// add amazon at the end
companies.push("Amazon");
console.log(companies)





