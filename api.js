// api--application programming interface
// Synchronous-- jo data line by line execute krta hai bhle hi kitna time lge pr code line by line fetch hoga
// Asynchronous-- jisme sbse km time lgra hai sbse phle vo run ho jayega jiske krn problem face krna pd skte h jaise last line sbse phle run hogyi bu upr ki entities toh ai hi nhi to work hi nhi hoga
// js is both asynchronous and synchronous
// jb js me api fetch krte h toh ye asynchronous behave krta haikyuki ye lightweight hai or fast work krti hai
// api pe work krne ke liye fetch() function use hota hai
// fetch(url,{})
// {} ye object h iske andr method hote hai http format me
// http method api se browser pr data lane ke liye use hote hai
// method{http}-- get(access),post(insert),delete(remove),put(update),patch(update)
// url==Uniform resource locater
// http==Hyper text transfer potocol
// http secure nahi hai https secure hai kyuki assertion certificate ldta hai
// Promise three states == Reject,Pending,Fullfill
// jb hm api se data fetch krte ho toh data agr aa gya pura toh fullfil , error ayay toh reject,or agr arror bhi nhi aya or data bhi nhi aya toh pending
// promise ko handle krne ke do keywords hote hai async and await jo sath me hi use hong nahi toh error ayegi


// age fetch() ke andr method nhi pass kra to by default get method use krta hai

async function access()
{
   let a= await fetch('https://jsonplaceholder.typicode.com/comments')
   let res= await a.json()
   let data=res.map((i)=> `
      <tr>
        <td>${i.id}</td>
        <td>${i.name}</td>
        <td>${i.email}</td>
      </tr>
      `
   ).join("")

document.getElementById('showdata').innerHTML=data


   //console.log(res)
   // let data=res.map( e =>{return e.name})//e event object
   // console.log(data);
   
   
}
access()

//queryselector single element ko hi target krta haii agr multiple classes h tb bhi first vali class ko hi target krta hai
// let h=document.querySelector(".demo")  
// let h=document.querySelector("h1")  
// let h=document.querySelector("#demo") 
// document.querySelectorAll  ---sare elements ko select krne ke liye but return array hi krega 
console.log(h);




