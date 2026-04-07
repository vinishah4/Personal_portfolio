import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Globe2, TriangleAlert, SearchCheck, Briefcase, GraduationCap, Users, Database, Map, BarChart3, CircleDollarSign, CheckCheck } from 'lucide-react';
import CaseStudyMore from '../components/CaseStudyMore';

const stageMotion = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: 'easeInOut' },
};

const insightCards = [
  'High effort, low efficiency job search',
  'Lack of employer transparency',
  'No centralized guidance system',
  'Over-reliance on informal information',
];

const productCards = [
  { title: 'Visa-Friendly Employer Database', body: 'Makes sponsorship reality visible before students waste time applying.', icon: <Database size={18} strokeWidth={1.8} /> },
  { title: 'Career Resource Hub', body: 'Centralizes structured guidance instead of scattering it across disconnected sources.', icon: <GraduationCap size={18} strokeWidth={1.8} /> },
  { title: 'Alumni Mentorship Network', body: 'Adds human support through peers who understand the same constraints.', icon: <Users size={18} strokeWidth={1.8} /> },
  { title: 'Career Roadmaps', body: 'Turns uncertainty into step-by-step navigation by stage, goal, and visa reality.', icon: <Map size={18} strokeWidth={1.8} /> },
];

const gtmCards = [
  'Content marketing (career guides)',
  'Social media (LinkedIn, communities)',
  'University partnerships',
  'Referral growth',
];

const businessModelCards = [
  { label: 'Free', items: ['Core guidance', 'Resources'] },
  { label: 'Paid', items: ['Resume reviews', 'Mentorship', 'Employer insights'] },
  { label: 'Revenue', items: ['Subscriptions', 'Employer partnerships', 'Sponsored listings'] },
];

const stages = [
  { id: 'stage-1', label: 'Understanding the Problem' },
  { id: 'stage-2', label: 'Key Insights' },
  { id: 'stage-3', label: 'Defining the Solution' },
  { id: 'stage-4', label: 'Product Design' },
  { id: 'stage-5', label: 'Competitive Landscape' },
  { id: 'stage-6', label: 'Validation Approach' },
  { id: 'stage-7', label: 'Go-to-Market' },
  { id: 'stage-8', label: 'Development Roadmap' },
  { id: 'stage-9', label: 'Business Model' },
  { id: 'stage-10', label: 'Impact' },
];

const BridgeCareerPlatform = () => {
  return (
    <div className="min-h-screen bg-[#FDFAF6] pt-24 md:pt-28">
      <div className="sticky top-24 z-40 px-4 md:px-8 pt-2">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 rounded-full border border-brand-line/80 bg-brand-white/80 px-4 py-2 text-sm font-semibold text-[#5DCAA5] backdrop-blur-md hover:text-brand-plum transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>
      </div>

      <section className="px-6 md:px-10 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-[13px] md:text-sm text-brand-charcoal/68">
            <Link to="/" className="text-[#5DCAA5] hover:text-brand-plum transition-colors">Home</Link>
            <span className="mx-2 text-brand-charcoal/55">→</span>
            <Link to="/portfolio" className="text-[#5DCAA5] hover:text-brand-plum transition-colors">Portfolio</Link>
            <span className="mx-2 text-brand-charcoal/55">→</span>
            <span>BridgeCareer Platform Strategy</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="rounded-[34px] bg-[linear-gradient(180deg,#eef1fb_0%,#e8f0f4_52%,#f6f5ed_100%)] border border-brand-line/70 p-8 md:p-10 shadow-[0_20px_55px_rgba(110,93,121,0.08)]"
          >
            <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#5DCAA5]">Journey-Based Case Study</p>
            <h1 className="mt-5 text-4xl md:text-5xl font-serif font-bold text-brand-plum leading-tight">
              BridgeCareer — Bridging International Students to Global Careers
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-[1.9] text-brand-charcoal">
              Designing a platform to simplify the job search journey for international students through structured guidance, employer transparency, and mentorship.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ['1.1M+', 'international students in the U.S.'],
                ['$43B', 'economic contribution'],
                ['<15%', 'employers sponsor visas'],
              ].map(([value, label], index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: 'easeInOut', delay: index * 0.08 }}
                  className="rounded-[22px] bg-brand-white/75 px-5 py-5 border border-brand-line/60"
                >
                  <div className="text-3xl font-serif font-bold text-brand-plum">{value}</div>
                  <div className="mt-2 text-sm text-brand-charcoal/78">{label}</div>
                </motion.div>
              ))}
            </div>

            <a href="#journey-start" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-plum hover:text-brand-gold transition-colors">
              Start the journey
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-6">
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <div className="flex gap-3 min-w-max">
            {stages.map((stage, index) => (
              <a
                key={stage.id}
                href={`#${stage.id}`}
                className="rounded-full bg-brand-white border border-brand-line/60 px-4 py-2 text-xs font-semibold text-brand-charcoal/78 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9CCFC3] hover:text-brand-plum"
              >
                {index + 1}. {stage.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div id="journey-start" className="px-6 md:px-10 pb-20 md:pb-24">
        <div className="max-w-6xl mx-auto space-y-8">
          <motion.section id="stage-1" {...stageMotion} className="rounded-[30px] bg-brand-white border border-brand-line/70 p-7 md:p-8 shadow-[0_16px_40px_rgba(110,93,121,0.06)] scroll-mt-32">
            <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#5DCAA5]">Stage 1 · Understanding the Problem</p>
            <h2 className="mt-4 text-3xl font-serif font-bold text-brand-plum">Where the career journey breaks down</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center text-center">
              {[
                { icon: <Globe2 size={18} strokeWidth={1.8} />, title: 'International Students', body: 'Navigating U.S. hiring as a distinct user group' },
                { icon: <TriangleAlert size={18} strokeWidth={1.8} />, title: 'Limited Visa Sponsorship', body: 'Access narrowed before the search even starts' },
                { icon: <SearchCheck size={18} strokeWidth={1.8} />, title: 'Lack of Career Guidance', body: 'Advice is inconsistent, scattered, and hard to trust' },
                { icon: <Briefcase size={18} strokeWidth={1.8} />, title: 'Non-Sponsoring Applications', body: 'Students spend time on roles that cannot convert' },
                { icon: <BarChart3 size={18} strokeWidth={1.8} />, title: 'Inefficient Job Search', body: 'Energy is lost in uncertainty instead of progress' },
              ].map((item, index) => (
                <div key={item.title} className="contents">
                  <div className="rounded-[22px] bg-brand-lavender/40 px-4 py-5 border border-brand-line/60">
                    <div className="flex items-center justify-center gap-2 text-brand-plum">
                      {item.icon}
                      <span className="text-sm font-semibold">{item.title}</span>
                    </div>
                    <p className="mt-3 text-[13px] leading-[1.7] text-brand-charcoal">{item.body}</p>
                  </div>
                  {index < 4 ? (
                    <div className="hidden md:flex justify-center text-[#9CCFC3]">
                      <ArrowRight size={18} />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
            <p className="mt-6 text-[15px] leading-[1.9] text-brand-charcoal">
              International students rely on fragmented sources like forums, peers, and guesswork instead of structured systems.
            </p>
          </motion.section>

          <motion.section id="stage-2" {...stageMotion} className="rounded-[30px] bg-brand-white border border-brand-line/70 p-7 md:p-8 shadow-[0_16px_40px_rgba(110,93,121,0.06)] scroll-mt-32">
            <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#5DCAA5]">Stage 2 · Key Insights</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {insightCards.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, ease: 'easeInOut', delay: index * 0.08 }}
                  className="rounded-[22px] bg-brand-cream px-5 py-5 border border-brand-line/60 hover:-translate-y-1 transition-transform duration-300"
                >
                  <p className="text-[15px] leading-[1.8] text-brand-charcoal">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section id="stage-3" {...stageMotion} className="rounded-[30px] bg-brand-white border border-brand-line/70 p-7 md:p-8 shadow-[0_16px_40px_rgba(110,93,121,0.06)] scroll-mt-32">
            <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#5DCAA5]">Stage 3 · Defining the Solution</p>
            <h2 className="mt-4 text-3xl font-serif font-bold text-brand-plum">Designing BridgeCareer</h2>
            <p className="mt-4 max-w-3xl text-[16px] leading-[1.9] text-brand-charcoal">
              A centralized platform combining employer transparency, career guidance, and mentorship. Instead of scattered tools, the platform integrates everything into one system.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { icon: <BarChart3 size={20} strokeWidth={1.8} />, title: 'Employer Transparency' },
                { icon: <GraduationCap size={20} strokeWidth={1.8} />, title: 'Career Guidance' },
                { icon: <Users size={20} strokeWidth={1.8} />, title: 'Mentorship Network' },
              ].map((item) => (
                <div key={item.title} className="rounded-[22px] bg-brand-sage/40 px-5 py-6 border border-brand-line/60 text-center">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-brand-white/75 text-brand-plum">
                    {item.icon}
                  </div>
                  <p className="mt-3 text-lg font-semibold text-brand-plum">{item.title}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section id="stage-4" {...stageMotion} className="rounded-[30px] bg-brand-white border border-brand-line/70 p-7 md:p-8 shadow-[0_16px_40px_rgba(110,93,121,0.06)] scroll-mt-32">
            <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#5DCAA5]">Stage 4 · Product Design</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {productCards.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, ease: 'easeInOut', delay: index * 0.08 }}
                  className="rounded-[22px] bg-brand-lavender/40 px-5 py-5 border border-brand-line/60"
                >
                  <div className="flex items-center gap-3 text-brand-plum">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-white/80">
                      {item.icon}
                    </span>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-[14px] leading-[1.75] text-brand-charcoal">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section id="stage-5" {...stageMotion} className="rounded-[30px] bg-brand-white border border-brand-line/70 p-7 md:p-8 shadow-[0_16px_40px_rgba(110,93,121,0.06)] scroll-mt-32">
            <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#5DCAA5]">Stage 5 · Competitive Landscape</p>
            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {[
                ['LinkedIn', 'Strong networking, no visa clarity'],
                ['University Career Services', 'General guidance, not specialized'],
                ['Forums (Reddit, groups)', 'Unstructured and unreliable'],
              ].map(([title, body]) => (
                <div key={title} className="rounded-[22px] bg-brand-cream px-5 py-5 border border-brand-line/60">
                  <h3 className="text-lg font-semibold text-brand-plum">{title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.75] text-brand-charcoal">{body}</p>
                </div>
              ))}
              <div className="rounded-[22px] bg-[linear-gradient(135deg,#e8f1f4_0%,#f3ecfa_100%)] px-5 py-5 border border-brand-line/60">
                <h3 className="text-lg font-semibold text-brand-plum">BridgeCareer</h3>
                <p className="mt-3 text-[14px] leading-[1.75] text-brand-charcoal">Structured + Transparent + Specialized</p>
              </div>
            </div>
          </motion.section>

          <motion.section id="stage-6" {...stageMotion} className="rounded-[30px] bg-brand-white border border-brand-line/70 p-7 md:p-8 shadow-[0_16px_40px_rgba(110,93,121,0.06)] scroll-mt-32">
            <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#5DCAA5]">Stage 6 · Validation Approach</p>
            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] mt-6">
              <div className="rounded-[22px] bg-brand-peach/35 p-6 border border-brand-line/60">
                <div className="space-y-3">
                  {[
                    'Conducted student interviews (20–30 participants)',
                    'Distributed surveys across student communities',
                    'Designed landing page + waitlist',
                    'Measured engagement funnel',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCheck size={18} strokeWidth={1.8} className="text-[#5DCAA5] mt-0.5" />
                      <span className="text-[15px] leading-[1.75] text-brand-charcoal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[22px] bg-brand-white border border-brand-line/60 p-6">
                <p className="text-sm font-semibold text-brand-plum">Engagement funnel</p>
                <div className="mt-5 flex flex-col gap-3">
                  {[
                    ['Awareness', '100%'],
                    ['Interest', '82%'],
                    ['Trial', '58%'],
                    ['Engagement', '41%'],
                    ['Conversion', '27%'],
                  ].map(([label, width]) => (
                    <div key={label}>
                      <div className="mb-1 flex items-center justify-between text-xs uppercase tracking-[0.14em] text-brand-charcoal/70">
                        <span>{label}</span>
                        <span>{width}</span>
                      </div>
                      <div className="h-3 rounded-full bg-brand-cream">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width }}
                          viewport={{ once: true, margin: '-40px' }}
                          transition={{ duration: 0.6, ease: 'easeInOut' }}
                          className="h-3 rounded-full bg-[#5DCAA5]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section id="stage-7" {...stageMotion} className="rounded-[30px] bg-brand-white border border-brand-line/70 p-7 md:p-8 shadow-[0_16px_40px_rgba(110,93,121,0.06)] scroll-mt-32">
            <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#5DCAA5]">Stage 7 · Go-to-Market</p>
            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {gtmCards.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, ease: 'easeInOut', delay: index * 0.08 }}
                  className="rounded-[22px] bg-brand-sage/35 px-5 py-5 border border-brand-line/60"
                >
                  <p className="text-[15px] leading-[1.75] text-brand-charcoal">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section id="stage-8" {...stageMotion} className="rounded-[30px] bg-brand-white border border-brand-line/70 p-7 md:p-8 shadow-[0_16px_40px_rgba(110,93,121,0.06)] scroll-mt-32">
            <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#5DCAA5]">Stage 8 · Development Roadmap</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                ['Phase 1 (0–6 months)', 'MVP: employer database + resume tools'],
                ['Phase 2 (6–12 months)', 'AI tools + mentorship system'],
                ['Phase 3 (12–24 months)', 'Scale through partnerships'],
              ].map(([title, body], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, ease: 'easeInOut', delay: index * 0.08 }}
                  className="rounded-[22px] bg-brand-blush/35 px-5 py-5 border border-brand-line/60"
                >
                  <h3 className="text-lg font-semibold text-brand-plum">{title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.75] text-brand-charcoal">{body}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section id="stage-9" {...stageMotion} className="rounded-[30px] bg-brand-white border border-brand-line/70 p-7 md:p-8 shadow-[0_16px_40px_rgba(110,93,121,0.06)] scroll-mt-32">
            <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#5DCAA5]">Stage 9 · Business Model</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {businessModelCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, ease: 'easeInOut', delay: index * 0.08 }}
                  className="rounded-[22px] bg-brand-cream px-5 py-5 border border-brand-line/60"
                >
                  <div className="flex items-center gap-2 text-brand-plum">
                    <CircleDollarSign size={18} strokeWidth={1.8} />
                    <h3 className="text-lg font-semibold">{card.label}</h3>
                  </div>
                  <ul className="mt-4 space-y-2 text-[14px] leading-[1.7] text-brand-charcoal">
                    {card.items.map((item) => <li key={item}>• {item}</li>)}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section id="stage-10" {...stageMotion} className="rounded-[30px] bg-brand-white border border-brand-line/70 p-7 md:p-8 shadow-[0_16px_40px_rgba(110,93,121,0.06)] scroll-mt-32">
            <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#5DCAA5]">Stage 10 · Impact</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                'Reduces wasted job applications',
                'Improves clarity for international students',
                'Creates structured career navigation',
              ].map((item) => (
                <div key={item} className="rounded-[22px] bg-brand-lavender/40 px-5 py-5 border border-brand-line/60">
                  <p className="text-[15px] leading-[1.8] text-brand-charcoal">{item}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section {...stageMotion} className="rounded-[32px] bg-[linear-gradient(180deg,#f6f5ed_0%,#eef1fb_100%)] border border-brand-line/70 p-8 md:p-10 shadow-[0_16px_40px_rgba(110,93,121,0.06)] text-center">
            <p className="text-[20px] md:text-[22px] italic font-serif leading-[1.95] text-brand-plum max-w-3xl mx-auto">
              This project pushed me to think beyond analysis and into building a solution. I focused on simplifying a complex and often frustrating process by designing a system that brings clarity, structure, and access to international students navigating their careers.
            </p>
          </motion.section>
        </div>
      </div>

      <CaseStudyMore currentId="bridgecareer-platform-strategy" />
    </div>
  );
};

export default BridgeCareerPlatform;
