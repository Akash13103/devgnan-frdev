const obj={name:"abhi",age:20}
const obj1={...obj,location:"hyd"}
console.log(obj)
console.log(obj1)

function axe(...rest){
 console.log(rest)
}
axe(1,2,3,4,5)
const [a,b,c]=[1,2,"akash","venky"]
console.log(a)
console.log(b)
console.log(c)