var Name=document.getElementById("name");
var alterTip=document.getElementById("alterTip");
var dayTime=document.getElementById("dayTime");
var dayName=document.getElementById("dayName");
var time=new Date();

function click1(){
    switch(Name.value){
        case "":
        case " ":{
            console.log("输入为空");
            alterTip.classList.add("showOutTips");
        };break;
        case "熊姝贤":{

        };break;
        default:{

        };break;
    }
}