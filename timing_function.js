// setInterval(),setTimeout()

// setInterval(function,timeHandler)
// setInterval(()=>{document.write("Working..","<br>")} ,1000)
// clearInterval
let v=0
let st
function start()
{
    st=setInterval(()=>{
        document.getElementById('count').textContent=v++
    },500)
}
function stop()
{
    clearInterval(st)
}
function reset()
{
    v=0
    clearInterval(st)
    document.getElementById('count').textContent=0
}