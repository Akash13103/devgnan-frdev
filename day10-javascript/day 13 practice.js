/*let name = "Alice"; //Fix this code so name is accessible outside the block make it globally accessible
{
    //let name="Alice";//local scope
}
console.log(name); // Should print "Alice"
const PI = 3.14159;              // Never changes
let userName = "guest";        // Will change later
let loginCount = 0;            // Will change
const WEBSITE_TITLE = "MyApp";   // Never changes
let currentPage = 1;           // Will change

// Test your choices:
userName = "Alice";              // Should work
loginCount = loginCount + 1;     // Should work
currentPage = 2;                 // Should work
console.log(PI);
console.log(userName);
console.log(loginCount);
//console.log(WEBSITE_TITLE);
console.log(currentPage);
let message = "Hello";

{
    let message = "Hi";
    console.log("Inside:", message); //Inside: Hi
}

console.log("Outside:", message); // Outside: Hello
const student = {
    name: "John",
    age: 20,
    grade: "A"
};

// Change the student's information
// 1. Change name to "Alice"
// 2. Change age to 22
// 3. Add a new property: city = "Mumbai"

// Write your code here:
student.name = "Alice"
student.age = 20
student.city = "Mumbai"
console.log(student);*/
const arrData = [{
    name: "Akash",
    UserID: "12BVE"
}, {
    name: "Rohan",
    UserID: "13BVE"
}, {
    name: "Maxx",
    UserID: "14BVE"
}, {
    name: "Mohan",
    UserID: "15BVE"
}, {
    name: "Kalyan",
    UserID: "16BVE"
}, {
    name: "Ryuuji",
    UserID: "17BVE"
}]
arrayDecrement()//calling this fucntion displays the array values in descending order
arrayIncrement()//calling this fucntion displays the array values in ascending order
function arrayDecrement() {
    console.log("Bottom to top")
    for (let i = arrData.length-1; i >= 0; i--) {
        console.log("Index:",i,arrData[i])
    }
}
function arrayIncrement(){
    console.log("Top to Bottom")
    for (let i = 0; i < arrData.length; i++) {
        console.log("Index:",i,arrData[i])
    }
}
