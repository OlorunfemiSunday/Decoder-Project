// DOM Elements
const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const encodeBtn = document.getElementById("encode-btn");
const decodeBtn = document.getElementById("decode-btn");

// Encode message (Base64)
function encodeMessage() {
  const message = inputText.value;
  if (message) {
    const encoded = btoa(message); // Base64 encoding
    outputText.value = encoded;
  } else {
    outputText.value = "Please enter a message to encode.";
  }
}

// Decode message (Base64)
function decodeMessage() {
  const encodedMessage = inputText.value;
  try {
    const decoded = atob(encodedMessage); // Base64 decoding
    outputText.value = decoded;
  } catch (e) {
    outputText.value = "Invalid encoded message. Please try again.";
  }
}

// Event Listeners
encodeBtn.addEventListener("click", encodeMessage);
decodeBtn.addEventListener("click", decodeMessage);
