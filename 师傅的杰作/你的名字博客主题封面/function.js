var onLock=false;
var isKnight=false;
var state = 1;
var down = document.getElementById('down');
var header = document.getElementsByClassName('header')[0];
var ul = header.getElementsByTagName('ul')[0];
var body = document.getElementsByTagName('body')[0];
var title = document.getElementById('title');
var cut = document.getElementById('cut');
var picture = document.getElementsByClassName('picture');
var color1 = document.getElementsByClassName('green1');
var color2 = document.getElementsByClassName('green2');
var introduction = document.getElementsByClassName('introduction')[0];
var dakablock = document.getElementsByClassName('dakablock')[0];
var tipblock = document.getElementsByClassName('tipblock')[0];
var title = document.getElementById('title');
var introp = introduction.getElementsByTagName('p');
var introSpan = introduction.getElementsByTagName('span');
var dakaP = dakablock.getElementsByTagName('p');
var dakaSpan = dakablock.getElementsByTagName('span');
var tipSpan = tipblock.getElementsByTagName('span');
var tipLi = tipblock.getElementsByTagName('li');

setTimeout(function(){
    for(var k=0;k<color1.length;k++){
        color1[k].style.display="none";
    }
    for(var j=0;j<color2.length;j++){
        color2[j].style.display="none";
    }
    for(var l=0;l<picture.length;l++){
    picture[l].style.animation="none";
    }
},30000);

var order = function(){
    down.style.display="none";
    ul.style.display="block";
}

var orderFade = function(){
    if(!onLock){
    down.style.display="block";
     ul.style.display="none";
    }
}

var clock = function(){
    if(!onLock){
    var img1 = document.getElementsByTagName('img')[1];
    img1.setAttribute("src","./image/lock.png");
    onLock=true;
    header.style.height="90px";
    header.style.width="100%";
    header.style.fontSize="26px";
    header.style.left="0%";
    body.style.overflow="hidden";
    }
    else{
    var img1 = document.getElementsByTagName('img')[1];
    img1.setAttribute("src","./image/unclock.png");
    header.style.height="15px";
    header.style.width="80%";
    header.style.fontSize="4px";
    header.style.left="10%";
    body.style.overflow="none";
    onLock=false;
    }
}

var knight = function(){
    if(!isKnight){
    body.style.animation="knight 3s  ease-in-out 0s 1 alternate forwards";
    setTimeout(function(){ 
    var img2 = document.getElementsByTagName('img')[2];
    img2.setAttribute("src","./image/knight.png");
    },2000)
    isKnight=true;
    }
    else{
    body.style.animation="morning 3s ease-in-out 0s 1 alternate forwards";
    setTimeout(function(){
    var img2 = document.getElementsByTagName('img')[2];
    img2.setAttribute("src","./image/unknight.png");
    },2000)
    isKnight=false;
    }
}
var state1 = function(){
    if(state===2){
        introduction.style.animation="introduction-state0 1s forwards";
        setTimeout(function(){
        for(var i =0;i<introp.length;i++){
            introp[i].style.fontSize="20px";
            }
            for(var j=0;j<introSpan.length;j++){
            introSpan[j].style.fontSize="30px";
            }},450)
        dakablock.style.animation="dakablock-state0 1s forwards";
        for(var i =0;i<dakaP.length;i++){
            dakaP[i].style.fontSize="1px";
            }
            for(var j=0;j<dakaSpan.length;j++){
            dakaSpan[j].style.fontSize="3px";
            }
        tipblock.style.animation="tipblock-state0 1s  forwards";
        for(var i =0;i<tipLi.length;i++){
            tipLi[i].style.fontSize="1px";
            }
            for(var j=0;j<tipSpan.length;j++){
            tipSpan[j].style.fontSize="3px";
            }
    }
    if(state===3){
        introduction.style.animation="introduction-state1 1s forwards";
        setTimeout(function(){
            for(var i =0;i<introp.length;i++){
                introp[i].style.fontSize="20px";
                }
                for(var j=0;j<introSpan.length;j++){
                introSpan[j].style.fontSize="30px";
                }},450)
        dakablock.style.animation="dakablock-state1 1s forwards";
        for(var i =0;i<dakaP.length;i++){
            dakaP[i].style.fontSize="1px";
            }
            for(var j=0;j<dakaSpan.length;j++){
            dakaSpan[j].style.fontSize="3px";
            }
        tipblock.style.animation="tipblock-state1 1s  forwards";
        for(var i =0;i<tipLi.length;i++){
            tipLi[i].style.fontSize="1px";
            }
            for(var j=0;j<tipSpan.length;j++){
            tipSpan[j].style.fontSize="3px";
            }
    }
    else{
        return;
    }
}
var state2 = function(){
    if(dakablock.style.width==="350px"){
        return;
    }
    else{
        introduction.style.animation="introduction-state2 1s  forwards";
        for(var i =0;i<introp.length;i++){
            introp[i].style.fontSize="1px";
            }
            for(var j=0;j<introSpan.length;j++){
            introSpan[j].style.fontSize="3px";
            }
            dakablock.style.animation="dakablock-state2 1s  forwards";
            setTimeout(function(){
            for(var i =0;i<dakaP.length;i++){
                dakaP[i].style.fontSize="20px";
                }
                for(var j=0;j<dakaSpan.length;j++){
                dakaSpan[j].style.fontSize="30px";
                }},550)
        tipblock.style.animation="tipblock-state2 1s  forwards";
        for(var i =0;i<tipLi.length;i++){
            tipLi[i].style.fontSize="1px";
            }
            for(var j=0;j<tipSpan.length;j++){
            tipSpan[j].style.fontSize="3px";
            }

        state=2;
        var day=0;
        var now = new Date();
        if(now.getDay()===1){
            day='一';
        }
        if(now.getDay()===2){
            day='二';
        }
        if(now.getDay()===3){
            day='三';
        }
        if(now.getDay()===4){
            day='四';
        }
        if(now.getDay()===5){
            day='五';
        }
        if(now.getDay()===6){
            day='六';
        }
        if(now.getDay()===0){
            day='日';
        }
        var date = dakablock.getElementsByTagName('p')[1];
        date.innerHTML="<p>"+now.getFullYear()+"<img src='./image/year.png'width='20px'height='20px'>"+(now.getMonth()+1)+"<img src='./image/month.png'width='20px'height='20px'>"+now.getDate()+"<img src='./image/day.png'width='20px'height='20px'>&nbsp;&nbsp;星期"+day+"</p>"
        const settings={
            methods:'GET',
        }
        var URL1 = `https://api.heweather.net/s6/weather/now?key=a2afed68c2fd47e8832c8baa0f02c054&location=天津`;
        fetch(URL1,settings)
        .then(response=>response.json())
        .then(function(res){
            var temperature1 = res.HeWeather6[0].now.tmp;
            var weather1 =  res.HeWeather6[0].now.cond_txt;
            var wind_dir1 =  res.HeWeather6[0].now.wind_dir;
            var wind_sc1 =  res.HeWeather6[0].now.wind_sc;
            var weatherT = document.getElementById('tj');
            weatherT.innerHTML=`<p id="tj"><small>温度:${temperature1}℃&nbsp;&nbsp;天气状况:${weather1}&nbsp;&nbsp;风向:${wind_dir1}&nbsp风级:${wind_sc1}</small></p>`
        })
        var URL2 = `https://api.heweather.net/s6/weather/now?key=a2afed68c2fd47e8832c8baa0f02c054&location=北京`;
        fetch(URL2,settings)
        .then(response=>response.json())
        .then(function(res){
            var temperature2 = res.HeWeather6[0].now.tmp;
            var weather2 =  res.HeWeather6[0].now.cond_txt;
            var wind_dir2 = res.HeWeather6[0].now.wind_dir;
            var wind_sc2 =  res.HeWeather6[0].now.wind_sc;
            var weatherB = document.getElementById('bj');
            weatherB.innerHTML=`<p id="bj"><small>温度:${temperature2}℃&nbsp;&nbsp;天气状况:${weather2}&nbsp;&nbsp;风向:${wind_dir2}&nbsp风级:${wind_sc2}</small></p>`
        })
        var URL3=`https://api.ooopn.com/ciba/api.php?type=json`;
        fetch(URL3,settings)
        .then(response=>response.json())
        .then(function(res){
            var sentenceC = res.ciba;
            var sentenceE = res['ciba-en'];
            var sentence1 = document.getElementById('sentence1');
            var sentence2 = document.getElementById('sentence2');
            sentence1.innerHTML=`<p><small><em>${sentenceE}</em></small></p>`;
            sentence2.innerHTML=`<p><small>${sentenceC}</small></p>`;
        })
    }
    }
var state3 = function(){
    if(tipblock.style.width==="350px"){
        return;
    }
    else{
        introduction.style.animation="introduction-state3 1s  forwards";
        for(var i =0;i<introp.length;i++){
        introp[i].style.fontSize="1px";
        }
        for(var j=0;j<introSpan.length;j++){
        introSpan[j].style.fontSize="3px";
        }
        dakablock.style.animation="dakablock-state3 1s  forwards";
        for(var i =0;i<dakaP.length;i++){
            dakaP[i].style.fontSize="1px";
            }
            for(var j=0;j<dakaSpan.length;j++){
            dakaSpan[j].style.fontSize="3px";
            }
        tipblock.style.animation="tipblock-state3 1s  forwards";
        setTimeout(function(){
            for(var i =0;i<tipLi.length;i++){
                tipLi[i].style.fontSize="20px";
                }
                for(var j=0;j<tipSpan.length;j++){
                tipSpan[j].style.fontSize="30px";
                }},450)
        state=3;
}
}
