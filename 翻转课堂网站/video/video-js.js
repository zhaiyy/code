/**
 * Created by Administrator on 2015/4/21.
 */
var oDiv=document.getElementById("bar1");
var oDiv1=document.getElementById("text");
var oLis=oDiv.getElementsByTagName("li");
var oDivs=oDiv1.getElementsByTagName("div");
function changeTab(nIndex){
    for(var i=0;i<oLis.length;i++){
        oLis[i].className=null;
        oDivs[i].className=null;
    }
    oLis[nIndex].className="act";
    oDivs[nIndex].className="act";
}
for(var i=0;i<oLis.length;i++){
    oLis[i].num=i;
    oLis[i].onclick=function(){
        changeTab(this.num);
    }
}
var box3=document.getElementById("box3");
var obox3lis=DOM.getElementClass("li",box3);
for(var i=0;i<obox3lis.length;i++){
    obox3lis[i].i=i;
    obox3lis[i].onmouseover=function(){
        var obtn=DOM.getElementClass("div2",obox3lis[this.i])[0];
        obox3lis[this.i].style.borderColor="#22ae1a";
        if(this.i>=1){
            obtn.style.background="#cccccc";
        }else{
            obtn.style.background="#35b558";
            obtn.style.color="#f3fff6";
        }

    }
    obox3lis[i].onmouseout=function(){
        var obtn=DOM.getElementClass("div2",obox3lis[this.i])[0];
        obox3lis[this.i].style.borderColor="#cccccc";
        if(this.i>=1){
            obtn.style.background="#f3fff6";
        }else{
            obtn.style.background="#f3fff6";
            obtn.style.color="#35b558";
        }
    }
}
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
    window.location.href = 'video.html';

}
imgBtn.onclick=function(){
    login.style.display="none";
    bigBox.style.opacity=1;

}
