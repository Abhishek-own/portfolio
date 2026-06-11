"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Bot, User, Send, ArrowRight, AlertTriangle } from "lucide-react";
import { io, Socket } from "socket.io-client";

export default function ByteSection() {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState<
    Array<{ role: "user" | "byte"; text: string; wasRoasted?: boolean }>
  >([
    {
      role: "byte",
      text: "Initializing creative logic... Abhishek's neural core is ready. How can I assist today?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [sessionId] = useState(
    () => `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  );

  // Auto-scroll to bottom when conversation updates
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
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

  const handleSendMessage = () => {
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
      handleSendMessage();
    }
  };

  return (
    <section id="byte" className="py-16 relative overflow-hidden bg-surface-container-lowest">
      {/* Floating Orbs */}
      <div className="floating-orb absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-primary/5 rounded-full" />
      <div className="floating-orb absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-cyber-cyan/5 rounded-full" style={{ animationDelay: "-5s" }} />

      <div className="max-w-container-max mx-auto px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Info & Action */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-primary"></span>
              <span className="font-label-caps text-xs tracking-widest text-primary font-bold">INTELLIGENT SYSTEMS</span>
            </div>
            <h2 className="font-display-lg text-3xl md:text-5xl text-starlight-white mb-8 leading-tight">
              Meet Byte AI.<br />Built From My Digital DNA.
            </h2>
            <p className="text-on-surface-variant font-body-md text-sm md:text-base mb-6 max-w-md opacity-80 leading-relaxed">
              Byte is my companion. Trained on my projects, experience, and technical expertise. Built to help you explore my work.
            </p>
            <div className="mb-10 pl-4 border-l border-amber-500/40 flex gap-3 items-start">
              <AlertTriangle size={14} className="text-amber-500/75 mt-0.5 flex-shrink-0 animate-pulse" />
              <p className="text-[11px] md:text-xs text-on-surface-variant/60 italic leading-relaxed">
                Something broke during training.<br />
                Byte now has opinions and sarcasm.<br />
                I swear that wasn't intentional.
              </p>
            </div>
            <button 
              onClick={() => {
                const inputEl = document.querySelector("#byte-chat-input") as HTMLInputElement;
                if (inputEl) inputEl.focus();
              }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <span className="w-12 h-12 rounded-full border border-glass-edge flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <ArrowRight size={16} className="text-starlight-white group-hover:text-background" />
              </span>
              <span className="font-label-caps text-xs tracking-widest text-starlight-white font-bold group-hover:text-primary transition-colors">
                START A CONVERSATION
              </span>
            </button>
          </div>

          {/* Right Column: Chat Simulator */}
          <div className="glass-card p-1 rounded-3xl relative">
            <div className="bg-deep-space/80 backdrop-blur-3xl p-6 md:p-8 rounded-[calc(1.5rem-4px)] min-h-[420px] flex flex-col justify-between">
              
              {/* Chat Messages Bounded Container */}
              <div 
                ref={chatContainerRef}
                className="space-y-6 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-glass-edge scrollbar-track-transparent"
                style={{ scrollbarWidth: "thin" }}
              >
                {conversation.map((msg, idx) => (
                  <div 
                    key={idx} 
                    className={`flex gap-4 items-start ${
                      msg.role === "user" ? "justify-end" : ""
                    }`}
                  >
                    {/* Bot Avatar */}
                    {msg.role === "byte" && (
                      <div className="w-8 h-8 rounded-lg bg-cyber-cyan/20 border border-cyber-cyan/30 flex items-center justify-center flex-shrink-0">
                        <Bot size={14} className="text-cyber-cyan" />
                      </div>
                    )}

                    {/* Chat Bubble */}
                    <div 
                      className={`px-5 py-3 rounded-2xl border ${
                        msg.role === "byte" 
                          ? "glass-card rounded-tl-none border-cyber-cyan/10 text-on-surface" 
                          : "bg-surface-container-highest rounded-tr-none border-glass-edge text-on-surface-variant max-w-[80%]"
                      }`}
                    >
                      <p className="text-xs md:text-sm whitespace-pre-line leading-relaxed">
                        {msg.text}
                      </p>
                    </div>

                    {/* User Avatar */}
                    {msg.role === "user" && (
                      <div className="w-8 h-8 rounded-lg bg-surface-bright flex items-center justify-center flex-shrink-0 border border-glass-edge">
                        <User size={14} className="text-starlight-white" />
                      </div>
                    )}
                  </div>
                ))}

                {/* Thinking/Loading Indicator */}
                {isLoading && (
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-cyber-cyan/20 border border-cyber-cyan/30 flex items-center justify-center flex-shrink-0">
                      <Bot size={14} className="text-cyber-cyan" />
                    </div>
                    <div className="glass-card px-5 py-3 rounded-2xl rounded-tl-none border-cyber-cyan/20">
                      <div className="flex gap-1 mb-2">
                        <div className="w-1.5 h-1.5 bg-cyber-cyan rounded-full animate-bounce" />
                        <div className="w-1.5 h-1.5 bg-cyber-cyan rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                        <div className="w-1.5 h-1.5 bg-cyber-cyan rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                      </div>
                      <p className="text-[10px] text-on-surface-variant italic">Analyzing codebase...</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input Block */}
              <div className="mt-8 flex gap-3 p-2 bg-surface-container-low rounded-xl border border-glass-edge">
                <input
                  id="byte-chat-input"
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a command..."
                  disabled={isLoading || !socket}
                  className="bg-transparent border-none focus:outline-none focus:ring-0 text-xs md:text-sm flex-1 text-on-surface placeholder:text-outline/40 px-2 min-w-0"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !message.trim() || !socket}
                  className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group hover:bg-cyber-cyan transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                >
                  <Send size={12} className="text-background group-hover:text-background" />
                </button>
              </div>

              {/* Status Alert if Disconnected */}
              {!socket && (
                <span className="text-[10px] text-red-400 mt-2 text-center block">
                  Connecting to AI Core...
                </span>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}