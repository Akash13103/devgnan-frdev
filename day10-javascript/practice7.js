// CHALLENGE 4: Create grade letters (A, B, C, D, F)
        console.log("\n=== CHALLENGE 4: Convert to letter grades ===");

        function getGrade(score) {
            if (score >= 90) return "A";
            if (score >= 80) return "B";
            if (score >= 70) return "C";
            if (score >= 60) return "D";
            return "F";
        }

        // Using for loop
        let marks=[95,82,77,65,54]
        let gradesFor = [];
        for(let i=0;i<marks.length;i++){
            gradesFor.push(getGrade(marks[i]))
        }
        // YOUR TASK: Create array of grade letters

        console.log("Using for loop:", gradesFor);

        // Using map (best choice for this task)
        let gradesMap;
        gradesMap=marks.map(function (score,index){
            return getGrade(score)
        })
        // YOUR TASK: Create array of gradeletters

        console.log("Using map:", gradesMap);

        // REFLECTION: Which method felt most natural for each challenge?
        console.log("\n=== REFLECTION ===");
        console.log("Challenge 1 (extract data): map is clearest");
        console.log("Challenge 2 (transform data): map is clearest");
        console.log("Challenge 3 (find first): for loop is most efficient");
        console.log("Challenge 4 (transform data): map is clearest");