// CHALLENGE 3: Find the first student with score > 90
console.log("\n=== CHALLENGE 3: Find first score > 90 ===");
let students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 },
    { name: "Diana", score: 96 },
    { name: "Eve", score: 88 }
];
// Using for loop (best choice for this task - can break early)
let firstHighScorer = null;
for (let i = 0; i < students.length; i++) {
    if(students[i].score>90){
        firstHighScorer=students[i]
        break;
    }
}
// YOUR TASK: Find first student with score > 90, use break to exit early
console.log("Using for loop:", firstHighScorer);
// Using forEach (not ideal - cannot break early)
let firstHighScorerForEach = null;
flag=false
//YOUR TASK: Find first student with score > 90
// Note: forEach will check ALL students even after finding the first one
students.forEach(function(students,index){
    if(!flag && students.score > 90){
        firstHighScorerForEach=students.name +" "+students.score
        flag=true
    }s
    
})
console.log("Using forEach:", firstHighScorerForEach);