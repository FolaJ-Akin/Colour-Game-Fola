
export default function TestPage():JSX.Element {
    // const SpeechRecognition = window.SpeechRecognitionAlternative ;
    // // const SpeechGrammarList = window.webkit || webkitSpeechGrammarList;
    // const SpeechRecognitionEvent = window.spee || webkitSpeechRecognitionEvent;

    // if(!("webkitSpeechRecognition" in window)){
    //     upgrade()
    // }

    // interface options {
    //     autoplay:boolean,
    //     audio:boolean
    // }
    
    // let el: Node;

    //     function attachStream(stream: MediaStream, el: any, options:options) {
    //         // var item;
    //         const URL = window.URL;
    //         let element = el;
    //         const opts = {
    //             autoplay: true,
    //             mirror: false,
    //             muted: false,
    //             audio: false,
    //             disableContextMenu: false
    //         };

    //         if (options) {
    //             for (const item in options) {
    //                 opts[item as keyof typeof opts] = options[item as keyof typeof options];
    //             }
    //         }

    //         if (!element) {
    //             element = document.createElement(opts.audio ? 'audio' : 'video');
    //         } else if (element.tagName.toLowerCase() === 'audio') {
    //             opts.audio = true;
    //         }

    //         if (opts.autoplay) element.autoplay = 'autoplay';
    //         if (opts.muted) element.muted = true;
    //         if (!opts.audio && opts.mirror) {
    //             ['', 'moz', 'webkit', 'o', 'ms'].forEach(function(prefix) {
    //                 const styleName = prefix ? prefix + 'Transform' : 'transform';
    //                 element.style[styleName] = 'scaleX(-1)';
    //             });
    //         }

    //         element.srcObject = stream;
    //         return element;
    //     }



    // function getLocalStream():void {
    //     navigator.mediaDevices.getUserMedia({video: false, audio: true})
    //     .then(
    //         stream => {
    //             const doesnotexist = !el;
    //             el = attachStream(stream, el, {
    //                 audio: true,
    //                 autoplay: true
    //             });
    //             if (doesnotexist) document.body.appendChild(el);
    //     })
    //     .catch( err => {
    //         console.log("u got an error:" + err)
    //     });
    // }
    
    async function startMicrophone() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({audio:true, video:false})
            console.log("got mediastream",stream)
            const audioElement = document.querySelector("audio")
            if(audioElement !== null)
            audioElement.srcObject = stream
        } catch (error) {
            console.log(error);
        }
    }
    startMicrophone()
  return (
    <div>
        <h1>Test Page</h1>
    </div>
  )
}
