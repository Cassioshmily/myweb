images = [
    "tu1.jpg"
 ]


$.backstretch(images, {duration: 4000, fade: 800});

setTimeout(function(){
    $("body").data("backstretch").options['fade'] = 2000;
}, 2000);