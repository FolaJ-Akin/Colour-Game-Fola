import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export default function ReactSpeechRecognition(): JSX.Element {
  // const {
  //     transcript,
  //     interimTranscript,
  //     finalTranscript,
  //     resetTranscript,
  //     listening,
  //     browserSupportsSpeechRecognition
  // } = useSpeechRecognition();

  // if (!browserSupportsSpeechRecognition) {
  //     return <span>Browser doesn't support speech recognition.</span>;
  // }
  // const handleOnClick = () =>{
  //     SpeechRecognition.startListening
  // }
  // console.log("transcript:",transcript)

  return (
    <div>
      <h1>First Page</h1>
      {/* <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={handleOnClick}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p> */}
    </div>
  );
}
