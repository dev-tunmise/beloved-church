'use client';

import Container from "@/app/_components/container";
import { useState } from "react";

// Sample sermon data - replace with actual data from CMS or API
const sermons = [
  {
    id: 1,
    title: "Walking in Faith",
    date: "2024-10-06",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    description: "A powerful message on trusting God in difficult times.",
    category: "sermon"
  },
  {
    id: 2,
    title: "Prophetic Moment: New Season",
    date: "2024-09-29",
    videoId: "dQw4w9WgXcQ",
    description: "God is doing something new in this season.",
    category: "prophetic"
  },
  {
    id: 3,
    title: "Testimony: Healed from Cancer",
    date: "2024-09-22",
    videoId: "dQw4w9WgXcQ",
    description: "Sister Mary shares her miraculous healing testimony.",
    category: "testimony"
  },
];

export default function SermonsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredSermons = selectedCategory === "all" 
    ? sermons 
    : sermons.filter(sermon => sermon.category === selectedCategory);

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-royal-purple to-dark-purple text-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Sermons & <span className="text-gold">Messages</span>
            </h1>
            <p className="text-xl text-gray-200">
              Watch our live services, past sermons, prophetic moments, and testimonies
            </p>
          </div>
        </Container>
      </section>

      {/* Live Stream Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="bg-royal-purple text-white p-6 rounded-t-lg">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <span className="bg-red-600 px-3 py-1 rounded text-sm animate-pulse">LIVE</span>
                Watch Us Live
              </h2>
            </div>
            <div className="bg-black aspect-video rounded-b-lg overflow-hidden">
              {/* YouTube Live Embed - Replace with your channel's live stream embed */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
                title="Live Stream"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-600 mb-4">
                Join us every Sunday at 10:00 AM (GMT) for live worship and powerful messages
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.youtube.com/@yourchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
                >
                  Subscribe on YouTube
                </a>
                <a
                  href="https://www.facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Follow on Facebook
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Past Sermons Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-bold text-center text-royal-purple mb-8">
            Past Messages
          </h2>

          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === "all"
                  ? "bg-royal-purple text-white"
                  : "bg-white text-royal-purple border-2 border-royal-purple hover:bg-royal-purple hover:text-white"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory("sermon")}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === "sermon"
                  ? "bg-royal-purple text-white"
                  : "bg-white text-royal-purple border-2 border-royal-purple hover:bg-royal-purple hover:text-white"
              }`}
            >
              Sermons
            </button>
            <button
              onClick={() => setSelectedCategory("prophetic")}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === "prophetic"
                  ? "bg-royal-purple text-white"
                  : "bg-white text-royal-purple border-2 border-royal-purple hover:bg-royal-purple hover:text-white"
              }`}
            >
              Prophetic Moments
            </button>
            <button
              onClick={() => setSelectedCategory("testimony")}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === "testimony"
                  ? "bg-royal-purple text-white"
                  : "bg-white text-royal-purple border-2 border-royal-purple hover:bg-royal-purple hover:text-white"
              }`}
            >
              Testimonies
            </button>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSermons.map((sermon) => (
              <div key={sermon.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div 
                  className="relative aspect-video bg-gray-200 cursor-pointer"
                  onClick={() => setSelectedVideo(sermon.videoId)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${sermon.videoId}/maxresdefault.jpg`}
                    alt={sermon.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                    sermon.category === 'sermon' ? 'bg-royal-purple text-white' :
                    sermon.category === 'prophetic' ? 'bg-gold text-white' :
                    'bg-green-500 text-white'
                  }`}>
                    {sermon.category.charAt(0).toUpperCase() + sermon.category.slice(1)}
                  </div>
                  <h3 className="text-xl font-bold text-royal-purple mb-2">
                    {sermon.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {sermon.description}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {new Date(sermon.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

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
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
    </main>
  );
}
