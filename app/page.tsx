import Hero from './components/Hero';
import YouTubeFeed from './components/YouTubeFeed';
import CombinedFeed from './components/CombinedFeed';

export default function Home() {
  return (
    <main>
      <Hero />
      <YouTubeFeed />
      <CombinedFeed />
    </main>
  );
}