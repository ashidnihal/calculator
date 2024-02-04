function clicknum(num){
    result.value+=num
}

function clearnum(){
    result.value=''
}

function equals(){
    result.value=eval(result.value)
}
function backclear(){
    result.value=result.value.slice(0,-1)
}