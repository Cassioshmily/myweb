var str = document.getElementById('str').innerHTML;
var rh = /[^\s]+(?=RH)/g;
var c = /[^\s]+(?=.C)/g;
var date = /[^\(]+(?=\))/g;
document.getElementById('butt1').style.border = "4px solid";//默认按钮
document.getElementById('logo').innerHTML = "wifi1";//默认标题
move(0);
function click1(){
  clear();
  document.getElementById('butt1').style.border = "4px solid";
  move(0);
  document.getElementById('logo').innerHTML = "wifi1";//按钮1的标题
}
function click2(){
  clear();
  document.getElementById('butt2').style.border = "4px solid";
  move(1);
  document.getElementById('logo').innerHTML = "wifi2";//按钮2的标题
}
function click3(){
  clear();
  document.getElementById('butt3').style.border = "4px solid";
  move(2);
  document.getElementById('logo').innerHTML = "wifi3";//按钮3的标题
}
function click4(){
  clear();
  document.getElementById('butt4').style.border = "4px solid";
  move(3);
  document.getElementById('logo').innerHTML = "wifi4";//按钮4的标题
}
function clear(){
  document.getElementById('butt1').style.border = "2px solid";
  document.getElementById('butt2').style.border = "2px solid";
  document.getElementById('butt3').style.border = "2px solid";
  document.getElementById('butt4').style.border = "2px solid";
}
function move(iTarget){
  document.getElementById('rh').innerHTML=str.match(rh)[iTarget];
  document.getElementById('c').innerHTML=str.match(c)[iTarget];
  document.getElementById('date').innerHTML=str.match(date)[iTarget];
}
