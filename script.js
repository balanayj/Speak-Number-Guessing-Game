const msgEl = document.getElementById("msg");

// Generate random number
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const randomNum = getRandomNumber();
console.log("Number:", randomNum);

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

// Start recognition and game
recognition.start();

// Capture user speech
function onSpeak(event) {
  const msg = event.result[0][0].transcript; // You can log the event to view the structure of the data
  console.log(msg);
}

// Listen to and handle the speech event
recognition.addEventListener("result", onSpeak);
