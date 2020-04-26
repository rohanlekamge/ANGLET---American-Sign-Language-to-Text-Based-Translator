<!DOCTYPE html>
<html>

    <meta charset="utf-8">
    <title>ANGLET</title>
    <style>
        video {
        width:500px;
        height:500px;
        border:1px solid blue;
        
        }
        </style>
        
        <video autoplay='true' id='videoElement'>
        </video>

<body bgcolor = "skyblue">
    <div id = "container">
        <video autoplay = "true" id = "VideoElement">

        </video>
    </div>
    <script>
        var video=document.querySelector("#videoElement");
        navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.oGetUserMedia;
        if(navigator.getUserMedia){
        navigator.getUserMedia({video:true},handleVideo,videoError);
        }
        function handleVideo(stream){
        video.srcObject = stream;
        }
        function videoError(e){ 
        }
    </script>
        
</body>
</html>