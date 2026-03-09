"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const blogs = [
  { id: 1, title: "How I optimized my Next.js app", date: "Feb 8, 2026", category: "Engineering" },
  { id: 2, title: "Why Tailwind changed how I think", date: "Jan 25, 2026", category: "Design" },
  { id: 3, title: "Content creation vs deep work", date: "Jan 10, 2026", category: "Thinking" },
];

export default function CombinedFeed() {
  return (
    <section id="instagram" className="py-28 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Instagram Profile Screenshot */}
          <div>
            <span className="text-xs uppercase tracking-widest text-slate-600 font-medium">
              Process
            </span>

            <h2 className="mt-3 text-3xl font-medium tracking-tight text-slate-900 mb-10">
              Instagram
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-[280px]"
            >
              {/* Phone Frame */}
              <div className="relative w-[280px] h-[560px] bg-black rounded-[32px] overflow-hidden shadow-2xl border-[6px] border-white">

                {/* Instagram profile screenshot */}
                <img
                  src="/images/instagram-profile.png"
                  alt="Instagram Profile"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
              </div>
            </motion.div>

            <Link
              href="https://www.instagram.com/whensachinexplains/"
              target="_blank"
              className="inline-block mt-10 text-sm font-medium tracking-tight
              text-slate-900 border-b border-slate-900 pb-1
              hover:text-blue-600 hover:border-blue-600 transition"
            >
              Follow on Instagram
            </Link>
          </div>

          {/* Blog Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#f8fafc] p-10 rounded-3xl border border-slate-100"
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
                  className="block group"
                >
                  <div className="flex justify-between text-xs tracking-widest text-slate-400 uppercase mb-2">
                    <span>{blog.category}</span>
                    <span>{blog.date}</span>
                  </div>

                  <h3 className="text-lg font-medium tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h3>

                  <div className="mt-3 text-sm text-slate-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
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