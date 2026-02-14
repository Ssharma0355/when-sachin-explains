import Hero from './components/Hero';
import YouTubeFeed from './components/YouTubeFeed';
import CombinedFeed from './components/CombinedFeed';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <YouTubeFeed />
      <CombinedFeed />
      <Footer />
    </main>
  );
}