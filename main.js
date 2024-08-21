Webcam.set({
    width: 390,
    height: 320,
    image_format: 'jpeg',
    jpeg_quality: 90,
});
camera=document.getElementById("camera")

Webcam.attach("#camera")
function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("resultado").innerHTML='<img id="imgCapturada" src="'+data_uri+'"/>'
    })
}

console.log("versao ml5", ml5.version)

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/e5il7_lZC/model.json", modelLoaded)
function modelLoaded(){
    console.log("modelo carregaddo")
}
function check(){
    img=document.getElementById("imgCapturada");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("nameResult").innerHTML="objeto identificado: "+results[0].label
        document.getElementById("porcentagem").innerHTML=results[0].confidence.toFixed(2)
    }
}