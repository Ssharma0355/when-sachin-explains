"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import PhoneGif from "../assets/phone-recording.gif"; // your GIF

export default function NewsCTA() {
  const router = useRouter();

  const handleClick = () => {
    window.open("https://news-app-q6wc.vercel.app/", "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      
      {/* Phone Style Container */}
      <div className="relative border-[6px] border-black rounded-[40px] w-[260px] h-[520px] overflow-hidden shadow-2xl mb-6">
        
        {/* GIF */}
        <Image
          src={PhoneGif}
          alt="News App Preview"
          fill
          className="object-cover"
          priority
        />

        {/* LIVE Badge */}
        <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded animate-pulse">
          🔴 LIVE
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={handleClick}
        className="bg-gradient-to-r cursor-pointer from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-2xl text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
      >
        🚀 Open Live News App
      </button>

      {/* Subtext */}
      <p className="text-sm text-gray-500 mt-3 text-center max-w-xs">
        Get instant breaking news updates in real-time ⚡
      </p>
    </div>
  );
}