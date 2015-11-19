var odiv=document.getElementById("box1");
var oleft=DOM.getElementClass("left",odiv)[0];
var olis=oleft.getElementsByTagName("li");
function changeTab(){
    var n=DOM.getIndex(this);
    DOM.addclass(this,"selectTab");
    var sibling=DOM.sibling(this);
    for(var i=0;i<sibling.length;i++) {
        DOM.removeClass(sibling[i],"selectTab");
    }
    var oul=this.parentNode;
    var contentGroup=DOM.nextSibling(oul.parentNode)[1];;
    var content=DOM.children(contentGroup);

    for(var i=0;i<content.length;i++) {
        DOM.removeClass(content[i],"selectContent")
    }
    DOM.addclass(content[n],"selectContent");
}
for(var i=0;i<olis.length;i++){
    olis[i].onclick=changeTab;
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
    window.location.href = 'lesson.html';

}
imgBtn.onclick=function(){
    login.style.display="none";
    bigBox.style.opacity=1;

}