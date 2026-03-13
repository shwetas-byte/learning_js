// dom- document object model
// javascript file se html page pe kuch bhi kam krna ho
// dom me sari cheje object hoti hai
//getElementById- targets singlew lement
//getElementsByClassName targets multiple elemnet and store in the form of array
//getElementsByTagName targets multiple elemnet and store in the form of array
// class and tag same work krte haii
// textContent only text change krts hai
// innerHTMl dono text and tag change kr deta haii

let a=document.getElementById('head1')
console.log(a);
let b=document.getElementById('head2')
console.log(b);
let c=document.getElementById('head3')
console.log(c);
let d=document.getElementById('head4')
console.log(d);
let e=document.getElementById('head5')
console.log(e);
let f=document.getElementById('head6')
console.log(f);

let cla=document.getElementsByClassName('demo')
console.log(cla);

let para=document.getElementsByTagName('p')
console.log(para);

let h=document.getElementById('main')
h.textContent="<i> dhjksfk</i>"
console.log(h);


let hh=document.getElementById('main1')
hh.innerHTML="<i> wesawrewtre</i>"
console.log(hh);

document.getElementById('main1').textContent='ufghkyutyfgh'

