// events are action performed by user
// events always call function
 function fun()
 {
    alert("work in progress")
 }

 function fun1()
 {
    let a=parseInt(prompt("Enter 1sr number"))
    let b=parseInt(prompt("Enter 2nd number"))
    alert(a+b)

 }

 function fun2()
 {
    document.getElementById('res').textContent='<h1>Js Learning</h1>'
 }
 let v=0
 function add()
 {
  document.getElementById('task').textContent=++v
 }
 function sub()
 {
  
   if(v>0)
   {
       document.getElementById('task').textContent=--v
   }
 }
 function res()
 {
   document.getElementById('task').textContent=v
   v=0
 }
 function red()
 {
   document.body.style.background='red'
 }
 function yellow()
 {
   document.body.style.background='yellow'
 }
 function blue()
 {
   document.body.style.background='blue'
 }
 function black()
 {
   document.body.style.background='black'
 }
 function orange()
 {
   document.body.style.background='orange'
 }
function color(a)
 {
   document.body.style.background=a
   
 }