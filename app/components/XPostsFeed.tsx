'use client';

import Image, { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Post1 from "../assets/xpost1.png";
import Post2 from "../assets/xpost2.png";

interface Post {
  id: number;
  image: StaticImageData;
  caption?: string;
}

const posts: Post[] = [
  { id: 1, image: Post1, caption: "" },
  { id: 2, image: Post2, caption: "" }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function XPostsFeed() {
  return (
    <section id="xposts" className="py-28 bg-[#f8fafc]">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-blue-600 font-semibold">
              Social Commentary
            </span>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
              Conversations on X
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Short thoughts, debates and observations shared on X.
            </p>
          </div>

          <a
            href="https://x.com/whensachinexpln"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-slate-900 font-semibold border-b border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition"
          >
            View Profile
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Posts */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
        >
          {posts.map((post) => (
            <motion.div key={post.id} variants={itemVariants} className="group">
              
              <div className="relative bg-white rounded-3xl p-6 shadow-md transition-all duration-500 group-hover:shadow-xl">

                {/* Image */}
                <Image
                  src={post.image}
                  alt="X Post"
                  className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Click overlay */}
                <a
                  href="https://x.com/whensachinexpln"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                />

              </div>

              {post.caption && (
                <p className="mt-4 text-sm text-slate-500 tracking-wide">
                  {post.caption}
                </p>
              )}

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}