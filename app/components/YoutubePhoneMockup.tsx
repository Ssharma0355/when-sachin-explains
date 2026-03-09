'use client';

import { motion } from 'framer-motion';

export default function YoutubePhoneMockup() {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 4 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="relative w-[260px] h-[520px] bg-black rounded-[32px] overflow-hidden shadow-2xl border-[6px] border-white">
  
          <img
            src="/images/youtube-mobile.png"
            alt="YouTube Mobile Screenshot"
            className="absolute inset-0 w-full h-full object-cover"
          />
  
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
        </div>
  
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        />
      </motion.div>
    );
  }