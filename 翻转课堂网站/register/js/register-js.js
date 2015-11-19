/**
 * Created by Administrator on 2015/4/23.
 */
//验证姓名输入框
;(function(){
    var oInput=document.getElementById("inputName");
    var oSpan=document.getElementById("spanName");
    //onblur文本框失去焦点事件
    oInput.onblur=function(){
        var val=this.value.trim();//获取文本框输入的内容
        //验证非空
        if(val.length===0){
            oSpan.innerHTML="姓名不能为空";
            oSpan.style.color="red";
            oSpan.style.background="url('img/ico_warn.png') no-repeat 0 -46px";
            return;
        }
        //验证格式
        var reg=/^[\u4e00-\u9fa5]{2,4}$/;
        if(!reg.test(val)){
            oSpan.innerHTML="姓名格式不正确";
            oSpan.style.color="red";
            oSpan.style.background="url('img/ico_warn.png') no-repeat 0 -46px"
            return;
        }
        oSpan.innerHTML="输入正确";
        oSpan.style.color="green";
        oSpan.style.background="url('img/ico_warn.png') no-repeat 0 4px"

    }

})()
    //验证学号的输入
;(function(){
    var oInput=document.getElementById("inputID");
    var oSpan=document.getElementById("spanID");
    //onblur文本框失去焦点事件
    oInput.onblur=function(){
        var val=this.value.trim();//获取文本框输入的内容
        //验证非空
        if(val.length===0){
            oSpan.innerHTML="学号不能为空";
            oSpan.style.color="red";
            oSpan.style.background="url('img/ico_warn.png') no-repeat 0 -46px";

            return;
        }
        //验证格式
        var reg=/^\d{11}$/;
        if(!reg.test(val)){
            oSpan.innerHTML="学号格式不正确";
            oSpan.style.color="red";
            oSpan.style.background="url('img/ico_warn.png') no-repeat 0 -46px"

            return;
        }
        oSpan.innerHTML="输入正确";
        oSpan.style.color="green";
        oSpan.style.background="url('img/ico_warn.png') no-repeat 0 4px"

    }

})()
    //验证邮箱的输入
;(function(){
    var oInput=document.getElementById("inputEmail");
    var oSpan=document.getElementById("spanEmail");
    //onblur文本框失去焦点事件
    oInput.onblur=function(){
        var val=this.value.trim();//获取文本框输入的内容
        //验证非空
        if(val.length===0){
            oSpan.innerHTML="邮箱不能为空";
            oSpan.style.color="red";
            oSpan.style.background="url('img/ico_warn.png') no-repeat 0 -46px";

            return;
        }
        //验证格式
        var reg=/^[0-9a-z_-]+@[0-9a-z]+\.[a-z]+$/i;
        if(!reg.test(val)){
            oSpan.innerHTML="邮箱格式不正确";
            oSpan.style.color="red";
            oSpan.style.background="url('img/ico_warn.png') no-repeat 0 -46px"

            return;
        }
        oSpan.innerHTML="邮箱输入正确";
        oSpan.style.color="green";
        oSpan.style.background="url('img/ico_warn.png') no-repeat 0 4px"

    }

})()
    //验证密码
;(function(){
    var oInput=document.getElementById("inputPass");
    var oSpan=document.getElementById("spanPass");
    //onblur文本框失去焦点事件
    oInput.onblur=function(){
        var val=this.value.trim();//获取文本框输入的内容
        //验证非空
        if(val.length===0){
            oSpan.innerHTML="密码不能为空";
            oSpan.style.color="red";
            oSpan.style.background="url('img/ico_warn.png') no-repeat 0 -46px";

            return;
        }
        //验证格式
        var reg=/^[0-9a-z]$/i;
        if(!reg.test(val)){
            oSpan.innerHTML="密码格式不正确";
            oSpan.style.color="red";
            oSpan.style.background="url('img/ico_warn.png') no-repeat 0 -46px"

            return;
        }
        oSpan.innerHTML="密码输入正确";
        oSpan.style.color="green";
        oSpan.style.background="url('img/ico_warn.png') no-repeat 0 4px"

    }

})()
;(function(){
    var oInput=document.getElementById("inputPass1");
    var oSpan=document.getElementById("spanPass1");
    //onblur文本框失去焦点事件
    oInput.onblur=function(){
        var val=this.value.trim();//获取文本框输入的内容
        //验证非空
        if(val.length===0){
            oSpan.innerHTML="密码不能为空";
            oSpan.style.color="red";
            oSpan.style.background="url('img/ico_warn.png') no-repeat 0 -46px";

            return;
        }
        //验证格式
        var reg=/^[0-9a-z]$/i;
        if(!reg.test(val)){
            oSpan.innerHTML="密码格式不正确";
            oSpan.style.color="red";
            oSpan.style.background="url('img/ico_warn.png') no-repeat 0 -46px"

            return;
        }
        oSpan.innerHTML="密码输入正确";
        oSpan.style.color="green";
        oSpan.style.background="url('img/ico_warn.png') no-repeat 0 4px"

    }

})()
String.prototype.trim=function(){
    return this.replace(/(^\s*)|(\s*$)/g,"");
}