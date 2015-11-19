/*DOM库*/
var DOM={};
DOM.getIndex=function(ele){
    var index=0;
    var p=ele.previousSibling;
    while(p){
        if(p.nodeType==1){
            index++;
        }
        p= p.previousSibling;
    }
    return index;

}
DOM.likeArrayToArray=function(list){
    try{
        [].slice.call(list,0);
    }catch(e){
        var a=[];
        for(var i=0;i<list.length;i++){
            a.push(list[i]);
        }
    }
    return a;
}
DOM.sibling=function(ele){
    var p=ele.parentNode;
    var nodes= p.childNodes;
    var a=[];
    for(var i=0;i<nodes.length;i++){
        var node=nodes[i];
        if(node.nodeType===1&&node!=ele){
            a.push(node);
        }
    }
    return a;
}
DOM.offset=function(ele){
    var l=ele.offsetLeft;
    var t=ele.offsetTop;
    var p=ele.offsetParent;
    while(p){
        l+= p.offsetLeft+ p.clientHeight;
        t+= p.offsetTop+ p.clientTop;
        p= p.offsetParent;
    }
    return{left:l,top:t}
}
DOM.previousSibling=function(ele){
 /*   var p=ele.previousSibling;
    var a=[];
    while(p){
        if(p.nodeType===1){
            a.unshift(p);
        }
    }
    return a;*/
    var node=ele.parentNode.firstChild;
    var a=[];
    while(1){
        if(node==ele){break;}
        if(node.nodeType==1){
            a.push(node);
        }
        node=node.nextSibling;
    }
    return a;
}
DOM.nextSibling=function(ele){
    var node=ele.parentNode.lastChild;

    var a=[];
    while(1){
        if(node==ele)break;
        if(node.nodeType===1){
            a.push(node);
        }
        node=node.previousSibling;
    }
  return a;
}
DOM.prev=function(ele){
    //获得ele相邻的一个哥哥元素节点
    var a=ele.previousSibling;
    while(typeof  a!=="undefined") {
        if (a.nodeType !== 1) {
            a = a.previousSibling;
        }
    }
    return a;


}
DOM.next=function(ele){
    //获得ele相邻的一个弟弟元素节点
    var a=ele.nextSibling;
    while(a) {
        if (a.nodeType !== 1) {
            a = a.nextSibling;
        }
    }
    return a;
}
DOM.closest=function(ele){
    //获得ele相邻的一个弟弟和一个哥哥元素节点最多两个
    var b=DOM.prev(ele).concat(DOM.next(ele));
    return b;
}
DOM.children=function(parent,tag){
    //tag可选，表示指定标签名的子元素
    var nodes=parent.childNodes;
    var a=[];

    if(typeof  tag=="undefined"){
       for(var i=0;i<nodes.length;i++){
           var node=nodes[i];
           if(node.nodeType===1){
               a.push(node);
           }
       }
   }else{
        tag=tag.toUpperCase();
        for(var i=0;i<nodes.length;i++){
            var node=nodes[i];
            if(node.nodeType===1 && node.tagName==tag){
                a.push(node);
            }
        }
    }

    return a;
}
DOM.getElementClass=function (str,context){
    context=context||document;
    if(document.getElementsByClassName){
        return context.getElementsByClassName(str);
    }
    str=str.replace(/^ +| +$/g,"");
    var aClassName=str.split(/ +/);
    var eles=document.getElementsByTagName("*");
    for(var i=0;i<aClassName.length;i++){
        eles=DOM.byClass(aClassName[i],eles)
    }
    return eles;
}
DOM.byClass=function (strClass,eles){
    var a=[];
    var reg=new RegExp("(?:^| )"+strClass+"(?: |$)");
    for(var i=0;i<eles.length;i++){
        var ele=eles[i];
        if(reg.test(ele.className)){
            a.push(ele);
        }
    }
    return a;
}

DOM.addclass=function(ele,strClass){
    var reg=new  RegExp("(^| )"+strClass+"( |$)");
    if(!reg.test(ele.className)){
        ele.className+=" "+strClass;
    }

}
DOM.removeClass=function(ele,strClass){
    var reg=new  RegExp("(^| )"+strClass+"( |$)","g");
        ele.className=ele.className.replace(reg,"");

}
DOM.getCss=function(ele,attr){
    if(window.getComputedStyle){
        return parseFloat(window.getComputedStyle(ele,null)[attr]);

    }else{
       return parseFloat(ele.currentStyle[attr]);
    };
}