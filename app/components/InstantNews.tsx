"use client";

import { useState, useEffect } from "react";

type Article = {
  title: string;
  description: string;
  url: string;
};

export default function InstantNews() {
  const [news, setNews] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchNews = async (): Promise<void> => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://newsapi.org/v2/top-headlines?country=in&pageSize=1&apiKey=YOUR_API_KEY"
      );

      const data = await res.json();

      if (data.articles && data.articles.length > 0) {
        setNews({
          title: data.articles[0].title,
          description: data.articles[0].description,
          url: data.articles[0].url,
        });
      }
    } catch (err) {
      console.error("Error fetching news:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNews(); // fetch on refresh

    // Optional auto-refresh every 15 sec
    const interval = setInterval(fetchNews, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6">
      
      {/* Phone Recording Style GIF */}
      <div className="border-4 border-black rounded-3xl overflow-hidden shadow-lg w-[250px] h-[500px] mb-4">
        <img
          src="/phone-recording.gif"
          alt="Phone recording"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Button */}
      <button
        onClick={fetchNews}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        {loading ? "Loading..." : "Get Instant News"}
      </button>

      {/* News Display */}
      {news && (
        <div className="mt-6 text-center max-w-md">
          <h2 className="text-lg font-bold">{news.title}</h2>
          <p className="text-sm text-gray-600 mt-2">
            {news.description}
          </p>
          <a
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 mt-2 inline-block"
          >
            Read more →
          </a>
        </div>
      )}
    </div>
  );
}