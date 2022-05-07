prediction_1="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camara=document.getElementById("camera");
Webcam.attach("#camera");
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'
    });
}
console.log(ml5.version,"ml5version");
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/WDH2C4UYG/model.json",modelLoaded);
function modelLoaded(){
    console.log("model loaded")
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data1="The first prediction is"+prediction_1;
    utterthis=new SpeechSynthesisUtterance(speak_data1);
    synth.speak(utterthis);
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}