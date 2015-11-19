//轮播图
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
var olis=document.getElementById("btn").getElementsByTagName("li");
var oinner=document.getElementById("inner");
var autotime=null;
for(var i=0;i<olis.length;i++){
    olis[i].i=i;
    olis[i].onclick=function(){
        animate(oinner,{left:-550*this.i},600,2);
        current(this.i);
        step=this.i;
        //点击的时候自动播放的就会停止5s
        clearInterval(autotime);
        autotime=window.setTimeout(function(){
            autotime=window.setInterval(move,2000);
        },2000)
    }
}
var step=0;
function move(){
    step++;
    if(step==5){//一共六张，当索引号等于6是就往第七章上走，其实就是第一张往第二张上走
        //这就把坐标切换到0，然后从第一张到第二张走
        oinner.style.left=0;
        step=1;
    }
    animate(oinner,{left:-550*step},600,2);
    current(step);

}
autotime=window.setInterval(move,2000);
function current(n){
    for(var i=0;i<olis.length;i++){
        olis[i].className=null;
    }
    if(n==5){n=0}
    olis[n].className="current";
}
/*...................end..........................*/

//课程路径图动画
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
            DOM.addclass(obtn,"hover");
        }

    }
    obox3lis[i].onmouseout=function(){
        var obtn=DOM.getElementClass("div2",obox3lis[this.i])[0];
        obox3lis[this.i].style.borderColor="#cccccc";
        if(this.i>=1){
            obtn.style.background="#f3fff6";
        }else{
           DOM.removeClass(obtn,"hover");
        }
    }
}
/*..........................end...............................*/

//侧边导航栏
var box1=document.getElementById("box1");
var boxclass=DOM.getElementClass("left",box1)[0];
var lefthover=DOM.getElementClass("lefthover",box1);
var boxDivs=boxclass.getElementsByTagName("div");
var a=json.liSan;
for(var k=0;k<lefthover.length;k++){
        var b=a[k];
        var n=0;
    for(var l=0;l<b.length;l++){
        var Div=document.createElement("div");
        Div.className="context";
        Div.innerHTML=b[l];
        n++;
        if(n>10){
            var t=(n-11)*30;
            Div.style.position="absolute";
            Div.style.marginLeft="150px";
            Div.style.width="120px";
            Div.style.top=t+"px";
            lefthover[k].style.width+="280px";
        }
        lefthover[k].appendChild(Div);

    }
}
for(var i=0;i<boxDivs.length;i++){
    boxDivs[i].i=i;
    boxDivs[i].onmouseover=function(){
        lefthover[this.i].style.display="block";
        }

    boxDivs[i].onmouseout=function(){
        lefthover[this.i].style.display="none";
    }
}
/*.....................end................................*/

//最新课程选项卡动画
var oImgLis=oDiv1.getElementsByTagName('li');
var oSpans=oDiv1.getElementsByTagName('span');
var oImg1s=DOM.getElementClass("img1",oDiv1);
var oImg2s=DOM.getElementClass("img2",oDiv1);
for(var i=0;i<oImgLis.length;i++){
    oImgLis[i].i=i;
    oImgLis[i].onmouseover=function(){
        oImg2s[this.i].style.display="block";
        oSpans[this.i].style.display="block";
        oImg1s[this.i].style.opacity=0.1;

    }
    oImgLis[i].onmouseout=function(){
        oImg2s[this.i].style.display="none";
        oImg1s[this.i].style.opacity=1;
        oSpans[this.i].style.display="none";

    }

}


//选项卡向上动画
console.log($("#text>div>ul>li"))
$("#text>div>ul>li").mouseenter(function(){
    $(this).children("p").slideDown();
})
$("#text>div>ul>li").mouseleave(function(){
    $(this).children("p").get(0).style.display="none";
})