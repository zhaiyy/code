var p=document.getElementById("p1");
var login=document.getElementById("login");
var submitBtn=document.getElementById("submitBtn");
var  bigBox=document.getElementById("bigBox");
var  imgBtn=document.getElementById("imgBtn");
p.onclick=function(){

    login.style.display="block";
     bigBox.style.opacity=0.5;

}
submitBtn.onclick = function() {
    window.location.href = 'index.html';

}
imgBtn.onclick=function(){
    login.style.display="none";
    bigBox.style.opacity=1;

}