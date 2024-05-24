console.log("This will be used for the loop game")

let tempNumber = Math.random() * 100;

let number = Math.floor(tempNumber);

let guess = prompt("Enter the number");

console.log("The number is", number)

while (guess != number){
    if (guess == number){
        console.log("The number entered is the answer");
    }
    if (guess > number){
        guess = prompt("The number guessed is greater than the number enter smaller number");
    }else if (guess < number){
        guess = prompt("The number guessed is smaller than the number, enter the larger number")
    }else{
        alert("You guessed the right number", guess);
        break;
    }
}