//设置伸缩菜单
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
    window.location.href = 'school.html';

}
imgBtn.onclick=function(){
    login.style.display="none";
    bigBox.style.opacity=1;

}

var dataView={
    //concat html str
    showHTML:function(data){
        var str="";
        for(var i=0;i<data.length;i++){
            var obj=data[i];
            str+="<div class='mbChild'>";
            str+="<h3>";
            str+="<span class='bg1'></span>";
            str+=obj.name;
            str+="</h3>";
            str+="<ul>";
            for(var j=0;j<obj.child.length;j++){
                str+="<li>"+obj.child[j]+"</li>";
            }
            str+="<li class='more'>查看更多<i></i></li>";
            str+="</ul>";
            str+="</div>";
        }
        return str;
    }
};
 $(function() {
     //show data html
     $("div.menuBody").html(dataView.showHTML(json));

     //not first mbChild hide
     var $notFirst = $("div.menuBody>.mbChild:not(:first-child)");
     $notFirst.find("span").removeClass("bg1").addClass("bg2");
     $notFirst.find("ul").css({
         display: "none"
     });

     //mbChild h3 click
     $("div.menuBody>.mbChild>h3").click(function () {
         var $next = $(this).next();
         $next.slideToggle();
         var $span = $(this).children("span");
         if ($span.hasClass("bg1")) {
             $span.removeClass("bg1").addClass("bg2");
         } else {
             $span.removeClass("bg2").addClass("bg1");
         }
     });

     //show part li
     $("div.menuBody>.mbChild>ul").each(function () {
         $(this).children("li").filter(":gt(1):not(:last-child)").css({
             display: "none"
         });
     });

     //more click
     $("div.menuBody>.mbChild").find(".more").click(function () {
         $(this).siblings().css({
             display: "block"
         });
         $(this).remove();
     });
 });
/*............................end................................*/

//设置播放按钮
var text=document.getElementById("text");
var odiv1s=DOM.getElementClass("textDiv1",text);
var img1=[],img2=[],ospan=[];
for(var i=0;i<odiv1s.length;i++){
    odiv1s[i].i=i;
   img1[i]=DOM.getElementClass("img1",odiv1s[i])[0];
   img2[i]=DOM.getElementClass("img2",odiv1s[i])[0];
    ospan[i]=odiv1s[i].getElementsByTagName("span")[0];
    odiv1s[i].onmouseover=function(){
        img1[this.i].style.opacity=0.5;
        img2[this.i].style.display="block";
        ospan[this.i].style.display="block";
    }
    odiv1s[i].onmouseout=function(){
        img1[this.i].style.opacity=1;
        img2[this.i].style.display="none";
        ospan[this.i].style.display="none";
    }
}