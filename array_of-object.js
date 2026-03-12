// let students=[
//     {
//         name :"Shweta",
//         rollno:101,
//         city:"Bhopal",
//         grade:"A"
//     },
//     {
//         name :"Pranjal",
//         rollno:102,
//         city:"Indore",
//         grade:"B"

        
//     },
//     {
//         name :"Yash",
//         rollno:103,
//         city:"Gwallior",
//         grade:"C"

//     }
// ]
// console.log(students);
// console.log(students[0]);
// call back function:jiske function ke parmeter me fuction pass ho
// higher order function:jiske argument me pura function pass kiya jaye
// map function helps in accessing array elements and returns a new array
// students.map(function)
// Map(function)->higher order funvtion
// function->call back function


// let vl=students.map((e)=>{return e.name})
// let vl1=students.map((e)=>{return e})
// console.log(vl);
// console.log(vl1);


// let vl=students.map((e)=>{return e.grade})
// console.log(vl);

// filter
// let r=students.filter((i)=>{return i.city=="Bhopal"})
// console.log(r);

let employee=[
    {emp_name:"Shweta Singh",
     Salary:20000,
     Age:28,
     City:"Bhopal"
    },
     {emp_name:"Pranjal Singh",
     Salary:18000,
     Age:38,
     City:"Indore"
    },
     {emp_name:"Yash Singh",
     Salary:10000,
     Age:25,
     City:"Gwallior"
    },
     {emp_name:"Arya",
     Salary:26000,
     Age:35,
     City:"jabalpur"
    },
     {emp_name:"Mohan Singh",
     Salary:20500,
     Age:28,
     City:"Chindwara"
    }
]
let vl=employee.filter((e)=>{return e.Salary>15000 && e.Age>30})
console.log(vl);



