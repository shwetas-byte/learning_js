//  object:
//  1. to store multiple type of data
//  2.{}
//  3.unorderd no indexing
//  4.format: key and value pair
// notation- .,[]
// [] notation for jb keys me space ho
// can be stored any type of data
// let student=
// {
//     name:"Shweta",
//     age:19,
//     city:"Bhopal",
//     bank:
//     {
//         ac_no:12345,
//         ac_balance:12000
//     },
//     monthly:[300,400,1000]

// }
// console.log(student)
// console.log(student.monthly[2])
// console.log(student.bank.ac_balance)

// let emp=
// {
//     emp_name:prompt("Enter employee name:"),
//     emp_age:prompt("Enter employee age:"),
//     emp_city:prompt("Enter employee city:")
// }
// emp.emp_name=prompt("Enter employee name:")
// emp.emp_age=prompt("Enter employee age:")
// emp.emp_city=prompt("Enter employee city:")
// console.log(emp);
// for in loop only used for printing key but also we can print values
// let obj=
// {
//     fruit:"Apple",
//     vegetable:"Tomato"

// }
// for(let k in obj)
// {
   
//     if(k=="fruit")
//     {
//         console.log(k);
        
//     }
    
// }

let ob=
{
    'name 1':"Shweta",
    'name 2':"Pihu"
}
// console.log(ob['name 1']);
// console.log(ob);
let a=Object.keys(ob)
console.log(a);
let b=Object.values(ob)
console.log(b);


