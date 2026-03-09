'use client';

import { motion } from 'framer-motion';

export default function YoutubeLaptopMockup() {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[560px]"
      >
        <div className="bg-black rounded-t-xl p-3 shadow-2xl border border-slate-200">
          <div className="relative rounded-lg overflow-hidden aspect-video bg-black">
            <img
              src="/images/youtube-channel.png"
              alt="YouTube Channel Screenshot"
              className="w-full h-full object-cover"
            />
  
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent" />
          </div>
        </div>
  
        <div className="h-4 bg-gradient-to-b from-slate-200 to-slate-300 rounded-b-xl shadow-md" />
      </motion.div>
    );
  }