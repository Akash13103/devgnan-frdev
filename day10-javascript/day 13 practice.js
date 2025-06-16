//simple for loop and function basic concept
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
    console.log("Ending to Starting")
    for (let i = arrData.length-1; i >= 0; i--) {
        console.log("Index:",i,":",arrData[i])
    }
}
function arrayIncrement(){
    console.log("Starting to Ending")
    for (let i = 0; i < arrData.length; i++) {
        console.log("Index:",i,":",arrData[i])
    }
}
