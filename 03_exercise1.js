console.log("This is the exercise for me based on the strings");

let name = prompt("Enter the name");

let sym = "@";
let ln = name.length;

let userName = sym.concat(name, ln);

if (name == null){
    alert("Nothing entered");
}else{
    alert(userName);
}
// Alert only takes single argument as input hence care has to be taken so that all the string preprocessing has to be done before giving to alert

