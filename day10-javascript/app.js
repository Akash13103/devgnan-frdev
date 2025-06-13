console.log("Hello, JavaScript!");
console.log("My first JS program");
let isStudent = true;
let hasJob = false;
let age = 20;
let isAdult = age >= 18;
console.log("Is student?", isStudent);
console.log("Is adult?", isAdult);
let phoneNumber; // undefined
let middleName = null; // intentionally empty
console.log("Phone:", phoneNumber);
console.log("Middle name:", middleName);
const name = "Rajesh";
function manMade(){
    let name1 = "Kartik";
    name1="Kap";
    if(true){
        console.log(name1);
    }
    console.log(name1);
    return name1;
}
console.log(manMade.name1);//returns undefined due to block scope variable 'name1' using let;
console.log(manMade());
manMade();