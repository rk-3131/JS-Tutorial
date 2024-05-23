console.log("This is the second exercise javascript");

let number = prompt("Enter the number");

if (number == null){
    alert("Please refresh the page and enter the valid input number");
}else{
    if (number % 5 == 0){
        alert("Yes, the number is multiple of five");
    }else{
        alert("The number is not multiple of five")
    }
}

