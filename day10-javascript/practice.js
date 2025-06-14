let name = "Alice"; //Fix this code so name is accessible outside the block make it globally accessible
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
console.log(student);