import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CharacterFigure from '../components/CharacterFigure';

const BlogPost = () => {
  const { pathname } = useLocation();
  const accent = '#AFC3D2';
  const accentSoft = '#E7EFF4';
  const accentDeep = '#5D7482';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-white min-h-screen">
      {/* Back Navigation - Sticky */}
      <div className="sticky top-0 z-50 w-full p-4 md:p-6 pointer-events-none">
        <Link 
          to="/#portfolio" 
          className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-sm font-bold text-sm hover:bg-white transition-all border"
          style={{ color: accentDeep, borderColor: `${accent}55` }}
        >
          <ArrowLeft size={16} /> Back to iCustomer
        </Link>
      </div>

      {/* Hero Banner */}
      <div className="relative w-full h-[280px] md:h-[400px] -mt-[72px] md:-mt-[88px]">
        <img 
          src="https://images.unsplash.com/photo-1614149162883-504ce4d1ed15?q=80&w=1200&auto=format&fit=crop" 
          alt="Music Analytics" 
          className="w-full h-full object-cover"
        />
        <CharacterFigure
          src="/characters/blog-reading.png"
          alt="Illustrated Vinita reading"
          className="character-breath character-fade-in-delayed hair-sway absolute bottom-[-22px] right-6 hidden h-[160px] w-[160px] md:block"
          imgClassName="h-full w-full object-contain"
        />
        <div
          className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 text-center md:text-left"
          style={{ background: 'linear-gradient(180deg, rgba(93,116,130,0.24) 0%, rgba(41,53,62,0.72) 100%)' }}
        >
          <div className="max-w-[720px] mx-auto w-full pt-16 md:pt-0">
            <span className="inline-block px-3 py-1 text-white text-[11px] font-bold uppercase tracking-widest rounded-full mb-4" style={{ backgroundColor: accentDeep }}>
              Marketing Analytics
            </span>
            <h1 className="text-3xl md:text-[40px] font-serif font-bold text-white leading-tight mb-4 md:mb-6">
              Full Funnel Analytics in Music Streaming Platforms 🎵📊
            </h1>
            <div className="flex flex-col md:flex-row md:items-center text-slate-200 text-[13px] md:text-sm gap-2 md:gap-4 font-medium opacity-90">
              <span className="uppercase tracking-wider" style={{ color: '#D8EBF2' }}>By Vinita Shah · Content Marketing Intern at iCustomer</span>
              <span className="hidden md:inline" style={{ color: accent }}>•</span>
              <span className="text-white/80">March 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[720px] mx-auto px-5 md:px-[1.25rem] py-16 md:py-20 text-[16px] leading-[1.8] text-slate-600 font-sans">
        
        {/* Intro */}
        <section className="mb-12">
          <h2 className="text-[22px] font-serif font-bold text-brand-purple mb-4">Ever Wondered How Spotify Knows Exactly What You Want to Hear?</h2>
          <p className="mb-4">
            Every song, every lyric, and every tune has a story. But did you know that your music streaming habits also tell a story? Whether you're vibing to a sad ballad on a rainy day or blasting energetic beats during a workout, platforms like Spotify, Apple Music, and YouTube Music are constantly analyzing your listening behavior.
          </p>
          <p className="mb-4">
            This is where Full Funnel Analytics comes into play. It helps streaming platforms understand listener behavior at every stage — from discovering a new song to becoming a loyal fan of an artist. Let's break it down in the simplest way possible! 🎶
          </p>
        </section>

        <hr className="my-10 border-t" style={{ borderColor: accent }} />

        {/* Full Funnel Analytics */}
        <section className="mb-12">
          <h2 className="text-[22px] font-serif font-bold mb-4" style={{ color: accentDeep }}>What is Full Funnel Analytics? 🤔</h2>
          <p className="mb-4">
            Think of Full Funnel Analytics as tracking a music journey from the first time you hear a song to the moment you become obsessed with it. It's a data-driven approach that helps streaming platforms, artists, and marketers understand listener engagement at every stage of the funnel. Now, let's explore how Spotify and other platforms use this funnel to personalize your experience.
          </p>
        </section>

        <hr className="my-10 border-t" style={{ borderColor: accent }} />

        {/* Awareness */}
        <section className="mb-12">
          <h2 className="text-[22px] font-serif font-bold mb-4" style={{ color: accentDeep }}>Awareness: How Do You Discover New Music? 🎧</h2>
          <p className="mb-4">
            The first step in Full Funnel Analytics is getting a song in front of you. Streaming platforms blend music with people's tastes through:
          </p>
          <ul className="space-y-3 mb-6 border-l-2 border-[#e9d5ff] pl-4 md:pl-5 marker:text-brand-purple">
            <li className="flex gap-2.5"><span>✅</span> <span>Curated Playlists: Discover Weekly, New Music Friday, Top Hits</span></li>
            <li className="flex gap-2.5"><span>✅</span> <span>Social Media & Ads: Promoted songs on Instagram, YouTube, and TikTok</span></li>
            <li className="flex gap-2.5"><span>✅</span> <span>Friends' Activity: You can see what people are playing if you follow them on Spotify</span></li>
            <li className="flex gap-2.5"><span>✅</span> <span>Group Playlists: A fun way to collaborate with friends and expose each other to new music</span></li>
          </ul>
          <p className="mb-4 font-bold text-slate-800">
            🔎 How Streaming Platforms Track This Stage:
          </p>
          <ul className="space-y-2 mb-4 list-disc pl-6 marker:text-brand-purple">
            <li>Number of listeners reached through ads or playlists</li>
            <li>How many users click on the song after seeing it in a recommendation</li>
          </ul>
        </section>

        <hr className="border-t border-[#e9d5ff] my-10" />

        {/* Consideration */}
        <section className="mb-12">
          <h2 className="text-[22px] font-serif font-bold text-brand-purple mb-4">Consideration: What Makes You Keep Listening? 🎼</h2>
          <p className="mb-4">
            After discovering a song, the next step is deciding whether you like it enough to keep listening. Streaming platforms analyze:
          </p>
          <ul className="space-y-3 mb-6 border-l-2 border-[#e9d5ff] pl-4 md:pl-5 marker:text-brand-purple">
            <li className="flex gap-2.5"><span>🔹</span> <span>Do you listen to the full song or skip it?</span></li>
            <li className="flex gap-2.5"><span>🔹</span> <span>How long do you listen to that specific song or genre?</span></li>
            <li className="flex gap-2.5"><span>🔹</span> <span>If you stop the music in between, where do you stop?</span></li>
          </ul>
          <p className="mb-4">
            This data helps Spotify improve recommendations based on your listening patterns. If you finish a song and replay it, that's a strong signal that you love it!
          </p>
          <p className="mb-4 font-bold text-slate-800">
            🔎 How Streaming Platforms Track This Stage:
          </p>
          <ul className="space-y-2 mb-4 list-disc pl-6 marker:text-brand-purple">
            <li>Play duration & skip rates</li>
            <li>Number of times a song is saved or added to a playlist</li>
          </ul>
        </section>

        <hr className="border-t border-[#e9d5ff] my-10" />

        {/* Conversion */}
        <section className="mb-12">
          <h2 className="text-[22px] font-serif font-bold text-brand-purple mb-4">Conversion: Becoming a True Fan 🎟</h2>
          <p className="mb-4">
            At this stage, you've found your new favorite song or artist! This is when streaming platforms measure deep engagement:
          </p>
          <ul className="space-y-3 mb-6 border-l-2 border-[#e9d5ff] pl-4 md:pl-5 marker:text-brand-purple">
            <li className="flex gap-2.5"><span>🎵</span> <span>Do you follow the artist?</span></li>
            <li className="flex gap-2.5"><span>🎵</span> <span>Do you play their songs on repeat?</span></li>
            <li className="flex gap-2.5"><span>🎵</span> <span>Are you willing to buy concert tickets or merchandise?</span></li>
          </ul>
          <p className="mb-4">
            This is also where Spotify Wrapped comes in — it summarizes your yearly music habits and strengthens fan engagement.
          </p>
          <p className="mb-4 font-bold text-slate-800">
            🔎 How Streaming Platforms Track This Stage:
          </p>
          <ul className="space-y-2 mb-4 list-disc pl-6 marker:text-brand-purple">
            <li>Follower growth of an artist</li>
            <li>Repeat listens & search queries for the song</li>
            <li>Merchandise or ticket sales linked to the artist</li>
          </ul>
        </section>

        <hr className="border-t border-[#e9d5ff] my-10" />

        {/* Retention & Advocacy */}
        <section className="mb-12">
          <h2 className="text-[22px] font-serif font-bold text-brand-purple mb-4">Retention & Advocacy: The Power of Data & Emotions 🏆</h2>
          <p className="mb-4">
            Once you love an artist or song, streaming platforms work to keep you engaged. Full Funnel Analytics allows platforms to:
          </p>
          <ul className="space-y-3 mb-6 border-l-2 border-[#e9d5ff] pl-4 md:pl-5 marker:text-brand-purple">
            <li className="flex gap-2.5"><span>✅</span> <span>Create Personalized Playlists (e.g., Daily Mix, Time Capsule)</span></li>
            <li className="flex gap-2.5"><span>✅</span> <span>Identify Mood & Context-based Listening (e.g., Workout, Chill, Study)</span></li>
            <li className="flex gap-2.5"><span>✅</span> <span>Sync Music with External Factors like weather, time of day, and social activity</span></li>
          </ul>
          <p className="mb-4">
            Imagine if Spotify could track your mood using a bubble chart 📊, analyzing:
          </p>
          <ul className="space-y-3 mb-6 border-l-2 border-[#e9d5ff] pl-4 md:pl-5 marker:text-brand-purple">
            <li className="flex gap-2.5"><span>🎭</span> <span>What songs do you want to listen to at a given moment?</span></li>
            <li className="flex gap-2.5"><span>☁</span> <span>The weather (Rainy day = more acoustic songs)</span></li>
            <li className="flex gap-2.5"><span>👯</span> <span>If you're with friends (Party mode = upbeat tracks)</span></li>
          </ul>
          <p className="mb-4 font-bold text-slate-800">
            🔎 How Streaming Platforms Track This Stage:
          </p>
          <ul className="space-y-2 mb-4 list-disc pl-6 marker:text-brand-purple">
            <li>Monthly active listeners & long-term engagement</li>
            <li>User-generated playlists featuring the song</li>
            <li>Shares & mentions on social media</li>
          </ul>
        </section>

        <hr className="border-t border-[#e9d5ff] my-10" />

        {/* Pull Quote */}
        <div className="my-14 bg-[#f3e5f5]/80 p-6 md:p-8 rounded-2xl border-l-4 border-brand-purple text-center flex items-center justify-center shadow-sm">
          <p className="text-xl md:text-[22px] italic font-serif text-brand-purple font-medium leading-[1.6]">
            "Full Funnel Analytics isn't just about numbers — it's about understanding listeners on a deeper level."
          </p>
        </div>

        <hr className="border-t border-[#e9d5ff] my-10" />

        {/* Future of Streaming */}
        <section className="mb-12">
          <h2 className="text-[22px] font-serif font-bold text-brand-purple mb-4">The Future: AI-Powered Recommendations & Mood-Based Playlists 🔮</h2>
          <p className="mb-4">
            With the rise of AI and data analytics, the future of music streaming is hyper-personalized. Soon, platforms will:
          </p>
          <ul className="space-y-3 mb-6 border-l-2 border-[#e9d5ff] pl-4 md:pl-5 marker:text-brand-purple">
            <li className="flex gap-2.5"><span>🚀</span> <span>Predict your mood and recommend songs accordingly</span></li>
            <li className="flex gap-2.5"><span>🚀</span> <span>Sync music with your activities (e.g., driving, studying, relaxing)</span></li>
            <li className="flex gap-2.5"><span>🚀</span> <span>Collaborate with smart assistants for voice-based music recommendations</span></li>
          </ul>
        </section>

        <hr className="border-t border-[#e9d5ff] my-10" />

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-[22px] font-serif font-bold text-brand-purple mb-4">Conclusion:</h2>
          <p className="mb-4">
            Full Funnel Analytics isn't just about numbers — it's about understanding listeners on a deeper level. Whether you're an artist looking to grow your audience or a streaming platform optimizing recommendations, data is the key to delivering the right music at the right time. Next time you hit play on Spotify, think about the journey that led you to that song — it's all powered by analytics!
          </p>
          <p className="mb-6 font-medium text-slate-800">
            👉 Are you an artist or music enthusiast? Let's talk about how Full Funnel Analytics is shaping the future of streaming! Drop a comment below! 🎶👇
          </p>

          {/* Tag row */}
          <div className="flex flex-wrap gap-2 mt-8">
            {['Content Marketing', 'Full Funnel Strategy', 'SEO Writing', 'B2C Marketing Analytics'].map((tag, i) => (
              <span key={i} className="px-3 py-1.5 bg-[#f3e5f5] text-brand-purple text-[12px] font-bold tracking-wide rounded-full shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </section>

        <hr className="border-t border-[#e9d5ff] mb-12 mt-16" />

        {/* More from Vinita */}
        <section className="mb-16">
          <h4 className="text-xs font-bold text-brand-purple uppercase tracking-[0.15em] mb-6 border-b border-[#e9d5ff] pb-2 inline-block">More from Vinita</h4>
          
          <div className="flex flex-col md:flex-row gap-6">
            <Link to="/blog/marketing-attribution" className="flex-1 bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between cursor-pointer">
              <h5 className="font-bold text-slate-800 text-lg leading-tight mb-6">Marketing Attribution in B2C · Topgolf Style</h5>
              <div className="text-[12px] font-bold text-brand-teal uppercase tracking-widest flex items-center gap-2 group-hover:text-teal-700 transition-colors">
                READ MORE <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link to="/blog/minecraft-data-foundation" className="flex-1 bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between cursor-pointer">
              <h5 className="font-bold text-slate-800 text-lg leading-tight mb-6">What the Minecraft Movie Can Teach Us</h5>
              <div className="text-[12px] font-bold text-brand-teal uppercase tracking-widest flex items-center gap-2 group-hover:text-teal-700 transition-colors">
                READ MORE <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#f3e5f5] rounded-3xl p-8 md:p-12 text-center flex flex-col items-center shadow-inner">
          <h3 className="text-2xl font-serif font-bold text-brand-purple mb-6">Interested in working together?</h3>
          <Link to="/#contact" className="px-8 py-3 bg-brand-purple text-white rounded-full font-bold text-sm tracking-wide shadow-lg shadow-brand-purple/20 hover:bg-[#3d0272] hover:-translate-y-1 transition-all duration-300">
            Get in Touch
          </Link>
        </section>

      </main>
    </div>
  );
};

export default BlogPost;
