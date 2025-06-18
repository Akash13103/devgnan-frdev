function processNumber(number, callback) {
    console.log("Processing number:", number);
    console.log(callback(number))
}


// 2. Create callback functions
function doubleNumber(num) {
    return num * 2
}

function squareNumber(num) {
    return num * num
}

function addTen(num) {
    return num + 10
}
processNumber(5, doubleNumber);  // Should log: "Processing number: 5" then result
processNumber(3, squareNumber);  // Should log: "Processing number: 3" then result
processNumber(7, addTen); 