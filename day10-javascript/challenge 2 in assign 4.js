// CHALLENGE 2: Add 5 bonus points to each score
        console.log("\n=== CHALLENGE 2: Add 5 bonus points ===");
         let students = [
            { name: "Alice", score: 85 },
            { name: "Bob", score: 92 },
            { name: "Charlie", score: 78 },
            { name: "Diana", score: 96 },
            { name: "Eve", score: 88 }
        ];
        //Using for loop
        let bonusFor = [];
        for(let i=0;i<students.length;i++){
            bonusFor.push(students[i].score+5)
        }
        // YOUR TASK: Create new array with score + 5 for each student

        console.log("Using for loop:", bonusFor);

        //Using forEach
        let bonusForEach = [];
        students.forEach(function(students,index){
            bonusForEach.push(students.score + 5)
        })
        // YOUR TASK: Create new array with score + 5 for each student

        console.log("Using forEach:", bonusForEach);

        // Using map (best choice for this task)
        let bonusMap=students.map(function(students,index){
            return students.score + 5
        })
        // YOUR TASK: Create new array with score + 5 for each student
        console.log("Using map:", bonusMap);