import { ArrowUpRight } from 'lucide-react';

const instaPosts = [
  { id: 1, img: '/api/placeholder/400/400', caption: 'Coding late night 🌙' },
  { id: 2, img: '/api/placeholder/400/400', caption: 'New setup upgrade! 🖥️' },
  { id: 3, img: '/api/placeholder/400/400', caption: 'React Conf recap ⚛️' },
  { id: 4, img: '/api/placeholder/400/400', caption: 'BTS of new video 🎥' },
];

const blogs = [
  { id: 1, title: 'How I optimized my Next.js App', date: 'Feb 8, 2026', category: 'Dev' },
  { id: 2, title: 'Why I switched to Tailwind', date: 'Jan 25, 2026', category: 'CSS' },
  { id: 3, title: 'Content Creation vs Coding', date: 'Jan 10, 2026', category: 'Lifestyle' },
];

export default function CombinedFeed() {
  return (
    <section id="instagram" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Instagram Grid (Cols 1-7) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl font-bold">Instagram</h2>
              <span className="px-2 py-1 bg-pink-100 text-pink-600 text-xs font-bold rounded">@WhenSachinExplains</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {instaPosts.map((post) => (
                <div key={post.id} className="relative aspect-square bg-slate-100 rounded-lg overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-slate-300" /> {/* Placeholder for Image */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                    <p className="text-white text-xs font-medium">{post.caption}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center md:text-left">
              <button className="text-sm font-semibold text-slate-900 border-b-2 border-slate-900 pb-0.5 hover:text-blue-600 hover:border-blue-600 transition-colors">
                Follow on Instagram
              </button>
            </div>
          </div>

          {/* Blog List (Cols 8-12) */}
          <div className="lg:col-span-5 bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h2 className="text-2xl font-bold mb-6">Read the Blog</h2>
            <div className="space-y-6">
              {blogs.map((blog) => (
                <a key={blog.id} href="#" className="block group">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">{blog.category}</span>
                    <span className="text-xs text-slate-400">{blog.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-slate-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0">
                    Read Article <ArrowUpRight size={14} />
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}