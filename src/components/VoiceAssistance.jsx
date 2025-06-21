
import React, { useEffect, useRef, useState } from "react";
import Vapi from "@vapi-ai/web";
// import Loading from './home/Loading'

export default function VoiceAssistant() {
  const vapiRef = useRef(null);
  const [isConnected, setIsConnected] = useState(false);
  const [loading,setLoading]=useState(false);

  const [transcript, setTranscript] = useState([]);

  useEffect(() => {
    const vapi = new Vapi("c6fc00c4-20eb-4df0-ad40-d08d72fc44b1");
    vapiRef.current = vapi;

    vapi.on("call-start", () => setIsConnected(true));
    vapi.on("call-end", () => setIsConnected(false));
    vapi.on("message", (msg) => {
        // console.log("Message received:", msg.transcript);
        // setLoading(false);
      if (msg.type === "transcript") {
        
        setTranscript((t) => [...t, { role: msg.role, text: msg.transcript }]);
      }
    });
    vapi.on("error", ()=>{console.error(),setLoading(false);});

    return () => vapi.stop();
  }, []);

  const startCall = async() => {
    setLoading(true);
    await vapiRef.current?.start("fb148ea4-2178-48e0-a7eb-6bbc55e6c14a");
    setLoading(false);
  };
  const endCall = () => vapiRef.current?.stop();

  return (
    <div>
        <style>
            {
                `
                .btn {
                    padding: 10px 20px;
                    border: none;
                    color: white;
                    font-size: 16px;
                    cursor: pointer;
                    border-radius: 5px;
                    transition: background-color 0.3s ease;
                }
                
                .clr {
                    background-color: #197dff;
                }
                `
            }
        </style>

      {!isConnected ? (
        <button className="btn clr" onClick={startCall}>&#9743; Book a Free Consultation</button>
      ) : (
        <button className="btn" onClick={endCall} style={{ backgroundColor: 'red' }}>End Call</button>
      )}
      {/* <div>
        {transcript.map((m, i) => (
          <div key={i}><b>{m.role}:</b> {m.text}</div>
        ))}
      </div> */}
      {/* {loading && <Loading />} */}
    </div>
  );
}
