document.getElementById("cashout-btn").addEventListener('click',function(event){
    event.preventDefault()
    const ammount=document.getElementById('ammount').value
    const intammonut=parseFloat(ammount)
    const pin=document.getElementById('pin-number').value
    const intpin=parseInt(pin)
    const account=document.getElementById('account-number').value
    const mainBalance=document.getElementById('main').innerText
    const intMainBalance=parseFloat(mainBalance)
    if (account.length===11){
        if(intpin===1234){
            console.log(intMainBalance,intammonut)
            const sum=intMainBalance-intammonut
            console.log(sum)
            
            document.getElementById('main').innerText=sum
        }
        else{
            alert("invalid pin")
        }
    }
    else{
        alert("invalid accoumt")


    }
   
})