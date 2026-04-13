import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CharacterFigure from '../components/CharacterFigure';

const BlogMinecraft = () => {
  const { pathname } = useLocation();
  const accent = '#A8BFB0';
  const accentSoft = '#EAF4EE';
  const accentDeep = '#5F7A67';

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
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop" 
          alt="Minecraft block layout" 
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
          style={{ background: 'linear-gradient(180deg, rgba(95,122,103,0.2) 0%, rgba(38,47,40,0.72) 100%)' }}
        >
          <div className="max-w-[720px] mx-auto w-full pt-16 md:pt-0">
            <span className="inline-block px-3 py-1 text-white text-[11px] font-bold uppercase tracking-widest rounded-full mb-4" style={{ backgroundColor: accentDeep }}>
              Data & Brand
            </span>
            <h1 className="text-3xl md:text-[40px] font-serif font-bold text-white leading-tight mb-4 md:mb-6">
              What the Minecraft Movie Can Teach Us About Building a Strong Data Foundation
            </h1>
            <div className="flex flex-col md:flex-row md:items-center text-slate-200 text-[13px] md:text-sm gap-2 md:gap-4 font-medium opacity-90">
              <span className="uppercase tracking-wider" style={{ color: '#E7F3EA' }}>By Vinita Shah · Content Marketing Intern at iCustomer</span>
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
          <h2 className="text-[22px] font-serif font-bold text-brand-purple mb-4">Opening — Introduction: From Pixels to Promotions</h2>
          <p className="mb-4">
            Walk into a McDonald's today and you'll see it — Minecraft toys, pixel-themed Happy Meal boxes, and QR codes that bridge physical packaging to digital engagement. The Minecraft movie isn't just launching — it's taking over.
          </p>
          <p className="mb-4">
            From fast food counters to TikTok, the campaign is flawlessly coordinated. But it didn't happen by accident. This kind of unified customer experience — spread across regions, platforms, and audiences — only works when the foundation beneath it is solid.
          </p>
          <p className="mb-4">
            And for businesses aiming to scale, delight, and convert across B2B and B2C, the same principle applies: A strong data foundation is the secret behind every seamless experience.
          </p>
        </section>

        <hr className="my-10 border-t" style={{ borderColor: accent }} />

        {/* Omnichannel Storytelling */}
        <section className="mb-12">
          <h2 className="text-[22px] font-serif font-bold mb-4" style={{ color: accentDeep }}>Why It Works: One Story, Many Channels</h2>
          <p className="mb-4">
            The Minecraft movie rollout is a case study in omnichannel mastery. Whether it's a toy in a Happy Meal, a trailer on YouTube, or a branded game skin in-app — every touchpoint is aligned, timely, and engaging. This doesn't just 'feel right' to the customer — it drives results.
          </p>
          <p className="mb-4">
            Behind the scenes, real-time data is likely informing:
          </p>
          <ul className="space-y-2 mb-6 border-l-2 border-[#e9d5ff] pl-4 md:pl-5 marker:text-brand-purple list-none">
            <li className="flex gap-2.5"><span>—</span> <span>Which characters or toys are resonating in which regions</span></li>
            <li className="flex gap-2.5"><span>—</span> <span>What content is trending and being reshared</span></li>
            <li className="flex gap-2.5"><span>—</span> <span>How digital engagement links back to physical purchases</span></li>
            <li className="flex gap-2.5"><span>—</span> <span>What promotions convert different audience segments best</span></li>
          </ul>
          <p className="mb-4 font-bold text-slate-800">
            None of this is possible without clean, integrated, and intelligently activated data. That's the power of a strong data foundation.
          </p>
        </section>

        <hr className="my-10 border-t" style={{ borderColor: accent }} />

        {/* Business Mandate */}
        <section className="mb-12">
          <h2 className="text-[22px] font-serif font-bold mb-4" style={{ color: accentDeep }}>It's Not Just for Movies — It's a Business Mandate</h2>
          <p className="mb-8">
            Whether you're selling software, shoes, or services — relevance, personalization, and coordination are expected. And to meet those expectations, your data has to work harder than ever.
            <br />That means investing in:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl shadow-sm hover:shadow-md transition-all" style={{ backgroundColor: accentSoft }}>
              <div className="text-2xl mb-2">📊</div>
              <h3 className="font-bold text-lg mb-1" style={{ color: accentDeep }}>Data Quality</h3>
              <p className="text-slate-600 text-[14px] leading-tight">Clean, consistent inputs = smart outputs</p>
            </div>

            <div className="p-5 rounded-2xl shadow-sm hover:shadow-md transition-all" style={{ backgroundColor: accentSoft }}>
              <div className="text-2xl mb-2">🔐</div>
              <h3 className="font-bold text-lg mb-1" style={{ color: accentDeep }}>Data Governance & Assurance</h3>
              <p className="text-slate-600 text-[14px] leading-tight">Protect trust, meet compliance</p>
            </div>

            <div className="p-5 rounded-2xl shadow-sm hover:shadow-md transition-all" style={{ backgroundColor: accentSoft }}>
              <div className="text-2xl mb-2">🏗️</div>
              <h3 className="font-bold text-lg mb-1" style={{ color: accentDeep }}>Data Architecture</h3>
              <p className="text-slate-600 text-[14px] leading-tight">Systems that scale as you grow</p>
            </div>

            <div className="p-5 rounded-2xl shadow-sm hover:shadow-md transition-all" style={{ backgroundColor: accentSoft }}>
              <div className="text-2xl mb-2">🔍</div>
              <h3 className="font-bold text-lg mb-1" style={{ color: accentDeep }}>Data Discovery & Visualization</h3>
              <p className="text-slate-600 text-[14px] leading-tight">Insights that guide decisions</p>
            </div>

            <div className="bg-[#f3e5f5] p-5 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="text-2xl mb-2">🧠</div>
              <h3 className="font-bold text-brand-purple text-lg mb-1">Data-Driven Culture</h3>
              <p className="text-slate-600 text-[14px] leading-tight">Teams empowered by clarity, not chaos</p>
            </div>

            <div className="bg-[#f3e5f5] p-5 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="text-2xl mb-2">💰</div>
              <h3 className="font-bold text-brand-purple text-lg mb-1">Data Monetization</h3>
              <p className="text-slate-600 text-[14px] leading-tight">Prove ROI, track impact, repeat</p>
            </div>
          </div>
        </section>

        <hr className="border-t border-[#e9d5ff] my-10" />

        {/* Coordination */}
        <section className="mb-12">
          <h2 className="text-[22px] font-serif font-bold text-brand-purple mb-4">From Campaigns to Coordination</h2>
          <p className="mb-4">
            Just like a blockbuster needs toys, trailers, influencers, and merchandise to win hearts across the board, businesses need alignment between:
          </p>
          <ul className="space-y-2 mb-6 border-l-2 border-[#e9d5ff] pl-4 md:pl-5 marker:text-brand-purple list-none">
            <li className="flex gap-2.5"><span>—</span> <span>Marketing & Sales</span></li>
            <li className="flex gap-2.5"><span>—</span> <span>Digital & In-store</span></li>
            <li className="flex gap-2.5"><span>—</span> <span>Product & Support</span></li>
            <li className="flex gap-2.5"><span>—</span> <span>Strategy & Operations</span></li>
          </ul>
          <p className="mb-4">
            This only works when data flows freely and securely between teams — allowing insights to drive every interaction, internally and externally.
          </p>
        </section>

        <hr className="border-t border-[#e9d5ff] my-10" />

        {/* Missing Foundation Warning */}
        <section className="mb-12">
          <h2 className="text-[22px] font-serif font-bold text-brand-purple mb-4">What Happens When the Foundation is Missing?</h2>
          
          <div className="bg-[#fff0f3] border-2 border-[#ffc2d1] rounded-[24px] p-6 md:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute -top-10 -right-6 text-[120px] opacity-[0.03] select-none hover:opacity-[0.05] transition-opacity">⚠️</div>
            <p className="mb-6 font-bold text-[#b00020] text-lg">
              Let's flip the analogy: Imagine launching Minecraft with —
            </p>
            <ul className="space-y-4 mb-8 pl-2 md:pl-4 marker:text-[#b00020] list-none">
              <li className="flex gap-3 text-[#b00020] items-start">
                <span className="font-bold mt-1 text-xs px-2 py-0.5 bg-[#ffc2d1]/50 rounded-md">Error</span> 
                <span className="font-medium">Different character names in every region</span>
              </li>
              <li className="flex gap-3 text-[#b00020] items-start">
                <span className="font-bold mt-1 text-xs px-2 py-0.5 bg-[#ffc2d1]/50 rounded-md">Error</span> 
                <span className="font-medium">Toys that don't match the digital experience</span>
              </li>
              <li className="flex gap-3 text-[#b00020] items-start">
                <span className="font-bold mt-1 text-xs px-2 py-0.5 bg-[#ffc2d1]/50 rounded-md">Error</span> 
                <span className="font-medium">Offers that don't work in half the locations</span>
              </li>
              <li className="flex gap-3 text-[#b00020] items-start">
                <span className="font-bold mt-1 text-xs px-2 py-0.5 bg-[#ffc2d1]/50 rounded-md">Error</span> 
                <span className="font-medium">Confusing, conflicting messaging on social media</span>
              </li>
            </ul>
            <p className="font-bold text-[#8a0018] text-lg leading-tight border-l-4 border-[#ffc2d1] pl-4">
              That's what fragmented data creates in business: Friction. Missed opportunities. Lost trust.
            </p>
          </div>
        </section>

        <hr className="border-t border-[#e9d5ff] my-10" />

        {/* Pull Quote */}
        <div className="my-14 bg-[#f3e5f5]/80 p-8 md:p-12 rounded-2xl border-l-4 border-brand-purple text-center flex items-center justify-center shadow-sm">
          <p className="text-xl md:text-[24px] italic font-serif text-brand-purple font-bold leading-[1.6]">
            "You can't launch world-class experiences on a shaky foundation. Start with the data. Build from there."
          </p>
        </div>

        <hr className="border-t border-[#e9d5ff] my-10" />

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-[22px] font-serif font-bold text-brand-purple mb-4">Conclusion — Final Takeaway: The Strongest Builds Start Below the Surface</h2>
          <p className="mb-4">Minecraft is built block by block. The same goes for business.</p>
          <p className="mb-4">
            Your analytics, customer experience, go-to-market strategy, and operations only shine when the underlying data is well-structured, scalable, and secure.
          </p>
          <p className="mb-4">So whether you're a B2B tech firm or a retail brand, remember:</p>
          <p className="mb-4 font-bold text-slate-800 text-lg">
            You can't launch world-class experiences on a shaky foundation.
          </p>
          <p className="mb-6 font-medium text-slate-800">
            Start with the data. Build from there. And let every block stack into something unforgettable.
          </p>

          {/* Hashtag row */}
          <div className="flex flex-wrap gap-2 mt-8 mb-6 pb-6 border-b border-slate-100">
            {['#DataFoundation', '#MinecraftMovie', '#CustomerExperience', '#DigitalStrategy', '#B2BMarketing', '#B2CRetail', '#ScalableSystems', '#OmnichannelSuccess', '#MarketingTechnology', '#DataDrivenGrowth'].map((tag, i) => (
              <span key={i} className="px-3 py-1.5 bg-brand-teal text-white text-[11px] font-bold tracking-widest uppercase rounded-full shadow-sm shadow-brand-teal/20">
                {tag}
              </span>
            ))}
          </div>

          {/* Skill Tag row */}
          <div className="flex flex-wrap gap-2">
            {['Content Marketing', 'Data Strategy', 'Omnichannel Marketing', 'B2B & B2C', 'SEO Writing'].map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-[#f3e5f5] text-brand-purple text-[12px] font-bold tracking-wide rounded-full">
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

            <Link to="/blog/marketing-attribution" className="flex-1 bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between cursor-pointer">
              <h5 className="font-bold text-slate-800 text-lg leading-tight mb-6">Marketing Attribution in B2C · Topgolf Style</h5>
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

export default BlogMinecraft;
