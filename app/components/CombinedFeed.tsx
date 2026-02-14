"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const instaPosts = [
  { id: 1, caption: "Late-night problem solving" },
  { id: 2, caption: "New workspace iteration" },
  { id: 3, caption: "Conference reflections" },
  { id: 4, caption: "Behind the scenes" },
];

const blogs = [
  { id: 1, title: "How I optimized my Next.js app", date: "Feb 8, 2026", category: "Engineering" },
  { id: 2, title: "Why Tailwind changed how I think", date: "Jan 25, 2026", category: "Design" },
  { id: 3, title: "Content creation vs deep work", date: "Jan 10, 2026", category: "Thinking" },
];

// Variants for staggering animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function CombinedFeed() {
  return (
    <section id="instagram" className="py-28 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Instagram Section */}
          <div className="lg:col-span-7">
            <motion.div
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
            >
                <span className="text-xs uppercase tracking-widest text-slate-600 font-medium">
                Process
                </span>

                <h2 className="mt-3 text-3xl font-medium tracking-tight text-slate-900">
                Instagram
                </h2>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12"
            >
              {instaPosts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  // Removed role="link" and tabIndex={0} to fix accessibility warnings
                  className="relative aspect-square rounded-2xl overflow-hidden
                             bg-gradient-to-br from-slate-200 to-slate-300
                             shadow-sm hover:shadow-xl
                             transition-all duration-700
                             group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center p-4">
                    <p className="text-white text-xs tracking-wide text-center leading-relaxed font-normal">
                      {post.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                <Link
                href="https://www.instagram.com/whensachinexplains/"
                target="_blank"
                className="inline-block mt-10 text-sm font-medium tracking-tight
                            text-slate-900
                            border-b border-slate-900 pb-1
                            hover:text-blue-600 hover:border-blue-600
                            transition"
                >
                Follow on Instagram
                </Link>
            </motion.div>
          </div>

          {/* Blog Section */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.7, ease: "easeOut" }}
             className="lg:col-span-5 bg-[#f8fafc] p-10 rounded-3xl border border-slate-100"
          >
            <span className="text-xs uppercase tracking-widest text-slate-600 font-medium">
              Writing
            </span>

            <h2 className="mt-3 text-3xl font-medium tracking-tight text-slate-900 mb-12">
              Essays & Thinking
            </h2>

            <div className="space-y-10">
              {blogs.map((blog, index) => (
                <motion.a
                  key={blog.id}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="block group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg"
                >
                  <div className="flex justify-between text-xs tracking-widest text-slate-400 uppercase mb-2">
                    <span>{blog.category}</span>
                    <span>{blog.date}</span>
                  </div>

                  <h3 className="text-lg font-medium tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h3>

                  <div
                    className="mt-3 text-sm text-slate-600 flex items-center gap-1
                               opacity-0 translate-y-1
                               group-hover:opacity-100 group-hover:translate-y-0
                               transition-all duration-500"
                  >
                    Continue reading <ArrowUpRight size={14} />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}