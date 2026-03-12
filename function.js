// function is block of code or set of instruction
// for increasing reusability
// Syntax:
// function identifier/function_name()
// {
//     code
// }
// function declaration,function definition and function calling inse function hai or tabhi run bhi hota hai
// function declaration:-function identifier/function_name()
// function definition:-{
//     code
// }
// function calling:- identifier/function_name()

2         
// funtion are of two types:userdefine,predefine
// user define are of two types:
// 1.without argument and no return value
// 2.with argument and no return value
// 3.without argument and with return value
// 4.with argument and with return value

// Argument or actual parameter:- the value passed during function calling,,, act as a input
// parameter :-function bnate vkt jo variable bnaye hai

// return
// function demo(a)
// {
//     return a+a
// }
// console.log(demo(8))

// or

// let z=demo(9)
// console.log(z+5);



// without argument and no return value
// function demo()
// {
//     let a=parseInt(prompt("Enter first number:"))
//     let b=parseInt(prompt("Enter second number:"))
//     console.log("Sum=",a+b);
    
// }
// demo()


// with argument and no return value
// function demo(a, b)
// {
//    console.log(a+a);
   
// }
// let a=parseInt(prompt("Enter a number "))
// demo(a)


// wap to print a table of any number using with argument and no return
// function table(num)
// {
//     for(let i=1;i<=10;i++)
//     {
//         console.log(num*i)
//     }

// }
// let num=parseInt(prompt("Enter number:"))
// table(num)

// without argument and return value
// function demo()
// {
//     return "JAvascript"
 
// }
// console.log(demo())

// with argument and with return value

function demo(a)
{
    return a+a

}
let a=parseInt(prompt("Enter a number:"))
console.log(demo(a));



