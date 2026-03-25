function validate()
{
    let name=document.getElementById('name').value
    let age=document.getElementById('age').value
    let city=document.getElementById('city').value
    let contact=document.getElementById('contact').value
    let ema=document.getElementById('email').value
    let pass=document.getElementById('password').value
    let confirm=document.getElementById('confirm').value
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
    else if(ema=='')
    {
        alert('Please enter your email')
        document.getElementById('email').focus()
        return false
    }
     else if(!(ema.includes('@gmail.com')))
    {
        alert('Please enter valid email')
        document.getElementById('email').focus()
        return false
    }
    else if(pass=='')
    {
        alert('Please enter your password')
        document.getElementById('password').focus()
        return false
    }
    else if(!(pass.match(/[~`@#$%^&*_+]/)))
    {
        alert('Please enter atleast one special character')
        document.getElementById('password').focus()
        return false
    }
    else if( pass.length >= 15 || pass.length<8  )
    {
        alert("Please enter minimum 8 characters and max 15 characters")
        document.getElementById('contact').focus()
        return false
    }
    else if(confirm=='')
    {
        alert('Please enter your confirm password')
        document.getElementById('confirm').focus()
        return false
    }
    else if(confirm!=pass)
    {
        alert('Password Mismatched')
        document.getElementById('confirm').focus()
        return false
    }
}