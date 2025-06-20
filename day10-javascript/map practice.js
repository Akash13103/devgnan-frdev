// YOUR TASK: Implement your own map function
function myMap(array, callback) {
    let newArray = [];
    // Create a new array to hold the results
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }
    return newArray;
}

// Test data
let numbers = [1, 2, 3, 4, 5];
let names = ["alice", "bob", "charlie"];
let temperatures = [0, 100, 32, 212];

// Test 1: Double numbers
console.log("Test 1: Double numbers");
let doubled = myMap(numbers, function (num) {
    return num * 2;
});
console.log("Original:", numbers);  // Should be unchanged
console.log("Doubled:", doubled);   // Should be [2, 4, 6, 8, 10]

// Test 2: Capitalize names
console.log("\nTest 2: Capitalize names");
let capitalized = myMap(names, function (name) {
    return name.toUpperCase();
});
console.log("Original:", names);        // Should be unchanged
console.log("Capitalized:", capitalized); // Should be ["ALICE", "BOB", "CHARLIE"]

// Test 3: Convert Celsius to Fahrenheit
console.log("\nTest 3: Celsius to Fahrenheit");
let fahrenheit = myMap(temperatures, function (celsius) {
    return (celsius * 9 / 5) + 32;
});
console.log("Celsius:", temperatures);
console.log("Fahrenheit:", fahrenheit);

// Test 4: Compare with built-in map
console.log("\nTest 4: Compare with built-in map");

let myResult = myMap(numbers, function (num) {
    return num * 3;
});

let builtInResult = numbers.map(function (num) {
    return num * 3;
});

console.log("My map result:", myResult);
console.log("Built-in map result:", builtInResult);
// They should be identical!