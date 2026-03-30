

function storage()
{

    let name=document.getElementById('name').value
let age=document.getElementById('age').value
let contact=document.getElementById('contact').value
let email=document.getElementById('email').value
let address=document.getElementById('address').value
// let n=document.getElementById('data')

    localStorage.setItem("Name",name)
    localStorage.setItem("Age",age)
    localStorage.setItem("Contact",contact)
    localStorage.setItem("Email",email)
    localStorage.setItem("Address",address)

    
    
}
function clearr()
{
    localStorage.clear()
    location.reload()
}

let name=localStorage.getItem("Name")
document.getElementById('data').innerHTML=name
let age=localStorage.getItem("Age")
document.getElementById('data1').innerHTML=age
let contact=localStorage.getItem("Contact")
document.getElementById('data2').innerHTML=contact
let email=localStorage.getItem("Email")
document.getElementById('data3').innerHTML=email
let address=localStorage.getItem("Address")
document.getElementById('data4').innerHTML=address


