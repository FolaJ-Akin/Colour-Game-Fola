import React from "react"
import ReactSpeechRecognition from "./component/ReactSpeechRecognition"
import CloudTextToSpeech from "./component/CloudTextToSpeech"
import TestPage from "./component/TestPage"
export default function App():JSX.Element{



  return (
    <div>
      <div className="Content">
        <ReactSpeechRecognition/>
      </div>
    </div>
  )
}
