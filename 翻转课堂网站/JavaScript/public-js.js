var backTop=document.getElementById("backTop");
window.onscroll=function(){
    backTop.style.display="block";
    if(document.body.scrollTop==0){
        backTop.style.display="none";
    }
}
var timer=null;
backTop.onclick=function(){
    window.clearInterval(timer);
    timer=null;
    var n=document.body.scrollTop;
    window.setInterval(function(){
        if(n<=0){
            window.clearInterval(timer);
            timer=null;
            return;
        }
        n-=100;
        document.body.scrollTop=n;
    },20);
}