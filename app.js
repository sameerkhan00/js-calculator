function getNum(num){
    var result=document.getElementById("result");
   result.value +=num;
}
function clearResult(){
    var result=document.getElementById("result");
    result.value="0";
}
function resultbtn(){
    var result=document.getElementById("result");
    result.value=eval(result.value);
}