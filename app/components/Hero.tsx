'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-[75vh] flex items-center bg-[#f8fafc] overflow-hidden">

            {/* Ambient Gradient */}
            <div className="absolute -top-32 right-[-10%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="max-w-4xl"
                >
                    <span className="inline-block mb-6 text-xs tracking-widest uppercase text-blue-600 font-semibold">
                        Developer • Educator • Social Commentary
                    </span>

                    <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.05]">
                        When <span className="text-blue-600">Sachin</span> Explains,
                        <br />
                        <span className="text-slate-700 font-normal">
                            complexity disappears.
                        </span>
                    </h1>

                    <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-2xl">
                        Thoughtful breakdowns of technology, work culture, and systems
                        shaping modern India.
                    </p>

                    <div className="mt-12 flex items-center gap-8">
                        <a
                            href="#youtube"
                            className="group inline-flex items-center gap-2 text-slate-900 font-semibold border-b border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition"
                        >
                            Watch on YouTube
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="#instagram"
                            className="text-slate-500 font-medium hover:text-slate-900 transition"
                        >
                            Behind the scenes
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
