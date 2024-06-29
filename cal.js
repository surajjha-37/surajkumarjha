function fun1(){
var fnum=document.getElementById("num1").value;
var snum=document.getElementById("num2").value;
var tot= parseInt(fnum) + parseInt(snum);
document.getElementById("answer").innerHTML=tot;
}