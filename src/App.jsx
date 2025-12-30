import { useState } from "react";

export default function App() {

  const [language, setLanguage] = useState("English");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const exampleQuestions = {
    English: "Which investors fund AI startups in India?",
    Hindi: "भारत में AI स्टार्टअप को कौन से निवेशक फंड करते हैं?",
    Telugu: "భారతదేశంలో AI స్టార్టప్పులను ఎవరు ఫండ్ చేస్తారు?"
  };

  function sendMessage() {
    if (!input.trim()) return;

    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      setMessages(m => [
        ...m,
        {
          from: "ai",
          text:
            "Here are key funding insights for Indian startups.\n" +
            "• Peak XV, Accel, Blume, Chiratae, Kalaari often fund AI startups\n" +
            "• Government schemes include Startup India Seed Fund Scheme\n" +
            "• Angel networks include Indian Angel Network and LetsVenture"
        }
      ])
    }, 1200);
  }

  return (
    <>
      <div className="bg-orb" />

      <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>

        <h1 style={{ fontSize: 38, fontWeight: 800, marginTop: 30 }}>
          Multilingual Startup Funding Intelligence Copilot
        </h1>

        <p style={{ opacity: 0.8, marginTop: 6 }}>
          Ask startup funding questions in Indic languages and get verified, explainable insights
        </p>

        <div style={{ marginTop: 20 }} className="glass-box">

          <b>Choose language</b>

          <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
            {["English", "Hindi", "Telugu"].map(l => (
              <button
                key={l}
                className="btn-glow"
                onClick={() => setLanguage(l)}
                style={{
                  opacity: language === l ? 1 : 0.6
                }}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 20 }} className="glass-box">

          <div style={{ minHeight: 220 }}>
            {messages.map((m, i) => (
              <div key={i} className={m.from === "user" ? "user-msg" : "ai-msg"}>
                {m.text}
              </div>
            ))}

            {typing && (
              <div className="ai-msg typing">
                <span>.</span><span>.</span><span>.</span>
              </div>
            )}
          </div>

          <input
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 14,
              border: "none",
              marginTop: 8
            }}
            value={input}
            placeholder={exampleQuestions[language]}
            onChange={e => setInput(e.target.value)}
          />

          <button
            className="btn-glow"
            style={{ marginTop: 10 }}
            onClick={sendMessage}
          >
            Ask AI
          </button>
        </div>

        <div style={{ marginTop: 14, fontSize: 13, opacity: 0.7 }}>
          Prototype only — UI demo, no backend connected.
        </div>

        <div style={{ marginTop: 4, fontSize: 13, opacity: 0.7 }}>
          Powered by a Multilingual RAG-based AI over verified funding datasets
        </div>

      </div>
    </>
  );
}
