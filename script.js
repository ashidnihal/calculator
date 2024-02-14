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
function percent() {
    var percent=result.value
    if(percent==""){
        result.value="Syntax Error"
    }else{
        let whole=100
        let part=(percent/100)*whole;
        result.value=part.toFixed(2)
    }
}