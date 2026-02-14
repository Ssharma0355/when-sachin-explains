'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Heart, 
  MessageCircle, 
  Send, 
  MoreHorizontal, 
  Music2
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#f8fafc] overflow-hidden py-20 lg:py-0">
      
      {/* Ambient Background Gradient */}
      <div className="absolute -top-32 right-[-10%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <span className="inline-block mb-6 text-xs tracking-widest uppercase text-blue-600 font-bold">
              Developer • Educator • Social Commentary
            </span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              When <span className="text-blue-600">Sachin</span> Explains,
              <br />
              <span className="text-slate-700 font-normal">
                complexity disappears.
              </span>
            </h1>
            <p className="mt-8 text-lg text-slate-600 leading-relaxed">
              Thoughtful breakdowns of technology, work culture, and systems shaping modern India.
            </p>
            <div className="mt-10 flex items-center gap-8">
              <a
                href="#"
                className="group inline-flex items-center gap-2 text-slate-900 font-semibold border-b border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition"
              >
                Watch on YouTube
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-slate-500 font-medium cursor-default">
                @whensachinexplains
              </span>
            </div>
          </motion.div>

          {/* RIGHT: Instagram Reels Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            {/* Phone Container */}
            <div className="relative w-[320px] h-[640px] bg-black rounded-[35px] overflow-hidden shadow-2xl border-[6px] border-white ring-1 ring-slate-900/5 rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              
              {/* GIF PLAYER (Using simple img tag) */}
              <img 
                src="/videos/reels.gif" 
                alt="Sachin Explains Reel"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay Gradient (for text readability) */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80 pointer-events-none" />

              {/* --- REELS UI LAYERS --- */}

              {/* Right Sidebar: Actions */}
              <div className="absolute bottom-20 right-3 flex flex-col items-center gap-6 z-20">
                <div className="flex flex-col items-center gap-1 group cursor-pointer">
                  <div className="p-2 transition group-hover:scale-110">
                    <Heart className="w-7 h-7 text-white stroke-[2px]" />
                  </div>
                  <span className="text-white text-xs font-medium">12.5k</span>
                </div>
                
                <div className="flex flex-col items-center gap-1 group cursor-pointer">
                   <div className="p-2 transition group-hover:scale-110">
                    <MessageCircle className="w-7 h-7 text-white stroke-[2px]" />
                  </div>
                  <span className="text-white text-xs font-medium">482</span>
                </div>

                <div className="flex flex-col items-center gap-1 group cursor-pointer">
                   <div className="p-2 transition group-hover:scale-110">
                    <Send className="w-7 h-7 text-white stroke-[2px] -rotate-12" />
                  </div>
                  <span className="text-white text-xs font-medium">Share</span>
                </div>

                <div className="mt-2">
                  <MoreHorizontal className="w-6 h-6 text-white/80" />
                </div>
              </div>

              {/* Bottom Left: User Info */}
              <div className="absolute bottom-6 left-4 right-16 z-20 text-white">
                
                {/* User Row */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px]">
                    <div className="w-full h-full rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold">
                      SE
                    </div>
                  </div>
                  <span className="font-semibold text-sm drop-shadow-md">whensachinexp...</span>
                  <button className="border border-white/30 bg-white/10 text-[11px] font-medium px-2 py-0.5 rounded backdrop-blur-sm">
                    Follow
                  </button>
                </div>

                {/* Caption */}
                <div className="mb-3">
                  <p className="text-sm line-clamp-2 leading-tight drop-shadow-md text-white/95">
                    Why we indians love comsune Poison... <span className="text-white/60 cursor-pointer">more</span>
                  </p>
                </div>

                {/* Audio Track */}
                <div className="flex items-center gap-2 opacity-90">
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-1 rounded-full">
                    <Music2 size={10} />
                    <div className="text-[10px] font-medium w-24 truncate">
                      Original Audio - Sachin Explains
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}