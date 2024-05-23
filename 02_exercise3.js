console.log("This is third exercise");

let number = prompt("Enter the number");



if (number == null){
    alert("There was no number and hence please enter the valid number");
}
else if (number > 100){
    alert("Enter proper number");
}
else if (number >= 80 && number <= 100){
    alert("The Grade is A")
}else if (number >= 70 && number < 80){
    alert("The Grade is B");
}else if (number >= 60 && number < 70){
    alert("The Grade is C");
}else if (number >= 50 && number < 60){
    alert("The Grade is D")
}else {
    alert("You are failed in exam but life can still be good");
}

