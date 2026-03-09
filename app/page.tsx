import Hero from './components/Hero';
import YouTubeFeed from './components/YouTubeFeed';
import CombinedFeed from './components/CombinedFeed';
import Footer from './components/Footer';
import YoutubeLaptopMockup from './components/YoutubeLaptopMockup';
import YoutubePhoneMockup from './components/YoutubePhoneMockup';

export default function Home() {
  return (
    <main className="bg-slate-50">

      <Hero />

      {/* MOCKUPS SECTION */}
      <section className="relative py-28 overflow-hidden">

        {/* background blur */}
        <div className="absolute left-[-10%] top-20 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[120px]" />
        <div className="absolute right-[-10%] bottom-10 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center justify-items-center">

            <YoutubeLaptopMockup />

            <YoutubePhoneMockup />

          </div>

        </div>
      </section>

      <YouTubeFeed />
      <CombinedFeed />
      <Footer />

    </main>
  );
}