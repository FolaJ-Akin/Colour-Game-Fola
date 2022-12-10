import React, { useEffect, useState } from "react";
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
    "yellow",
    "gold",
    "pink",
    "brown",
  ];
  const word = colours[Math.floor(Math.random() * colours.length)];
  const [currentColour, setNewColour] = useState(word);
  const [count, setCount] = useState(0);

  const {
    transcript,
    // interimTranscript,
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
  function getColourFill(current: string) {
    const index = colours.indexOf(current);
    const copy = colours;
    copy.splice(index, 1);
    const colourFill = copy[Math.floor(Math.random() * colours.length)];
    return colourFill;
  }

  const chosenColourStyle = {
    color: getColourFill(currentColour),
    fontSize: 250,
  };
  useEffect(() => {
    function checkAttempt(spokenString: string) {
      console.log({ spokenString });
      if (spokenString.toLowerCase() === chosenColourStyle.color) {
        setCount(count + 1);
      }
    }
    checkAttempt(transcript);
  }, [transcript]);

  return (
    <div>
      Transcipt: {transcript} Count:{count}
      <h1 style={chosenColourStyle}>{currentColour}</h1>
      <button onClick={getNewColour}>Change Colour</button>
    </div>
  );
}
