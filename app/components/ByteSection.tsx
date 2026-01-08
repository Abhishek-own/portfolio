"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Send, Bot, Loader2 } from "lucide-react";
import { io, Socket } from "socket.io-client";

export default function ByteSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState<
    Array<{ role: "user" | "byte"; text: string; wasRoasted?: boolean }>
  >([
    {
      role: "byte",
      text: "Hey there! I'm Byte, Abhishek's AI assistant. Ask me anything about the master's projects, skills, or experience. But stay on topic, or face my sarcasm! 😏",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [sessionId] = useState(
    () => `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  );
  const [roastCount, setRoastCount] = useState(0);

  // Auto-scroll to bottom when conversation updates
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [conversation, isLoading]);

  // Connect to Byte WebSocket
  useEffect(() => {
    const newSocket = io("https://byte-backend-b05x.onrender.com");

    newSocket.on("connect", () => {
      console.log("🤖 Connected to Byte!");
    });

    newSocket.on(
      "byteResponse",
      (data: { answer: string; wasRoasted: boolean; roastCount: number }) => {
        console.log("📨 Byte responded:", data);
        setConversation((prev) => [
          ...prev,
          {
            role: "byte",
            text: data.answer,
            wasRoasted: data.wasRoasted,
          },
        ]);
        setRoastCount(data.roastCount);
        setIsLoading(false);
      }
    );

    newSocket.on("disconnect", () => {
      console.log("👋 Disconnected from Byte");
    });

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !socket || isLoading) return;

    const userMessage = message.trim();
    setConversation((prev) => [...prev, { role: "user", text: userMessage }]);
    setMessage("");
    setIsLoading(true);

    // Send message to Byte via WebSocket
    socket.emit("askByte", {
      question: userMessage,
      sessionId: sessionId,
    });
  };

  return (
    <section id="byte" className="min-h-screen py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="glass p-12 rounded-[3rem] border-4 border-purple-500 relative overflow-hidden max-w-4xl mx-auto"
        >
          {/* Animated Glow Effect */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
          />

          <div className="relative z-10 text-center">
            {/* Robot Icon */}
            <motion.div
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-8xl mb-6 inline-block"
            >
              🤖
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gradient">
              Meet Byte - My AI Assistant
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Byte is my custom AI assistant with one mission: Answer questions
              about me and roast anyone who asks off-topic questions. It's
              blessed with serving the greatest developer. Go ahead, ask Byte
              anything about my work! (Or get roasted trying 😈)
            </p>

            {/* Roast Counter */}
            {roastCount > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="mb-4 inline-block bg-red-500/20 border border-red-500 rounded-full px-4 py-2"
              >
                <span className="text-red-400 font-bold">
                  🔥 Roasted {roastCount} time{roastCount > 1 ? "s" : ""}!
                </span>
              </motion.div>
            )}

            {/* Chat Interface */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 mb-8 max-w-2xl mx-auto"
            >
              {/* Conversation History */}
              <div
                ref={chatContainerRef}
                className="max-h-96 overflow-y-auto mb-4 space-y-4 scroll-smooth scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-800/50 hover:scrollbar-thumb-purple-400"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#545067 rgba(31, 41, 55, 0.5)",
                }}
              >
                {conversation.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-4 ${
                      msg.role === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    {msg.role === "byte" && (
                      <Bot
                        className="text-purple-400 flex-shrink-0"
                        size={32}
                      />
                    )}
                    <div
                      className={`${
                        msg.role === "user"
                          ? "bg-purple-600"
                          : msg.wasRoasted
                          ? "bg-red-900/50 border-2 border-red-500"
                          : "bg-gray-800"
                      } rounded-2xl p-4 flex-1 text-left`}
                    >
                      <p className="text-gray-300">{msg.text}</p>
                      {msg.wasRoasted && (
                        <span className="text-xs text-red-400 mt-2 block">
                          🔥 You got roasted!
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="flex items-start gap-4">
                    <Bot className="text-purple-400 flex-shrink-0" size={32} />
                    <div className="bg-gray-800 rounded-2xl p-4 flex-1">
                      <Loader2
                        className="animate-spin text-purple-400"
                        size={24}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Input Form */}
              <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask Byte about Abhishek..."
                  disabled={isLoading || !socket}
                  suppressHydrationWarning
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50"
                />

                <motion.button
                  type="submit"
                  disabled={isLoading || !message.trim() || !socket}
                  suppressHydrationWarning
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <Send size={20} />
                  )}
                  Send
                </motion.button>
              </form>

              {/* Connection Status */}
              {!socket && (
                <p className="text-red-400 text-sm mt-2">
                  ⚠️ Connecting to Byte...
                </p>
              )}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="text-sm text-gray-500"
            >
              💡 Pro tip: Byte has access to all my project details, tech stack,
              and achievements!
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
