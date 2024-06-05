console.log("This is the array lacture video");

// Arrays are nothing but special type of objects
// Hence when we type the data type of the array then it is called as the object as data type

let arr1 = [1,2,3,4,5,6,7,8,9];
let arr2 = ["Ram", "Sham", "Laxman"];
let arr3 = [1, "Rk", 100, "No one"];
// Arrays in the js can have mixed data type of the data type in the memory

console.log("The array is", arr1, "and its length is", arr1.length);
console.log("The array is", arr2, "and its length is", arr2.length);
console.log("The array is", arr3, "and its length is", arr3.length);

// Elements in the array can be addressed in a simillar way as of acccessing the elements in the objects in the array

console.log("Elements at index 1 is ", arr1[1]);

console.log("Elements at index 1 is ", arr1[10]);
// If index gets out of index then it will return the undefined as returned entity

// Element at that index can also be changed using the index
arr1[1] = 66;
console.log("Elements at index 1 is ", arr1[1]);
// But strings are immutable so keep in mind

// looping over array

for (let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
}
 
for (const item of arr1) {
    console.log(item);
}

// Array methods

// push 
// it is used to add the element to the end of the array
console.log("Before adding",items);
items.push(500);
console.log("After adding",items);

// Pop is used to remove the last item from the arrya
console.log("Before removing",items);
let removed = items.pop();
console.log("After removal array is",items,"and the element removed is",removed);


// toString 
// The array can be converted to string and hence it will be easy to print and all in good format

console.log("The array is converted to string here",items.toString());

// To add two arrays into single we concat them 
console.log(marks);
console.log(items);
let combined = marks.concat(items);
// Here concat method can have multiple parameters
console.log(combined);

// unshift
// This is used to add the element at the start of the array

// shift 
// This is used to delete the first element of the array

// slice
// It return the part of the array in the given start and end index
// It does not change the original array
console.log(combined.slice(2,4));
// Second index is exclusive


// splice
// It changes the original array
// splice(start Index, number of elements to be deleted from the start index, new elements that are to be added in the array separated by comma)
// if splice is given only one element then from that index all elements will be deleted

