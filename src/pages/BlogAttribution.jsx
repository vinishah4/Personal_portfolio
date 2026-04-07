import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const BlogAttribution = () => {
  const { pathname } = useLocation();
  const accent = '#F4C0D1';
  const accentSoft = '#FBEAF0';
  const accentDeep = '#A35F78';

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
          style={{ color: accentDeep, borderColor: `${accent}66` }}
        >
          <ArrowLeft size={16} /> Back to iCustomer
        </Link>
      </div>

      {/* Hero Banner */}
      <div className="relative w-full h-[280px] md:h-[400px] -mt-[72px] md:-mt-[88px]">
        <img 
          src="https://images.unsplash.com/photo-1594911772125-07fdaec92b3a?q=80&w=1200&auto=format&fit=crop" 
          alt="Topgolf style golf venue" 
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 text-center md:text-left"
          style={{ background: 'linear-gradient(180deg, rgba(163,95,120,0.22) 0%, rgba(49,31,38,0.72) 100%)' }}
        >
          <div className="max-w-[720px] mx-auto w-full pt-16 md:pt-0">
            <span className="inline-block px-3 py-1 text-white text-[11px] font-bold uppercase tracking-widest rounded-full mb-4" style={{ backgroundColor: accentDeep }}>
              Marketing Strategy
            </span>
            <h1 className="text-3xl md:text-[40px] font-serif font-bold text-white leading-tight mb-4 md:mb-6">
              Marketing Attribution in B2C: Playing the Right Game to Win Big, Topgolf Style
            </h1>
            <div className="flex flex-col md:flex-row md:items-center text-slate-200 text-[13px] md:text-sm gap-2 md:gap-4 font-medium opacity-90">
              <span className="uppercase tracking-wider" style={{ color: '#FBE7EF' }}>By Vinita Shah · Content Marketing Intern at iCustomer</span>
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
          <p className="mb-4">
            Ever had that strange feeling when Instagram seems to know exactly what you're thinking about? You mention Topgolf in a conversation, and suddenly, you're bombarded with ads for golf gear, party packages, and drink specials. It's as if your phone is listening — but it's really marketing attribution working behind the scenes.
          </p>
          <p className="mb-4">
            For B2C e-commerce brands, marketing attribution is the key to understanding what made a customer convert. Just like how Topgolf tracks your swings, attributing points to each shot, brands try to assign credit to the different marketing touchpoints that led to a sale. But instead of just measuring the final shot, attribution models evaluate the entire journey.
          </p>
          <p className="mb-4">
            Let's explore how marketing attribution works, why it's so essential for B2C brands, and how it's not so different from playing a round at Topgolf.
          </p>
        </section>

        <hr className="my-10 border-t" style={{ borderColor: accent }} />

        {/* Attribution Basics */}
        <section className="mb-12">
          <h2 className="text-[22px] font-serif font-bold mb-4" style={{ color: accentDeep }}>What is Attribution in Marketing?</h2>
          <p className="mb-4">
            Attribution in marketing is the process of determining which marketing touchpoints influenced a customer's decision to buy. In a B2C world, customers rarely make a purchase after seeing just one ad. Instead, they may engage with a brand across multiple channels like:
          </p>
          <ul className="space-y-2 mb-6 border-l-2 border-[#e9d5ff] pl-4 md:pl-5 list-disc ml-4 marker:text-brand-purple">
            <li>Instagram Ads</li>
            <li>Email Campaigns</li>
            <li>Influencer Recommendations</li>
            <li>Google Search Ads</li>
            <li>YouTube Reviews</li>
          </ul>
          <p className="mb-4">
            Attribution helps marketers pinpoint which shots hit the mark and contributed most to the final conversion.
          </p>
          <p className="mb-4 font-medium text-slate-800 p-4 rounded-xl" style={{ backgroundColor: accentSoft }}>
            <span className="font-bold mr-1" style={{ color: accentDeep }}>Example:</span> If someone books a Topgolf reservation, what led to that decision? Was it the Instagram video of friends enjoying a night out? A promotional email? Or maybe a sponsored YouTube vlog? Attribution helps Topgolf understand what drove the booking and optimize future campaigns.
          </p>
        </section>

        <hr className="my-10 border-t" style={{ borderColor: accent }} />

        {/* Pull Quote */}
        <div className="my-14 p-6 md:p-8 rounded-2xl border-l-4 text-center flex items-center justify-center shadow-sm" style={{ backgroundColor: accentSoft, borderColor: accentDeep }}>
          <p className="text-xl md:text-[22px] italic font-serif font-medium leading-[1.6]" style={{ color: accentDeep }}>
            "Marketing attribution is like playing a competitive Topgolf game — every shot counts, but it's the combination of swings that makes a difference."
          </p>
        </div>

        <hr className="border-t border-[#e9d5ff] my-10" />

        {/* Attribution Models */}
        <section className="mb-12">
          <h2 className="text-[22px] font-serif font-bold text-brand-purple mb-4">Types of E-Commerce Attribution Models (Choosing Your Best Shot)</h2>
          <p className="mb-8">
            Just like in Topgolf, where different types of swings score differently, there are multiple ways to measure the effectiveness of marketing channels.
          </p>
          
          <div className="flex flex-col gap-4">
            <div className="bg-[#fff7fa] border border-[#fce4eb] p-5 rounded-2xl flex gap-4 md:gap-5 items-start shadow-sm transition-transform hover:-translate-y-1">
              <span className="text-3xl mt-1">🎯</span>
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">First-Click Attribution</h3>
                <p className="text-slate-600 text-[15px] leading-snug">Full credit goes to the first touchpoint. Best for brand awareness campaigns.</p>
              </div>
            </div>

            <div className="bg-[#fff7fa] border border-[#fce4eb] p-5 rounded-2xl flex gap-4 md:gap-5 items-start shadow-sm transition-transform hover:-translate-y-1">
              <span className="text-3xl mt-1">🏆</span>
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">Last-Click Attribution</h3>
                <p className="text-slate-600 text-[15px] leading-snug">The final touchpoint before purchase gets all the credit. Best for direct response campaigns.</p>
              </div>
            </div>

            <div className="bg-[#fff7fa] border border-[#fce4eb] p-5 rounded-2xl flex gap-4 md:gap-5 items-start shadow-sm transition-transform hover:-translate-y-1">
              <span className="text-3xl mt-1">⚖️</span>
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">Linear Attribution</h3>
                <p className="text-slate-600 text-[15px] leading-snug">Credit equally distributed across all touchpoints. Best for multi-channel marketing.</p>
              </div>
            </div>

            <div className="bg-[#fff7fa] border border-[#fce4eb] p-5 rounded-2xl flex gap-4 md:gap-5 items-start shadow-sm transition-transform hover:-translate-y-1">
              <span className="text-3xl mt-1">⏳</span>
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">Time-Decay Attribution</h3>
                <p className="text-slate-600 text-[15px] leading-snug">Touchpoints closer to conversion receive more credit. Best for long consideration cycles.</p>
              </div>
            </div>

            <div className="bg-[#fff7fa] border border-[#fce4eb] p-5 rounded-2xl flex gap-4 md:gap-5 items-start shadow-sm transition-transform hover:-translate-y-1">
              <span className="text-3xl mt-1">🧠</span>
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">Data-Driven Attribution</h3>
                <p className="text-slate-600 text-[15px] leading-snug">AI assigns credit based on actual influence. Best for large-scale complex campaigns.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t border-[#e9d5ff] my-10" />

        {/* Attribution Challenges */}
        <section className="mb-12">
          <h2 className="text-[22px] font-serif font-bold text-brand-purple mb-4">Challenges in Attribution for B2C E-Commerce</h2>
          <p className="mb-6">
            Attribution isn't always as straightforward as hitting the perfect shot. Brands often face challenges like:
          </p>
          <ul className="space-y-4 mb-6 border-l-2 border-[#e9d5ff] pl-4 md:pl-5 marker:text-brand-purple">
            <li className="flex gap-2.5 items-start">
              <span className="mt-0.5">🕵️‍♀️</span> 
              <div>
                <strong className="text-slate-800">Cross-Device Tracking</strong> — Consumers browse on phones, switch to laptops, and book on tablets.<br />
                <span className="text-brand-teal font-medium">Solution:</span> Implement platforms like Google Analytics 4 that support cross-device tracking.
              </div>
            </li>
            <li className="flex gap-2.5 items-start">
              <span className="mt-0.5">🕰️</span> 
              <div>
                <strong className="text-slate-800">Over-Reliance on Last-Click Attribution</strong> — Giving all credit to the last touchpoint ignores previous interactions.<br />
                <span className="text-brand-teal font-medium">Solution:</span> Use multi-touch attribution models for a more holistic view.
              </div>
            </li>
            <li className="flex gap-2.5 items-start">
              <span className="mt-0.5">🔐</span> 
              <div>
                <strong className="text-slate-800">Data Privacy and Loss of Third-Party Cookies</strong> — Privacy regulations like GDPR make tracking harder.<br />
                <span className="text-brand-teal font-medium">Solution:</span> Focus on first-party data through email subscriptions, loyalty programs, and surveys.
              </div>
            </li>
          </ul>
        </section>

        <hr className="border-t border-[#e9d5ff] my-10" />

        {/* Future of Attribution */}
        <section className="mb-12">
          <h2 className="text-[22px] font-serif font-bold text-brand-purple mb-4">The Future of Attribution: Smarter Swings with AI</h2>
          <p className="mb-4">
            The future of marketing attribution is all about AI-powered insights and privacy-friendly measurement.
          </p>
          <ul className="space-y-2 mb-6 border-l-2 border-[#e9d5ff] pl-4 md:pl-5 list-disc ml-4 marker:text-brand-purple">
            <li><strong className="text-slate-800">Predictive Attribution:</strong> AI will analyze customer data to predict which channels will perform best.</li>
            <li><strong className="text-slate-800">First-Party Data Management:</strong> B2C brands will rely more on direct interactions for insights.</li>
            <li><strong className="text-slate-800">Unified Measurement Models:</strong> Advanced systems will combine online and offline data for a clearer picture.</li>
          </ul>
          <p className="mb-4 font-medium text-slate-800 bg-[#f3e5f5]/30 p-4 rounded-xl">
            <span className="font-bold text-brand-purple mr-1">Example:</span> Topgolf could use predictive models to suggest when to launch regional campaigns based on past booking behavior.
          </p>
        </section>

        <hr className="border-t border-[#e9d5ff] my-10" />

        {/* Brand Examples */}
        <section className="mb-12">
          <h2 className="text-[22px] font-serif font-bold text-brand-purple mb-4">What Leading B2C Brands Are Doing in Attribution</h2>
          <p className="mb-4">
            Some B2C giants are leading the way with sophisticated attribution strategies:
          </p>
          <ul className="space-y-3 mb-6 border-l-2 border-[#e9d5ff] pl-4 md:pl-5 list-disc ml-4 marker:text-brand-purple">
            <li><strong className="text-slate-800">Amazon:</strong> Uses data-driven attribution to track external marketing campaigns, identifying which channels drive the most product purchases.</li>
            <li><strong className="text-slate-800">Nike:</strong> Leverages AI-powered analytics to measure how digital ads impact both online and in-store sales.</li>
            <li><strong className="text-slate-800">Sephora:</strong> Tracks customer behavior across its app, website, and stores using first-party data to determine the most effective marketing touchpoints.</li>
            <li><strong className="text-slate-800">Spotify:</strong> Uses real-time attribution to measure the success of podcast ads and recommend ad placements to brands.</li>
          </ul>
        </section>

        <hr className="border-t border-[#e9d5ff] my-10" />

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-[22px] font-serif font-bold text-brand-purple mb-4">Conclusion — Final Thoughts:</h2>
          <p className="mb-4">
            Marketing attribution is like playing a competitive Topgolf game — every shot counts, but it's the combination of swings that makes a difference. For B2C e-commerce brands, understanding which touchpoints are driving conversions is crucial for allocating budgets and maximizing ROI.
          </p>
          <p className="mb-6">
            And next time Instagram 'magically' serves you ads about a Topgolf outing just after a conversation with your friends — remember, that's not just coincidence. It's the power of smart attribution and personalized marketing.
          </p>

          {/* Tag row */}
          <div className="flex flex-wrap gap-2 mt-8">
            {['Content Marketing', 'B2C Marketing Strategy', 'Attribution Modeling', 'SEO Writing', 'eCommerce'].map((tag, i) => (
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
            <Link to="/blog/full-funnel-analytics" className="flex-1 bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between cursor-pointer">
              <h5 className="font-bold text-slate-800 text-lg leading-tight mb-6">Full Funnel Analytics in Music Streaming</h5>
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

export default BlogAttribution;
