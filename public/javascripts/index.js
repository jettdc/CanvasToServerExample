$(document).ready(function(){
    var canvas = document.getElementById("can");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = document.getElementById("ogimg").src;
    ctx.filter = 'blur(4px)';
    ctx.drawImage(img,0,0);
    var dataURL = canvas.toDataURL();
    $.ajax({
        type: "POST",
        url: "/data",
        data: { 
           imgBase64: dataURL
        }
      }).done(function(o) {
        console.log('saved'); 
        // If you want the file to be visible in the browser 
        // - please modify the callback in javascript. All you
        // need is to return the url to the file, you just saved 
        // and than put the image in your browser.
      });
});