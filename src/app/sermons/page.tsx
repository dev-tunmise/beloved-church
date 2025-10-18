'use client';

import Container from "@/app/_components/container";
import { useState } from "react";
import { VideoIcon, CalendarIcon, ClockIcon, PlayIcon } from "@/app/_components/icons";

// Sample sermon data - replace with actual data from CMS or API
const sermons = [
  {
    id: 1,
    title: "Walking in Faith",
    date: "2024-10-06",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    description: "A powerful message on trusting God in difficult times.",
    category: "sermon",
    thumbnail: "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=800"
  },
  {
    id: 2,
    title: "Prophetic Moment: New Season",
    date: "2024-09-29",
    videoId: "dQw4w9WgXcQ",
    description: "God is doing something new in this season.",
    category: "prophetic",
    thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=800"
  },
  {
    id: 3,
    title: "Testimony: Healed from Cancer",
    date: "2024-09-22",
    videoId: "dQw4w9WgXcQ",
    description: "Sister Mary shares her miraculous healing testimony.",
    category: "testimony",
    thumbnail: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=800"
  },
  {
    id: 4,
    title: "The Power of Prayer",
    date: "2024-09-15",
    videoId: "dQw4w9WgXcQ",
    description: "Understanding the transformative power of prayer in our lives.",
    category: "sermon",
    thumbnail: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800"
  },
  {
    id: 5,
    title: "Breaking Generational Curses",
    date: "2024-09-08",
    videoId: "dQw4w9WgXcQ",
    description: "Freedom from ancestral bondage through Christ.",
    category: "prophetic",
    thumbnail: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800"
  },
  {
    id: 6,
    title: "God's Provision Testimony",
    date: "2024-09-01",
    videoId: "dQw4w9WgXcQ",
    description: "How God miraculously provided in times of need.",
    category: "testimony",
    thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800"
  },
];

export default function SermonsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredSermons = selectedCategory === "all" 
    ? sermons 
    : sermons.filter(sermon => sermon.category === selectedCategory);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-purple/95 via-royal-purple/90 to-dark-purple/95">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=2070')",
              backgroundPosition: "center"
            }}
          />
          {/* Decorative overlay pattern */}
          <div className="absolute inset-0 opacity-10" 
               style={{
                 backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
                 backgroundSize: '40px 40px'
               }}
          />
        </div>
        
        <Container>
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <div className="inline-block mb-6 animate-fade-in">
              <div className="flex items-center gap-3 justify-center">
                <div className="h-px w-8 bg-gold"></div>
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">Watch & Learn</span>
                <div className="h-px w-8 bg-gold"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
              Sermons & <span className="text-gold">Messages</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-3xl mx-auto animate-slide-up-delay">
              Watch our live services, past sermons, prophetic moments, and testimonies
            </p>
            
            {/* Decorative element */}
            <div className="mt-8 flex justify-center">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            </div>
          </div>
        </Container>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Live Stream Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-royal-purple to-dark-purple text-white p-8 rounded-t-2xl">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 mb-2">
                    <span className="relative flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600"></span>
                    </span>
                    Live Worship Service
                  </h2>
                  <p className="text-gray-200">Join us every Sunday at 10:00 AM (GMT)</p>
                </div>
                <div className="flex items-center gap-2 bg-red-600 px-6 py-3 rounded-full font-semibold">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                  LIVE NOW
                </div>
              </div>
            </div>
            <div className="bg-black aspect-video rounded-b-2xl overflow-hidden shadow-2xl">
              {/* YouTube Live Embed - Replace with your channel's live stream embed */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
                title="Live Stream"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-6 text-lg">
                Experience powerful worship, anointed preaching, and the presence of God
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://www.youtube.com/@yourchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg"
                >
                  <VideoIcon size={22} />
                  Subscribe on YouTube
                </a>
                <a
                  href="https://www.facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Follow on Facebook
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Past Sermons Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block mb-4">
              <span className="text-royal-purple font-semibold text-sm uppercase tracking-wider">Message Archive</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-4">
              Past Messages
            </h2>
            <p className="text-gray-600 text-lg">
              Browse our collection of sermons, prophetic words, and powerful testimonies
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-royal-purple to-dark-purple text-white"
                  : "bg-white text-dark-purple border-2 border-gray-200 hover:border-royal-purple"
              }`}
            >
              All Messages
            </button>
            <button
              onClick={() => setSelectedCategory("sermon")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
                selectedCategory === "sermon"
                  ? "bg-gradient-to-r from-royal-purple to-dark-purple text-white"
                  : "bg-white text-dark-purple border-2 border-gray-200 hover:border-royal-purple"
              }`}
            >
              Sermons
            </button>
            <button
              onClick={() => setSelectedCategory("prophetic")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
                selectedCategory === "prophetic"
                  ? "bg-gradient-to-r from-royal-purple to-dark-purple text-white"
                  : "bg-white text-dark-purple border-2 border-gray-200 hover:border-royal-purple"
              }`}
            >
              Prophetic Moments
            </button>
            <button
              onClick={() => setSelectedCategory("testimony")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
                selectedCategory === "testimony"
                  ? "bg-gradient-to-r from-royal-purple to-dark-purple text-white"
                  : "bg-white text-dark-purple border-2 border-gray-200 hover:border-royal-purple"
              }`}
            >
              Testimonies
            </button>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredSermons.map((sermon) => (
              <div key={sermon.id} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div 
                  className="relative aspect-video bg-gradient-to-br from-royal-purple to-dark-purple cursor-pointer overflow-hidden"
                  onClick={() => setSelectedVideo(sermon.videoId)}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                    style={{
                      backgroundImage: `url('${sermon.thumbnail}')`
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white/40 transition-all duration-300">
                      <PlayIcon size={28} className="text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      sermon.category === 'sermon' ? 'bg-royal-purple text-white' :
                      sermon.category === 'prophetic' ? 'bg-gold text-dark-purple' :
                      'bg-green-500 text-white'
                    }`}>
                      {sermon.category === 'sermon' ? 'Sermon' :
                       sermon.category === 'prophetic' ? 'Prophetic' : 'Testimony'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-dark-purple mb-3 group-hover:text-royal-purple transition-colors">
                    {sermon.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {sermon.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <CalendarIcon size={18} />
                      {new Date(sermon.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon size={18} />
                      45 min
                    </div>
                  </div>
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
