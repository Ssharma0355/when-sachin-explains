'use client';

import Image, { StaticImageData } from 'next/image';
import { Play, ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion'; // Added Variants import

// Ensure these paths are correct for your project
import Thumbnail1 from '../assets/thubnail1.png';
import Thumbnail2 from "../assets/thubnail2.png";
import Thumbnail3 from "../assets/thubnail3.png";
import Thumbnail4 from "../assets/thubnail4.png";


interface Video {
    id: number;
    title: string;
    thumbnail: StaticImageData;
    views?: string;
    link?: string;
    category: string;
    status: 'published' | 'upcoming';
}

const videos: Video[] = [
    {
        id: 1,
        title: 'Toxic Work Culture in India: Why Falling Apart',
        thumbnail: Thumbnail1,
        views: '12K',
        link: 'https://youtu.be/-5QLU94yED0?si=ml2OsmNW5zUeXlZk',
        category: 'Social Awareness',
        status: 'published',
    },
    {
        id: 2,
        title: 'Why Indians are Eating Slow Poison? (The Hidden Truth)',
        thumbnail: Thumbnail3,
        category: 'Social Commentary',
        views: '34K',
        link: 'https://youtu.be/4W8LyeQryH8?si=T5Aaxy7RdDGHpNUN',
        status: 'published',
    },
     {
        id: 3,
        title: 'AI Summit 2026 Exposed: India’s Biggest Innovation Failure? | Chaos, Scandal & Hidden Heroes',
        thumbnail: Thumbnail4,
        category: 'Social Awareness',
        views: '1K',
        link: 'https://youtu.be/jw2qAE5wHbY?si=DbV1-OaX1JAbeDYK',
        status: 'published',
    },
    {
        id: 4,
        title: 'The Fall of State Bihar',
        thumbnail: Thumbnail2,
        category: 'Society',
        status: 'upcoming',
    },
];

// Animation Variants with Explicit Typing
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function YouTubeFeed() {
    return (
        <section id="youtube" className="py-28 bg-[#f8fafc]">
            <div className="container mx-auto px-6">

                {/* Header - Fade Up */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <div className="max-w-2xl">
                        <span className="text-xs uppercase tracking-widest text-blue-600 font-semibold">
                            Video Essays
                        </span>
                        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
                            Latest on YouTube
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Long-form thinking on work, technology, and systems shaping society.
                        </p>
                    </div>

                    <a
                        href="https://youtube.com/@whensachinexplains"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-slate-900 font-semibold border-b border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition"
                    >
                        View Channel
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Grid - Staggered Animation */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {videos.map(video => {
                        const isUpcoming = video.status === 'upcoming';

                        return (
                            <motion.div
                                key={video.id}
                                variants={itemVariants}
                                className={`group ${isUpcoming ? 'cursor-default' : ''}`}
                            >
                                <div
                                    className={`relative aspect-video rounded-3xl overflow-hidden
                                    bg-slate-200 shadow-sm transition-all duration-700
                                    ${!isUpcoming && 'group-hover:shadow-2xl'}`}
                                >
                                    <Image
                                        src={video.thumbnail}
                                        alt={video.title}
                                        fill
                                        className={`object-cover transition-all duration-700
                                        ${isUpcoming
                                            ? 'grayscale blur-[1px]'
                                            : 'grayscale group-hover:grayscale-0 group-hover:scale-[1.04]'
                                        }`}
                                    />

                                    {/* Overlay */}
                                    {isUpcoming ? (
                                        <div className="absolute inset-0 bg-white/60 backdrop-blur-md flex items-center justify-center">
                                            <span className="text-xs uppercase tracking-widest text-slate-700 font-medium">
                                                Coming Soon
                                            </span>
                                        </div>
                                    ) : (
                                        <a
                                            href={video.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center"
                                        >
                                            <div className="bg-red-600 p-4 rounded-full shadow-xl">
                                                <Play fill="currentColor" className="w-6 h-6 text-white ml-0.5" />
                                            </div>
                                        </a>
                                    )}

                                    {/* Badge */}
                                    <span
                                        className={`absolute top-4 left-4 text-xs tracking-widest px-3 py-1 rounded-full
                                        ${isUpcoming
                                            ? 'bg-slate-900/70 text-white'
                                            : 'bg-black/60 text-white backdrop-blur-md'
                                        }`}
                                    >
                                        {isUpcoming ? 'Upcoming' : video.category}
                                    </span>
                                </div>

                                <div className="mt-6">
                                    <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                                        {video.title}
                                    </h3>

                                    <p className="mt-2 text-xs uppercase tracking-widest text-slate-400">
                                        {isUpcoming ? 'Releasing soon' : `${video.views} views`}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}