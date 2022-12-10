import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export default function OpenProcessingSpeech(): JSX.Element {
  if (!window.speechSynthesis) {
    console.error("Web Speech API not supported");
  }

  const {
    transcript,
    interimTranscript,
    finalTranscript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();

  //init the speechRecognition engine
  // const recognition =  SpeechRecognition.getRecognition();

  // Start listening for speech
  SpeechRecognition.startListening();

  return (
    <>
      Transcipt: {transcript}
      Interim Transcipt: {interimTranscript}
    </>
  );
}
