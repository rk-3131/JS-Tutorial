console.log("Here we will be seeing the result");

document.getElementById("myForm").addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById("userName").value;

    let sym = "@";
    let ln = name.length;

    let userName = sym.concat(name, ln);

    console.log("The name is", userName);
})