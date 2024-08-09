// Speech to Text
const startRecordBtn = document.getElementById('start-record-btn');
const recordedText = document.getElementById('recorded-text');

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

recognition.onstart = function() {
    console.log('Voice recognition started. Speak into the microphone.');
};

recognition.onspeechend = function() {
    console.log('Voice recognition stopped.');
    recognition.stop();
};

recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    recordedText.textContent = transcript;
};

startRecordBtn.addEventListener('click', () => {
    recognition.start();
});

// Text to Speech
const speakBtn = document.getElementById('speak-btn');
const textToSpeak = document.getElementById('text-to-speak');

speakBtn.addEventListener('click', () => {
    const text = textToSpeak.value;
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
});
