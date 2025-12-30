import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Languages, Send } from "lucide-react";

// Modern Neon-Glass Copilot Prototype
export default function CopilotNeonUI() {
  const [language, setLanguage] = useState("English");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "👋 Welcome! Ask anything about startup funding, investors or schemes in India.",
    },
  ]);
  const [input, setInput] = useState("");

  const examplePrompts = {
    English: "Which investors fund AI startups in India?",
    Hindi: "भारत में AI स्टार्टअप को कौन से निवेशक फंड करते हैं?",
    Telugu: "భారతదేశంలో AI స్టార్టప్స్‌కు నిధులు ఎవరు ఇస్తారు?",
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", text: input }, { role: "assistant", text: "✨ This is a demo prototype UI. Answers are mocked here." }]);
    setInput("");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#050816] via-[#0a0f2e] to-black text-white overflow-x-hidden relative">
      {/* Soft glowing background blobs */}
      <div className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full bg-purple-600/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-blue-600/20 blur-[120px]" />

      {/* Floating 3D Orb */}
      <motion.div
        className="absolute top-28 right-20 h-28 w-28 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 shadow-[0_0_120px_20px_rgba(109,40,217,0.25)]"
        animate={{ y: [0, -14, 0], rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-5 py-10">
        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-blue-300 to-cyan-300 drop-shadow-xl">
            Multilingual Startup Funding Intelligence Copilot
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Ask startup funding questions in Indic languages and get
            <span className="text-cyan-300"> verified</span>,
            <span className="text-fuchsia-300"> explainable</span> insights
          </p>
        </motion.div>

        {/* LANGUAGE SELECTOR */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <Languages className="text-cyan-300" />
          <span className="text-sm text-gray-300">Choose language</span>
        </div>

        <div className="flex justify-center gap-3 mt-3">
          {["English", "Hindi", "Telugu"].map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-4 py-2 rounded-full text-sm backdrop-blur-xl border transition-all duration-300 shadow-lg ${
                language === lang
                  ? "bg-white/20 border-white/40 text-white"
                  : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* MAIN GLASS CHAT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-10 mx-auto max-w-4xl rounded-3xl p-6 md:p-8 backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl"
        >
          <div className="h-[380px] overflow-y-auto pr-2 custom-scrollbar space-y-4">
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                  m.role === "user"
                    ? "ml-auto bg-gradient-to-r from-cyan-600/50 to-blue-700/40"
                    : "bg-white/10 backdrop-blur-xl"
                }`}
              >
                {m.text}
              </motion.div>
            ))}
          </div>

          {/* INPUT BAR */}
          <div className="mt-5 flex gap-3">
            <input
              className="flex-1 bg-white/10 border border-white/10 rounded-2xl px-4 py-3 outline-none text-white placeholder-gray-400 backdrop-blur-xl focus:ring-2 focus:ring-cyan-400/40"
              placeholder={examplePrompts[language]}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34,211,238,0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSend}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold flex items-center gap-2 shadow-lg"
            >
              <Send className="h-4" /> Ask AI
            </motion.button>
          </div>

          {/* FOOTNOTE */}
          <p className="text-xs text-gray-400 mt-4 text-center">
            🔒 Prototype only — No backend connected. Visual demo UI.
          </p>
        </motion.div>

        {/* SYSTEM NOTE */}
        <div className="text-center text-sm mt-6 text-gray-400">
          Powered by a Multilingual RAG-based AI over verified funding datasets
        </div>
      </div>
    </div>
  );
}
