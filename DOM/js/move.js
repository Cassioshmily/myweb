//匀速变化
/*
  var timer = null;
  function start(iTarget){
    clearInterval(timer);
    var oDiv = document.getElementById('speed');
    timer = setInterval(function(){
      var speed = 0;
      if(oDiv.offsetLeft>iTarget){
        speed = -10;
      }
      else {
        speed = 10;
      }
    if (oDiv.offsetLeft==iTarget) {
      clearInterval(timer);
    }
    else {
      oDiv.style.left = oDiv.offsetLeft+speed+'px';
    }
    },30)
  }
*/
//缓冲变化
/*
var timer = null;
function start(iTarget){
  clearInterval(timer);
  var oDiv = document.getElementById('speed');
  timer = setInterval(function(){
  var speed = (iTarget-oDiv.offsetLeft)/10;
  speed = speed>0?Math.ceil(speed):Math.floor(speed);
  if (oDiv.offsetLeft==iTarget) {
    clearInterval(timer);
  }
  else {
    oDiv.style.left = oDiv.offsetLeft+speed+'px';
  }
  },30)
}
*/
function startMove(obj,json,fn){
  clearInterval(obj.timer);
  obj.timer = setInterval(function(){
    var flag = true;//假设到达目标值
    for(var attr in json){
    var icur = 0;
    if(attr == 'opacity'){
      icur = parseFloat(getStyle(obj,attr))*100;
    }
    else {
      icur = parseInt(getStyle(obj,attr));
    }
    var speed = (json[attr]-icur)/8;

    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

    if(icur != json[attr]){
      flag = false;
    }
    if (attr == 'opacity') {
      obj.style.filter = 'alpha(opacity:'+icur+speed+')';
      obj.style.opacity = (icur + speed)/100;
    }
    else {
      obj.style[attr] = icur + speed + 'px';
      }
    }
    if (flag) {
      clearInterval(obj.timer);
      if (fn) {
        fn(obj);
      }
    }
  },30)
}

function getStyle(obj,attr){
  if (obj.currentStyle) {
    return obj.currentStyle[attr];
  }
  else {
    return getComputedStyle(obj,false)[attr];
  }
}
