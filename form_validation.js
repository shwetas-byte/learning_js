function validate()
{
    let name=document.getElementById('name').value
    let age=document.getElementById('age').value
    let city=document.getElementById('city').value
    let contact=document.getElementById('contact').value
    if(name=='')
    {
        alert("Please enter your name")
        document.getElementById('name').focus()
        return false
    }
    else if(age=='')
    {
        alert("Please enter your age")
        document.getElementById('age').focus()
        return false
    }
    else if( isNaN(age) )
    {
        alert("Please enter age in digits")
        document.getElementById('age').focus()
        return false
    }
    else if( age>999 || age<0 )
    {
        alert("Please enter your age between 0 and 999")
        document.getElementById('age').focus()
        return false
    }
    else if(city=='')
    {
        alert("Please enter your city")
        document.getElementById('city').focus()
        return false
    }
    
    else if(contact=='')
    {
        alert("Please enter your contact")
        document.getElementById('contact').focus()
        return false
    }
    else if(isNaN(contact))
    {
        alert("Please enter contact no. in digits")
        document.getElementById('contact').focus()
        return false
    }
    else if( contact.length > 10 || contact.length<10  )
    {
        alert("Please enter 10 digit contact no.")
        document.getElementById('contact').focus()
        return false
    }
}