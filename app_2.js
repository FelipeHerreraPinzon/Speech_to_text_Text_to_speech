 // Speech to Text
 const startRecordBtn = document.getElementById('start-record-btn');
 const recordedText = document.getElementById('recorded-text');
 const textToSpeak = document.getElementById('text-to-speak');

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
     console.log('Transcript:', transcript);
     recordedText.textContent = transcript;
     textToSpeak.value = transcript;  // Copiar el texto al campo de texto
 };

 recognition.onerror = function(event) {
     console.error('Speech recognition error detected:', event.error);
 };

 startRecordBtn.addEventListener('click', () => {
     recognition.start();
     console.log('Recording started');
 });

 // Text to Speech
 const speakBtn = document.getElementById('speak-btn');

 speakBtn.addEventListener('click', () => {
     const text = textToSpeak.value;
     const speech = new SpeechSynthesisUtterance(text);
     window.speechSynthesis.speak(speech);
 });