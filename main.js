let camera=document.getElementById("camera");
let emoji1="";
let emoji2="";
let emoji3="";
let emoji4="";
let emoji5="";

Webcam.set({
    width: 350,
    height: 350,
    image_format: "png",
    png_quality: 90,
});

Webcam.attach('#camera');

function take_pic(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version',ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/IED6sF3Oz/model.json",modelLoaded);

function modelLoaded(){
    console.log("model loaded")
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1="This emoji is "

};

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}

