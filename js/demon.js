
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
            $("#tips").css({"transform":"rotateX(0deg) rotateY(-180deg)","transition":"all 2s"}).addClass("tip").css("height","300px");
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
        // $("#music").css("src","../source/music/杏子 (きょうこ) - Happy Birthday [mqms2].mp3");
        addDynamicNameAttr_audio("https://music.163.com/outchain/player?type=2&id=4969823&auto=1&height=66");
        clearInterval(time);
    },6000);
}
//文案显示
// function textShow(word,pre){
//     let textIndex=0;
//     let exchange=0;
//     console.log(word.length);
//     let textClock=setInterval(() => {
//         textIndex++;
//         exchange=textIndex;
//         console.log(exchange);
//         pre.innerHTML=word.substring(0,textIndex)+" _";
//         if(word[textIndex]=='把'&&textIndex==159){
//             clearInterval(textClock);
//             jixu(word,pre,exchange);
//             console.log("进来了");
//         }
//         // if(textIndex==word.length+1){
//         //     clearInterval(textClock);
//         //     textIndex=0;
//         //     console.log("也进来了");
//         //     pre.innerHTML=word;
//         // }
//     }, 10);
// }
//断点之后继续显示
// function jixu(word,pre,exchange){
//     if(word[exchange]=='把'&&exchange==159){
//         $("#textBoxs").css("top","-9.25rem");
//         //无效,获取不到内联样式
//         //console.log($("#textBoxs").css("top"));
//         let word2=word.slice(0,exchange);
//         console.log(word.slice(0,exchange+1));
//         if(document.getElementById("textBoxs").style.top=="-9.25rem"){
//             let a=exchange
//             let textClock2=setInterval(() => {
//                 pre.innerHTML=word2+word.substring(a,exchange++)+" _";
//                 if(exchange==word.length+1){
//                     clearInterval(textClock2);
//                     pre.innerHTML=word;
//                 }
//             }, 400);
//         }
//     }
// }
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
    $(".textsbox").css("display","flex");
    if($(".initText").css("display")=="flex"){
        // let word=document.getElementById("textBox").innerHTML;
        // let pre=document.getElementById("textBoxs");
        // textShow(word,pre);
        let source = document.getElementById('source')
        let output = document.getElementById('output')
        let typing = new Typing({
          source,
          output
        });
        $(".initText").fadeOut();
        clearInterval(textTime);
        // $("#music").css("src","../source/music/面包 - 春日,樱花还有你 (抖音原版).mp3");
        addDynamicNameAttr_audio("https://music.163.com/outchain/player?type=2&id=1384026889&auto=1&height=66");
        $("#div_dbcake_cake").slideUp(2000);
        $(".wenan1").fadeIn().css("display","flex");
        // if($(".wenan1").css("display")=="flex"){
        //     $("#btn1").css({
        //         "width": "100%",
        //         "left": "0",
        //         "height": "2.5rem",
        //         "bottom": "0",
        //         "border-radius": "1.875rem",
        //         "border-top-left-radius": "0",
        //         "border-top-right-radius": "0",
        //         "background-color": "#cdbca7d3"
        //     });
        //     $("#hua").css("display","block").addClass("activeHua");
        //     $("#hua1").css("display","block").addClass("activeHua");
        // }
        typing.start();
    }else if($(".wenan1").css("display")=="flex"){
        // let word=document.getElementById("textBox2").innerHTML;
        // let pre=document.getElementById("textBoxs2");
        let source = document.getElementById('source1');
        let output = document.getElementById('output1');
        let typing = new Typing({
          source,
          output
        })
        $(".wenan1").hide();
        $(".wenan2").show().css("display","flex");
        if($(".wenan2").css("display")=="flex")
            $("#btn1").css("bottom","0");
        typing.start();
        document.getElementById("btn1").innerHTML="去看烟花吧 !";
    }else if($(".wenan2").css("display")=="flex"){
        $(".bd").fadeOut();
        $(".bj").fadeIn();
        $('.demo').fireworks({
            sound: true,
            opacity: 0.6,
            width: '100%',
            height: '100%'
        });
        // $("#music").css("src","../source/music/打上花火-DAOKO (ダヲコ)米津玄師 (よねづ けんし)-ringtone.mp3");
        addDynamicNameAttr_audio("https://music.163.com/outchain/player?type=2&id=496869422&auto=1&height=66");
    }
    // console.log($(".initText").css("display")=="flex");
}
//修改音乐
function addDynamicNameAttr_audio(nameAttrValue) {
    console.log(nameAttrValue);
    $(function () {
        $('#aaa').attr('src',nameAttrValue);
        var fry_audio=$('#aaa').get('0');
        fry_audio.load();
    });  
}