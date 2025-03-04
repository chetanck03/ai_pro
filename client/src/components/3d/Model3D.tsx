import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Model3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const aiPhrases = [
    "🔍 Analyzing data patterns and user behavior",
    "🧠 Neural networks processing information",
    "⚙️ Optimizing algorithms for better results",
    "📊 Generating insights from your data",
    "🤖 Automating repetitive tasks",
    "🔮 Predicting future trends based on history",
    "💬 Natural language processing active",
  ];

  return (
    <div
      className="relative w-full h-full flex items-center justify-center py-8 cursor-pointer"
      ref={containerRef}
      onClick={handleClick}
    >
      {/* Central AI Core */}
      <motion.div
        className="absolute w-48 h-48 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full 
                  animate-pulse z-10 shadow-[0_0_50px_rgba(139,92,246,0.5)]"
        initial={{ scale: 1 }}
        animate={{
          scale: isClicked ? [1, 1.1, 1] : 1,
          rotate: isClicked ? [0, 5, -5, 0] : 0,
        }}
        transition={{ duration: 0.5 }}
      />

      {/* 3D AI Text */}
      <motion.div
        className="absolute z-20 pointer-events-none select-none"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -10, 0],
          rotateY: [0, 360],
        }}
      >
        <div className="relative">
          {/* AI Text with Stroke */}
          <div
            className="text-8xl font-extrabold tracking-wider"
            style={{
              WebkitTextStroke: "3px rgba(255, 255, 255, 0.9)",
              color: "transparent",
              textShadow:
                "0 0 15px rgba(139, 92, 246, 1), 0 0 30px rgba(16, 185, 229, 0.9), 0 0 50px rgba(255, 255, 255, 0.8)",
            }}
          >
            AI
          </div>

          {/* Gradient Overlay for 3D Effect */}
          <div className="absolute inset-0 text-8xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-400 animate-gradient-x opacity-95">
            AI
          </div>
        </div>
      </motion.div>

      {/* Neural Network Nodes */}
      <div
        className="absolute w-72 h-72 rounded-full border border-purple-500/30 animate-spin"
        style={{ animationDuration: "20s" }}
      ></div>
      <div
        className="absolute w-96 h-96 rounded-full border border-blue-500/20 animate-reverse-spin"
        style={{ animationDuration: "25s" }}
      ></div>
      <div
        className="absolute w-[450px] h-[450px] rounded-full border border-indigo-500/10 animate-spin"
        style={{ animationDuration: "30s" }}
      ></div>

      {/* Floating Network Nodes */}
      <div className="neural-network">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-blue-400 rounded-full animate-float"
            style={{
              top: `${25 + Math.random() * 50}%`,
              left: `${25 + Math.random() * 50}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Data Flow Particles */}
      <div className="data-particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-particle opacity-80"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${15 + Math.random() * 70}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* AI Phrase on Click */}
      {isClicked && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute z-20 font-mono text-sm md:text-base text-white bg-gradient-to-r from-purple-900/80 to-blue-900/80 px-5 py-3 rounded-lg backdrop-blur-md border border-white/10 shadow-lg"
        >
          {aiPhrases[Math.floor(Math.random() * aiPhrases.length)]}
        </motion.div>
      )}
    </div>
  );
}
