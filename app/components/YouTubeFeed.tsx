import Image, { StaticImageData } from 'next/image';
import { Play, ArrowRight } from 'lucide-react';
// Ensure the filename matches your actual file. 
// If your file is named "thubnail1.png", keep it, otherwise rename to "thumbnail1.png"
import Thumbnail1 from '../assets/thubnail1.png'; 

interface Video {
  id: number;
  title: string;
  thumbnail: StaticImageData | string; // Allows both imported images and URL strings
  views: string;
  link: string;
  category: string;
}

const videos: Video[] = [
  { 
    id: 1, 
    title: 'Toxic Work Culture in India: Why Falling Apart', 
    thumbnail: Thumbnail1, // ✅ CORRECT: Uses the imported object, not a string
    views: '12K', 
    link: 'https://youtu.be/-5QLU94yED0?si=ml2OsmNW5zUeXlZk',
    category: 'Social Awareness'
  },
  { 
    id: 2, 
    title: 'The Truth About Frontend Interviews', 
    thumbnail: '/api/placeholder/600/338', 
    views: '8.5K', 
    link: '#',
    category: 'Career'
  },
  { 
    id: 3, 
    title: 'My Desk Setup 2026', 
    thumbnail: '/api/placeholder/600/338', 
    views: '20K', 
    link: '#',
    category: 'Tech & Gear'
  },
];

export default function YouTubeFeed() {
  return (
    <section id="youtube" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Latest on YouTube
            </h2>
            <p className="text-slate-600 mt-3 text-lg">
              Deep dives into Social Issues, Technology, and Geo-Politics.
            </p>
          </div>
          <a 
            href="https://youtube.com/@whensachinexplains?si=kMJ_YokwGKxwaY52" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            Visit Channel 
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <a 
              key={video.id} 
              href={video.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col h-full"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-200">
                <Image 
                  src={video.thumbnail} 
                  alt={video.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay Play Button */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="bg-red-600 text-white p-4 rounded-full shadow-lg transform scale-90 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300">
                    <Play fill="currentColor" className="w-6 h-6 ml-1" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 rounded-full">
                  {video.category}
                </div>
              </div>

              {/* Video Info */}
              <div className="mt-5 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-sm text-slate-500 font-medium">
                  <span>{video.views} views</span>
                  <span>•</span>
                  <span className="text-red-600">Watch now</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}