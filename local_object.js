let person=
{
    name:"Shweta",
    age:19,
    city:"Bhopal",
    contact:2138462
}


localStorage.setItem("userdata",JSON.stringify(person))

let val=localStorage.getItem("userdata")
let fn=JSON.parse(val)//parse originally data jis form me h usme convert kr deta hai
console.log(fn)
console.log(fn.contact);
