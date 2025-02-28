document.getElementById('login').addEventListener('click',function(event){

    event.preventDefault()
    const number=document.getElementById('phone').value
    const pin=document.getElementById('pass').value
    const pinc=parseInt(pin)
    if (number.length===11){
        if(pinc===1234){
           window.location.href="./mainpage.html"
        }
        else(
            alert("invalid pin")
        )

    }
    else{
        alert("invalid nuber")
    }


})



