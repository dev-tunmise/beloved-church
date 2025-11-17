"use client";

import Image from "next/image";
import { VideoIcon, ArrowRightIcon } from "@/app/_components/icons";
import { useState } from "react";

export default function SermonCards() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const sermons = [
    {
      id: "iDMNslFItEc",
      title: "God's Promise Against Delay - October 19, 2025",
      date: "October 6, 2025",
      description: "Discover God's unique plan for your life and learn how to walk confidently in your divine purpose."
    },
    {
      id: "wQfwgbzE5_A",
      title: "Faith That Moves Mountains - October 26, 2025",
      date: "September 28, 2025",
      description: "Understanding how faith moves mountains and transforms impossible situations into divine opportunities."
    },
    {
      id: "xSt8gg8NllY",
      title: "Foundational Limitations - November 16, 2025",
      date: "November 16, 2025",
      description: "Explore what it means to worship God not just in song, but through every aspect of your daily life."
    }
  ];

  return (
    <>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {sermons.map((sermon, index) => (
          <div 
            key={index}
            onClick={() => setSelectedVideo(sermon.id)}
            className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={`https://i.ytimg.com/vi/${sermon.id}/hqdefault.jpg`}
                alt={sermon.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <VideoIcon size={32} className="text-white" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="text-xs text-gold font-semibold mb-2 uppercase tracking-wider">{sermon.date}</div>
              <h3 className="text-xl font-bold text-dark-purple mb-3 leading-tight">
                {sermon.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {sermon.description}
              </p>
              <div className="inline-flex items-center gap-2 text-royal-purple font-semibold text-sm hover:gap-3 transition-all">
                Watch Now
                <ArrowRightIcon size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="bg-white rounded-lg overflow-hidden max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                title="Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <button
              onClick={() => setSelectedVideo(null)}
              className="w-full bg-royal-purple text-white py-3 font-semibold hover:bg-dark-purple transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
