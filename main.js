var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();
function start() {
    document.getElementById("text_box").innerHTML="";
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("text_box").innerHTML=content;
}
