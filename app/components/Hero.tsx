'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Youtube, Instagram } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-white overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4 border border-blue-100">
            Content Creator & Developer
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
            When <span className="text-blue-600">Sachin</span> Explains
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Breaking down complex tech concepts, one video at a time. 
            Join the community on YouTube and Instagram.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#youtube" 
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              <Youtube size={20} />
              Watch Latest
            </a>
            <a 
              href="#instagram" 
              className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              <Instagram size={20} />
              Follow Behind the Scenes
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}