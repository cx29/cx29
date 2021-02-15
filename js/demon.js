var Name=document.getElementById("name");
var alterTip=document.getElementById("alterTip");
var dayTime=document.getElementById("dayTime");
var time=new Date();
//时间格式切换
let sum=1;
let textTime=setInterval(() => {
    shijiancha(sum);
}, 1000);

function click1(){
    let time='';
    switch(Name.value){
        case "熊姝贤":{
            // console.log("正确");
            timeClock();
            $("#tips").css({"transform":"rotateX(0deg) rotateY(-180deg)","transition":"all 2s"}).addClass("tip");
            cakeShow();
        };break;
        default:{
            // console.log("输入为空");
            // alterTip.classList.add("showOutTips");
            let tips=document.getElementById("tips");
            tips.classList.add("errorlogin");
            time=setInterval(function(){
                tips.classList.remove("errorlogin")
                clearInterval(time);
            },1000);
        };break;
    }
}

//判断时间
function timeClock(){
    let hours=time.getHours();
    console.log(hours);
    if(hours>=6&&hours<12){
        console.log("早上好");
        dayTime.innerHTML="早上好";
    }else if(hours>=12&&hours<18){
        console.log("下午好");
        dayTime.innerHTML="下午好";
    }else{
        console.log("晚上好");
        dayTime.innerHTML="晚上好";
    }
}
//当提示消失的时候才显示蛋糕,并同步显示文案
function cakeShow(){
    let time='';
    $("#alterTip").addClass("showOutTips");
    time=setTimeout(function(){
        $("#div_dbcake_cake").fadeIn("slow");
        show_dbcake();
        $(".textsbox").fadeIn("slow");
        clearInterval(time);
    },6000);
}
//文案显示
function textShow(){
    let index=0;
    let word=document.getElementById("textBox").innerHTML;
    console.log(word);
    let textClock=setInterval(() => {
        document.getElementById("textBoxs").innerHTML=word.substring(0,index++)+" _";
    }, 1000);
    if(index==word.length){
        clearInterval(textClock);
        document.getElementById("textBoxs").innerHTML=word;
    }
}
//切换时间显示
function qiehuan(){
    shijiancha(sum);
    sum++;
}
//出生时间差
function shijiancha(index){
    let t2="2000/02/20 20:45:00";
    let time2=new Date(t2);
    let time1=new Date();
    //计算出毫秒差
    let cha=time1.getTime()-time2.getTime();
    //计算出相差的天数
    let dayDiff=Math.floor(cha/(24*3600*1000));
    //计算天数后剩余的毫秒数
    let leave1=cha%(24*3600*1000);
    //计算出小时数
    let hours=Math.floor(leave1/(3600*1000));
    //计算出小时数后剩余的毫秒数
    let leave2=leave1%(3600*1000);
    //计算出相差的分钟数
    let minutes=Math.floor(leave2/(60*1000));
    //计算分钟数后剩余的毫秒数
    let leave3=leave2%(60*1000);
    //计算相差秒数
    let seconds=Math.round(leave3/1000);
    //落地秒数
    let downSecond=((dayDiff*24+hours)*60+minutes)*60+seconds;
    // console.log(cha);
    // console.log("相差天数"+dayDiff);
    // console.log("相差小时数"+hours);
    // console.log("相差的分钟数"+minutes);
    // console.log("相差秒数"+seconds);
    // console.log(downSecond);
    if(index%2==0){
        document.getElementById("timeClock").innerHTML="你已经落地"+downSecond+"秒";
    }else{
        document.getElementById("timeClock").innerHTML="你已经落地"+dayDiff+"天"+hours+"时"+minutes+"分"+seconds+"秒";
    }
}
//jQery
$("#name").focus(function(){
    // console.log("聚焦了");
    $("#tips").addClass("tipStyle");
}).blur(function(){
    // console.log("失焦了");
    $("#tips").removeClass("tipStyle");
})
//蛋糕
function show_dbcake(){
    console.log('show_cake');
    $(".velas").addClass("active");
    $("#div_dbcake_cake").fadeIn(1500,"swing");            
               
    setTimeout(function(){
        document.getElementsByTagName("animate")[4].beginElement();
    },1000);
    setTimeout(function(){
        $("#div_dbcake_wish").fadeIn(1000,"swing");
    },6000);
}
//文案框下一步的按钮
function toContinue(){
    if($(".initText").css("display")=="flex"){
        $(".initText").fadeOut();
    }
    // console.log($(".initText").css("display")=="flex");
}