var isKnight=false;
var count=1;
var background=[
    "https://i.loli.net/2020/01/30/UYCQVKXu5FEkhfp.jpg",
    "https://i.loli.net/2020/01/30/LE16W7GBcSXTOIb.jpg",
    "https://i.loli.net/2020/01/30/l9RVGpv4XzitoQc.jpg",
    "https://i.loli.net/2020/01/30/khFbRaNTDBVG1yn.jpg",
    "https://i.loli.net/2020/01/30/C3zdVfuPFvglTQK.jpg",
     "https://i.loli.net/2020/01/30/LFkjaevNX5p13T9.png",
    "https://i.loli.net/2020/01/30/WM4HKcqO8m9ZxI2.jpg",
    "https://i.loli.net/2020/01/30/Qa1iZqL4A3Uevt9.jpg",
    "https://i.loli.net/2020/01/30/NDSXowgTYzV3xad.jpg",
    "https://i.loli.net/2020/01/30/Ax6rtGojZlcdFgR.jpg",
    "https://i.loli.net/2020/01/30/6mdJal8NBTKLwuO.jpg",
    "https://i.loli.net/2020/01/30/4nE2WVLGFYAJ6yN.jpg",
    "https://i.loli.net/2020/01/30/vfhI59smOa7kuDU.jpg",
    "https://i.loli.net/2020/01/30/fmPhJB2esnElON9.jpg",
    "https://i.loli.net/2020/01/30/rdqhm5fFX9wVJZ6.jpg",
    "https://i.loli.net/2020/01/30/pTPCmc5QfboZwS7.jpg",
];
var weathers=[
    "https://i.loli.net/2020/01/30/yoMxLJdN38haGZV.png",
    "https://i.loli.net/2020/01/30/bnSXmIwRPVtuv7K.png",
    "https://i.loli.net/2020/01/30/7KV3MXiBJIFDgab.png",
    "https://i.loli.net/2020/01/30/jSqmcB7n6y1hs5C.png",
    "https://i.loli.net/2020/01/30/mfSoHT9vZPkDUjO.png",
    "https://i.loli.net/2020/02/12/jcZNsGoUwXb432E.png",
];
var days=[
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "日",
]
var temperatureI = document.getElementById('temperature');
var weatherI = document.getElementById('weather');
var weatherP = document.getElementsByClassName('weather')[0].getElementsByTagName('p');
var arrow = document.getElementsByClassName('arrow')[0];
var off = document.getElementsByClassName('off')[0];
var pao = document.getElementById('pao');
var search = document.getElementsByClassName('search')[0];
var logo = document.getElementsByClassName('LOGO')[0];
var line = document.getElementsByClassName('line');
var wechatQRcode = document.getElementById('wechatQRcode');
var qqQRcode = document.getElementById('qqQRcode');
var wechatimg = document.getElementsByClassName('wechat')[0];
var qqimg = document.getElementsByClassName('qq')[0];
var li = document.getElementsByTagName('li');
var body = document.getElementsByTagName('body')[0];
var html = document.getElementsByTagName('html')[0];
var weather = document.getElementsByClassName('weather')[0];
var date = document.getElementsByClassName('date')[0];
var main = document.getElementById('main');
var change = document.getElementsByClassName('switch')[0];
var loading = document.getElementById('loading');
var picture = document.getElementById('picture');

setTimeout(function(){
    picture.style.filter="drop-shadow(2px 2px 4px black) blur(0px)";
},500);
setTimeout(function(){
    loading.style.animation="fade 2s alternate forwards ";
    picture.style.animation="fade 2s alternate forwards";
    html.style.overflow="visible";
    body.style.overflow="visible";
},2000);
setTimeout(function(){
    loading.style.display="none";
    picture.style.display="none";
},4000);

function knight(){
    if(!isKnight){
        main.style.animation="knight 2s alternate forwards";
        setTimeout(function(){
            li[0].innerText="开灯";
            off.setAttribute("src","https://i.loli.net/2020/01/31/2B9KkFJfpTOIWSQ.png");
        },600)
        setTimeout(function(){
            main.style.animation="none";
            main.style.backgroundImage="url('./制作素材/浏览器背景图/knight.jpg')"
        },2000);
        isKnight=true;
    }
    else{
        main.style.animation="change 2s alternate forwards";
        setTimeout(function(){
            main.style.backgroundImage=`url(${background[count]})`;
            li[0].innerText="关灯";
            off.setAttribute("src","https://i.loli.net/2020/01/31/R5bV1XndUyBD46C.png");
        },1000);
        setTimeout(function(){
             main.style.animation="none";
        },2000);
        isKnight=false;
    }
}

function transform(){
    if(isKnight){
        alert("请大大先开灯在进行此操作!");
    }
    else{
        count = Math.floor(Math.random()*15+0);
        main.style.animation="change 2s alternate forwards";
        change.style.animation="rototate 2s alternate forwards";
        setTimeout(function(){
            main.style.backgroundImage=`url(${background[count]})`;
        },800)
        setTimeout(function(){
            main.style.animation="none";
            change.style.animation="none";
        },2000)
    }
}

function emerge(){
    pao.style.animation="emerge 1s alternate forwards";
}

function fade(){
    pao.style.animation="none";
}

function emerge1(){
    qqQRcode.style.animation="emerge 1s alternate forwards";
    qqimg.setAttribute("src","https://i.loli.net/2020/01/30/8QErAwDOd7hfKSF.png");
    qqimg.style.filter="drop-shadow(1px 1px 2px black)"
}

function fade1(){
    qqQRcode.style.animation="fade 1s alternate forwards";
    qqimg.setAttribute("src","https://i.loli.net/2020/01/30/AEWU4TaJe7snRvZ.png");
    qqimg.style.filter="none";
}


function emerge2(){
    wechatQRcode.style.animation="emerge 1s alternate forwards";
    wechatimg.setAttribute("src","https://i.loli.net/2020/01/30/v7SVxWqripdRGjO.png");
    wechatimg.style.filter="drop-shadow(1px 1px 2px black)";
}

function fade2(){
    wechatQRcode.style.animation="fade 1s alternate forwards";
    wechatimg.setAttribute("src","https://i.loli.net/2020/01/30/TbO3WVYwC5SeFit.png");
    wechatimg.style.filter="none";
}

function long1(i){
    line[i].style.animation="long1 1s alternate forwards";
    if(i===0){
    logo.setAttribute("src","https://i.loli.net/2020/01/31/Nm7eCGo4M5xz2WQ.png");
    logo.setAttribute("height","130px");
    }
    if(i===1){
    logo.setAttribute("src","https://i.loli.net/2020/01/31/8NkRrw4ae6xBFOb.png");
    logo.setAttribute("height","220px");
    }
}

function long2(i){
    logo.setAttribute("height","260px");
    line[i].style.animation="long2 1s alternate forwards";
    logo.setAttribute("src","https://i.loli.net/2020/01/31/ubQzXejpEmF2HGh.png");
}

function short(i){
    line[i].style.animation="short 1s alternate forwards";
    logo.setAttribute("src","https://i.loli.net/2020/01/30/r9uKfYdzohli5QP.png");
    logo.setAttribute("height","130px");
}

function expand(){
    weatherP[0].style.display="block";
    weatherP[1].style.display="block";
    weatherP[2].style.display="block";
    arrow.style.animation="fade 1s forwards";
    arrow.style.display="none";
    arrow.style.animation="move 2s infinite";
    
    weatherP[0].style.display="block";
    weatherP[1].style.display="block";
    weatherP[2].style.display="block";
    arrow.style.animation="fade 1s forwards";
    arrow.style.display="none";
    arrow.style.animation="move 2s infinite";
    const settings={
        "method":"GET",
    }
    var URL = `https://api.heweather.net/s6/weather/now?key=a2afed68c2fd47e8832c8baa0f02c054&location=北京`;
    fetch(URL,settings)
    .then(response=>response.json())
    .then(function(res){
        var temperature = res.HeWeather6[0].now.tmp;
        var weather =  res.HeWeather6[0].now.cond_txt;
        weatherP[0].innerText=`今日温度: ${temperature}`;
        temperatureI.setAttribute("src","https://i.loli.net/2020/01/30/JcMpGPbsHzYCB3K.png");
        weatherP[1].innerText=`今日天气: ${weather}`;
        if(weather==="晴")
        weatherI.setAttribute("src",weathers[0]);
        else if(weather==="小雨"||weather==="中雨"||weather==="大雨")
        weatherI.setAttribute("src",weathers[1]);
        else if(weather==="雨夹雪"||weather==="雪"||weather==="小雪"||weather==="中雪"||weather==="大雪"||weather==="暴雪"||weather==="大暴雪")
        weatherI.setAttribute("src",weathers[2]);
        else if(weather==="多云")
        weatherI.setAttribute("src",weathers[3]);
        else if(weather==="阴")
        weatherI.setAttribute("src",weathers[4]);
        else if(weather=="雾")
        weatherI.setAttribute("src",weathers[5]);
         
    })
    weatherI.style.display="block";
    temperatureI.style.display="block";
    var now = new Date();
    weatherP[2].innerText=`${now.getFullYear()}.${now.getMonth()+1}.${now.getDate()} 星期${days[now.getDay()]}`;
}

function tiny(){ 
    weatherI.style.display="none";
    temperatureI.style.display="none";
    var weatherP=document.getElementsByClassName('weather')[0].getElementsByTagName('p');
    for(let i=0;i<weatherP.length;i++){
        weatherP[i].innerText="";
        weatherP[i].style.display="none";
    }
    arrow.style.display="block";
}


    







