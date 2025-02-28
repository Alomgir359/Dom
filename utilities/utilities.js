function getValueById(id){
    const value=document.getElementById(id).value
    const intvalue=parseInt(value)
    return intvalue
}


function getinnertextById(id){
    const value=document.getElementById(id).innerText
    const intvalue=parseInt(value)
    console.log("text",value)
    return intvalue
}
function toggle(id,status){
    document.getElementById(id).style.display=status
}