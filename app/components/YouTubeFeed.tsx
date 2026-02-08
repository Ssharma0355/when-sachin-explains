import Image from 'next/image';
import { Play } from 'lucide-react';

// Mock Data - Replace with actual YouTube Data API fetch
const videos = [
  { id: 1, title: 'Mastering Next.js 14 in 10 Minutes', thumbnail: '/api/placeholder/600/338', views: '12K', link: '#' },
  { id: 2, title: 'The Truth About Frontend Interviews', thumbnail: '/api/placeholder/600/338', views: '8.5K', link: '#' },
  { id: 3, title: 'My Desk Setup 2026', thumbnail: '/api/placeholder/600/338', views: '20K', link: '#' },
];

export default function YouTubeFeed() {
  return (
    <section id="youtube" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Latest on YouTube</h2>
            <p className="text-slate-600 mt-2">Social issues, Technology, Geo-Politics, Awareness</p>
          </div>
          <a href="https://youtube.com/@whensachinexplains?si=kMJ_YokwGKxwaY52" target="_blank" className="text-blue-600 font-medium hover:underline hidden sm:block">
            View Channel &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <a 
              key={video.id} 
              href={video.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-slate-200">
                {/* Use Next/Image for optimization */}
                <Image 
                  src={video.thumbnail} 
                  alt={video.title} 
                  fill 
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-red-600 text-white p-3 rounded-full shadow-xl transform scale-75 group-hover:scale-100 transition-all">
                    <Play fill="currentColor" size={24} />
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                {video.title}
              </h3>
              <p className="text-sm text-slate-500 mt-1">{video.views} views</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}