// let stu=["Shweta",19,5.3,"bpl"]
// // console.log(stu);
// // console.log(stu[3]);
// for(let i=0;i<=3;i++)
// {
// console.log(stu[i]);
    
// }

// let stu=[]
// for(let a=0;a<5;a++)
// {
//     stu[a]=prompt("Enter student informtion")
   
// }
//  console.log(stu)

//  wap to print a sum of all elements between 8 to 1

// let num=[8,7,6,5,4,3,2,1]
// let sum=0
// for(let i=0;i<8;i++)
// {
//     sum+=num[i]
// }
// console.log(sum);



// ... ->spread operator or rest operator in function

// let ar1=["Shweta","Riya","Pihu","pranjal"]
// let ar2=["arya","mayuri","manya","yuvanshi",...ar1]
// ar3=[...ar1,...ar2]
// console.log(ar3);

// destructuring of array->without indexing element elna with the help of variable no array anme
// let[name,age,city,height]=["Shweta",19,"bpl","5.4"]
// console.log(name);

// let[name,age, ,height]=["Shweta",19,"bpl","5.4"] // jb kisi element ko store hi mhi krana h toh uski space chod do
// console.log(name);


// for of loop -> elements nikalne me without indexing
// for in loop -> only indexing

// let emp=["deepali","bpl",13124235,"cybrom"]
// for(let v of emp)
// {
//     console.log(v);
    
// }
  
// let arr=[1,2,3,4,5,6,7,8,9,10]
// for(let v of arr)
// {
//     if(v%2==0)
//     {
//         console.log(v*v);
        
//     }
// }

// slice(inclusive,exclusive)
// slice(starting index , ending index-1)
// let stu=["Shweta","unmarreied",18,"65kg","indore"]
// let ar=stu.slice(1,4)
// console.log(ar);
// console.log(stu);

// splice-> add,delete
// for adding->3 arguments
// for deleting-> 2 arguments
// for deleting->/splice(index no,no of elements)
// for adding->splice(index no, no of elements,element)
let stu=["Shweta","unmarreied",18,"65kg","indore"]
// stu.splice(2,3)
// console.log(stu);

stu.splice(2,0,"orange","apple")// jb delete na krna ho toh 0 likhenge second no pr
console.log(stu);





