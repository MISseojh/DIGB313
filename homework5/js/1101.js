function init() {
    var body = document.getElementsByTagName("body")[0];
    var canvas = document.createElement("canvas");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    var context = canvas.getContext("2d");

    //  Opacity makes a good appearance when objects are overlapped 
    context.globalAlpha=0.7;

    //  Repeat to draw a rectangle 100 times
    for(var i=0;i<100;i++){
        var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
        context.fillStyle = color;

        //Each rectangle is at (0 ~ width of window, 0 ~ height of window)
        //Each rectangle's size is (20 ~ 100, 20 ~ 100)     
        context.fillRect(Math.random()*window.innerWidth, Math.random()*window.innerHeight, Math.random()*80+20, Math.random()*80+20);
    }

    body.appendChild(canvas);
}
window.onload = init;