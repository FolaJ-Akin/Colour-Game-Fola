import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export default function OpenProcessingSpeech(): JSX.Element {
  const colours = [
    "black",
    "blue",
    "grey",
    "green",
    "purple",
    "red",
    "silver",
    "yellow",
    "gold",
    "pink",
    "brown",
  ];
  const word = colours[Math.floor(Math.random() * colours.length)];
  const [currentColour, setNewColour] = useState(word);

  const {
    transcript,
    interimTranscript,
    // finalTranscript,
    // listening,
    // resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    console.error("Web Speech API not supported");
  }

  if (!isMicrophoneAvailable) {
    console.error("Web Speech API not supported");
  }

  SpeechRecognition.startListening({ language: "en", continuous: false });

  function getNewColour() {
    const newWord = colours[Math.floor(Math.random() * colours.length)];
    setNewColour(newWord);
  }

  return (
    <div>
      Transcipt: {transcript}
      Interim Transcipt: {interimTranscript}
      <h1>{currentColour}</h1>
      <button onClick={getNewColour}>Change Colour</button>
    </div>
  );
}
