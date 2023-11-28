
// task 1 
var fName = prompt("Enter your first name");
var lName = prompt("Enter your last name");
if(fName != null && lName != null && fName.length > 0 && lName.length > 0){
    confirm("Is your name: " + fName + " "+ lName);

var byear = Number(prompt("Enter your birth year"));

document.write("Welcome " + fName + " " + lName + " your are " + (2023 - byear) + " years old" );
}else {
    alert("Please enter a valid name")
    location.reload();
}

// task 2

var confirm = confirm("Show the first release of a calculator that only has a summation feature.");

if(confirm){
    var fNum = Number(prompt("Enter the first number"));
    var sNum = Number(prompt("Enter the second number"));
    document.write( ` ${fNum} + ${sNum} = ` + (fNum+sNum));
}else{
    document.write("No thing to do")
}
