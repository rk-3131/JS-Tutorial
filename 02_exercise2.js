console.log("This is used to get the data from the web to javascript");


document.getElementById('numberForm').addEventListener("submit", function(event) {
    event.preventDefault();

    let number = document.getElementById("number").value;

    let numericValue = Number(number);

    console.log("The number is", numericValue)

    if (numericValue % 5 == 0){
        alert("The number is multiple of 5");
    }else{
        alert("The number is not multiple of 5");
    }
    location.reload();
})

