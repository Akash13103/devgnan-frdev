let students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 },
    { name: "Diana", score: 96 },
    { name: "Eve", score: 88 }
];
// Using for loop
// YOUR TASK: Use for loop to extract all names
// CHALLENGE 1: Get all student names
let namesFor = [];
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name)
    namesFor.push(students[i].name)
}
console.log(namesFor)
// Using forEach
let namesForEach = [];
let result1 = students.forEach(function (students, index) {
    return namesForEach.push(students.name)
})
console.log(namesForEach)

// YOUR TASK: Use forEach to extract all names
// Using map (best choice for this task)
let namesMap;
// YOUR TASK: Use map to extract all names

namesMap = students.map(function (students, index) {
    return students.name
});
console.log(namesMap)