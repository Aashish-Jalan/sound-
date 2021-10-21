function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/L4Ly3U09j/', modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}