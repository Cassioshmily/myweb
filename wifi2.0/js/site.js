window.onload=function(){
// 定义图片路径 {num} 为 可变的图片序号
var bgImgUrl = 'images/{num}.jpg', bgNum,
    bgImgArr = [],
    bgDiv = document.getElementById("bg");
// 组合数组 此处 1 为 图开始序号 结束 3
for (var i=1; i <= 3; i++){
    bgImgArr.push(bgImgUrl.replace('{num}', i));
}
setBGimg();
function setBGimg(d){
    if(!bgNum || bgNum >= bgImgArr.length) bgNum = 0;
    bgDiv.style.opacity = .001;
    setTimeout(function(){
        bgDiv.style.backgroundImage = 'url('+ bgImgArr[bgNum] +')';
        bgNum++;
        bgDiv.style.opacity = 1;
    }, 1000);
    if(typeof d == 'undefined')
    setInterval(function(){setBGimg(true);}, 4000);
    // 上一行的 6000 是背景图片自动切换时间(单位 毫秒)
}
}
