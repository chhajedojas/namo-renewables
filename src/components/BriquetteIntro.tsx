"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function BriquetteIntro() {
  const [showIntro, setShowIntro] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem('introPlayed') === 'true') {
      setShowIntro(false);
    }
  }, []);

  // Lock scrolling while intro is playing
  useEffect(() => {
    if (showIntro && mounted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showIntro, mounted]);

  const handleSkip = () => {
    sessionStorage.setItem('introPlayed', 'true');
    setShowIntro(false);
  };

  const handleComplete = () => {
    sessionStorage.setItem('introPlayed', 'true');
    setShowIntro(false);
  };

  if (!mounted || !showIntro) return null;

  // The jagged path for the crack
  const leftClip = "polygon(0 0, 48% 0, 52% 15%, 47% 30%, 55% 45%, 45% 60%, 53% 75%, 48% 90%, 50% 100%, 0 100%)";
  const rightClip = "polygon(48% 0, 100% 0, 100% 100%, 50% 100%, 48% 90%, 53% 75%, 45% 60%, 55% 45%, 47% 30%, 52% 15%)";

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div 
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center overflow-hidden origin-center"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.2, // Smoothly zooms INTO the homepage as it fades
            filter: "blur(10px)", // Adds a cinematic blur
            transition: { duration: 1.5, ease: "easeInOut" } 
          }}
        >
          {/* Logo emerging from the center */}
          <motion.div
            className="absolute z-10 w-48 h-48 md:w-64 md:h-64 flex items-center justify-center"
            initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
            animate={{ scale: 1.2, opacity: 1, rotate: 0 }}
            transition={{ delay: 1.5, duration: 1.2, type: "spring", bounce: 0.4 }}
          >
            <Image src="/images/logo.jpg" alt="Logo" fill className="object-contain" priority />
            <motion.div 
              className="absolute -bottom-10 md:-bottom-12 w-[300px] md:w-[400px] text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.8 }}
            >
              <h1 className="text-2xl md:text-4xl font-bold text-namo-green-900 font-[family-name:var(--font-playfair)] tracking-wide">
                NAMO RENEWABLES
              </h1>
            </motion.div>
          </motion.div>

          {/* The Briquette that splits */}
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] z-20">
            
            {/* Left Half */}
            <motion.div
              className="absolute inset-0"
              style={{
                clipPath: leftClip,
                filter: "drop-shadow(5px 0px 10px rgba(0,0,0,0.3))",
                willChange: "transform, opacity"
              }}
              initial={{ x: 0, rotate: 0 }}
              animate={{ 
                x: [0, -10, 5, -15, -1000], 
                rotate: [0, -2, 1, -3, -15] 
              }}
              transition={{ 
                duration: 2, 
                times: [0, 0.2, 0.4, 0.6, 1], // Shaking before splitting
                ease: "anticipate",
                delay: 0.5
              }}
            >
              <Image src="/images/dark_oval_briquette.jpg" alt="Briquette Left" fill className="object-contain" priority sizes="(max-width: 768px) 400px, 600px" />
            </motion.div>

            {/* Right Half */}
            <motion.div
              className="absolute inset-0"
              style={{
                clipPath: rightClip,
                filter: "drop-shadow(-5px 0px 10px rgba(0,0,0,0.3))",
                willChange: "transform, opacity"
              }}
              initial={{ x: 0, rotate: 0 }}
              animate={{ 
                x: [0, 10, -5, 15, 1000], 
                rotate: [0, 2, -1, 3, 15] 
              }}
              transition={{ 
                duration: 2, 
                times: [0, 0.2, 0.4, 0.6, 1],
                ease: "anticipate",
                delay: 0.5
              }}
            >
              <Image src="/images/dark_oval_briquette.jpg" alt="Briquette Right" fill className="object-contain" priority sizes="(max-width: 768px) 400px, 600px" />
            </motion.div>
            
            {/* Energy Glow from the crack before splitting */}
            <motion.div
              className="absolute top-0 bottom-0 left-[48%] w-4 bg-namo-green-400 blur-xl z-10"
              style={{ willChange: "transform, opacity" }}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: [0, 1, 0.8, 1, 0], scaleY: [0, 1, 1, 1, 1] }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
          </div>

          {/* Invisible trigger to unmount the intro after animation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
            onAnimationComplete={handleComplete}
          />

          {/* Skip Button */}
          <button 
            onClick={handleSkip}
            className="absolute bottom-8 right-8 z-[99999] text-gray-400 hover:text-gray-600 transition-colors bg-white/50 px-4 py-2 rounded-full text-sm font-medium"
          >
            Skip Intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
