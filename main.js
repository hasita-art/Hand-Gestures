let camera=document.getElementById("camera");
let gesture_name="";
let emoji="";

Webcam.set({
    width: 350,
    height: 350,
    image_format: "png",
    png_quality: 90,
});

webcam.attach('#camera');

function take_pic(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="";
    });
}