
toggle("addmoney-form","block")
toggle("cashout-form","none")


document.getElementById('add-money-box').addEventListener('click',function(){
    toggle("addmoney-form","block")
    toggle("cashout-form","none")
    
})


document.getElementById('cash-out-box').addEventListener('click',function(){
    toggle("addmoney-form","none")
    toggle("cashout-form","block")
})


document.getElementById("add-money-btn").addEventListener('click',function(event){
    event.preventDefault()
    const ammount=getValueById("ammount")
    const pin=getValueById("pin-number")
    const account=document.getElementById('account-number').value
    const mainBalance=getinnertextById("main")
    if (account.length===11){
        if(pin===1234){
            console.log(mainBalance,ammount)
            const sum=mainBalance+ammount
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