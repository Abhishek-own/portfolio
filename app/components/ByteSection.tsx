"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Send, Bot, User } from "lucide-react";
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
      text: "Hey, I'm Byte 🙋🏻‍♂️\nI can tell you about Abhishek's skills, projects, and experience.\nYou're free to ask about other things too, but I'm free to ignore them 😊",
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
    const newSocket = io("https://byte-backend-b05x.onrender.com/");

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

  const handleSendClick = () => {
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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendClick();
    }
  };

  return (
    <section
      id="byte"
      className="min-h-screen py-12 md:py-20 relative"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="glass p-4 md:p-12 rounded-2xl md:rounded-[3rem] border-2 md:border-4 border-purple-500 relative overflow-hidden max-w-4xl mx-auto"
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
              className="text-5xl md:text-8xl mb-4 md:mb-6 inline-block"
            >
              🤖
            </motion.div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 text-gradient px-2">
              Meet Byte - My AI Assistant
            </h2>

            <div className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto px-2 space-y-4">
              <p>
                Built to help you explore my work and skills, <strong>Byte</strong> is <span className="text-purple-400">fast</span>, <span className="text-pink-400">knowledgeable</span>, and has a bit of <span className="text-yellow-400">attitude</span>.
              </p>
              <p>
                It provides quick insights, showcases my projects, and highlights my expertise in full-stack development, automation, and design.
              </p>
            </div>

            {/* Chat Interface */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="bg-gray-900/50 backdrop-blur-xl rounded-xl md:rounded-2xl p-3 md:p-6 mb-6 md:mb-8 max-w-2xl mx-auto relative overflow-hidden"
            >
              {/* Floating Particles Background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {[...Array(20)].map((_, i) => {
                  // Use index-based positioning to avoid hydration errors
                  const startX = (i * 17 + 13) % 100;
                  const startY = (i * 23 + 7) % 100;
                  const endY = (startY - 50) % 100;
                  const endX = (startX + (i % 3) * 15) % 100;
                  const duration = 12 + (i % 5) * 2;
                  const delay = (i % 7) * 0.5;
                  
                  return (
                    <motion.div
                      key={i}
                      className="absolute text-purple-400/40 font-mono text-sm md:text-base font-bold"
                      style={{
                        left: `${startX}%`,
                        top: `${startY}%`,
                        textShadow: '0 0 10px rgba(168, 85, 247, 0.5)',
                      }}
                      animate={{
                        y: [`0%`, `${endY - startY}%`],
                        x: [`0%`, `${endX - startX}%`],
                        opacity: [0.2, 0.6, 0.2],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: delay,
                      }}
                    >
                      {["</>", "{}", "[]", "()", "01", "AI", "λ", "∞", ">>", "<<", "//", "**", "++", "--", "==", "!=", "||", "&&", "fn", "=>"][i % 20]}
                    </motion.div>
                  );
                })}
              </div>

              {/* Conversation History */}
              <div
                ref={chatContainerRef}
                className="max-h-64 md:max-h-96 overflow-y-auto mb-4 space-y-3 md:space-y-4 scroll-smooth scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-800/50 hover:scrollbar-thumb-purple-400 relative z-10"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#545067 rgba(31, 41, 55, 0.5)",
                }}
              >
                {conversation.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ 
                      opacity: 0, 
                      x: msg.role === "user" ? 50 : -50, 
                      scale: 0.8 
                    }}
                    animate={{ 
                      opacity: 1, 
                      x: 0, 
                      scale: 1 
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}
                    className={`flex items-start gap-2 md:gap-4 ${
                      msg.role === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    {/* Avatar */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                      className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${
                        msg.role === "byte"
                          ? "bg-gradient-to-br from-purple-500 to-pink-500"
                          : "bg-gradient-to-br from-blue-500 to-cyan-500"
                      }`}
                    >
                      {msg.role === "byte" ? (
                        <Bot className="text-white" size={20} />
                      ) : (
                        <User className="text-white" size={20} />
                      )}
                    </motion.div>

                    <div
                      className={`${
                        msg.role === "user" ? "bg-purple-600 max-w-[80%]" : "bg-gray-800"
                      } rounded-xl md:rounded-2xl p-3 md:p-4 ${msg.role === "user" ? "" : "flex-1"} text-left`}
                    >
                      <p className="text-sm md:text-base text-gray-300 whitespace-pre-line">
                        {msg.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
                
                {/* Enhanced Loading State */}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-start gap-2 md:gap-4"
                  >
                    {/* Animated Avatar */}
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 1.5,
                        ease: "easeInOut"
                      }}
                      className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
                    >
                      <Bot className="text-white" size={20} />
                    </motion.div>

                    <div className="bg-gray-800 rounded-xl md:rounded-2xl p-3 md:p-4 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">Byte is thinking</span>
                        <div className="flex gap-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 1, 0.3],
                              }}
                              transition={{
                                repeat: Infinity,
                                duration: 1,
                                delay: i * 0.2,
                              }}
                              className="w-2 h-2 bg-purple-400 rounded-full"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input Form */}
              <div className="flex gap-2 relative z-10">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask Byte..."
                  disabled={isLoading || !socket}
                  suppressHydrationWarning
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg md:rounded-xl px-3 md:px-6 py-2.5 md:py-4 text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50 min-w-0"
                />

                <motion.button
                  onClick={handleSendClick}
                  disabled={isLoading || !message.trim() || !socket}
                  suppressHydrationWarning
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 px-3 md:px-8 py-2.5 md:py-4 rounded-lg md:rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base flex-shrink-0"
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                      <Send size={18} />
                    </motion.div>
                  ) : (
                    <Send size={18} />
                  )}
                  <span className="hidden sm:inline">Send</span>
                </motion.button>
              </div>

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
              className="text-xs md:text-sm text-gray-500 px-4"
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