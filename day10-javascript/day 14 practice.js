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
const me=arrData.map(function callBack(arrData,index,n){
    return arrData.name+" "+index
})
console.log(me)//it creates a new array
const you=arrData.forEach(function callBack(arrData,index,n){
    return arrData.name+" "+index
})
console.log(you)//it defaulty creates a new undefined value (always)