import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layers3, MonitorSmartphone, Search, Users } from 'lucide-react';
import asuBrand from '../assets/Photo/Mainhomephoto/ASUBRANDPORT.png';
import CaseStudyMore from '../components/CaseStudyMore';

const highlightCards = [
  {
    title: 'Competitive Research',
    value: '4',
    detail: 'peer universities reviewed to benchmark positioning, messaging, and digital brand expression.',
    icon: <Search size={18} strokeWidth={1.8} />,
    tone: 'bg-[#E7F0E9]',
  },
  {
    title: 'Tools In Rotation',
    value: '3+',
    detail: 'Figma, Adobe XD, and Canto now anchor how I support creative workflows and asset organization.',
    icon: <Layers3 size={18} strokeWidth={1.8} />,
    tone: 'bg-[#EEE7F6]',
  },
  {
    title: 'Brand Learning',
    value: '1',
    detail: 'director-led workshop experience that sharpened how I think about systems, critique, and brand consistency.',
    icon: <Users size={18} strokeWidth={1.8} />,
    tone: 'bg-[#F7EBD8]',
  },
];

const contributionPoints = [
  'Managing and updating ASU brand website content in Drupal CMS so documentation stays clear, accurate, and aligned across touchpoints.',
  'Supporting brand operations across content, asset systems, and internal coordination while learning directly from senior creatives and strategists.',
  'Participating in UX Community sessions, Design Creative Exchange, and internal workshops to build stronger design and brand judgment in real time.',
];

const AsuProductionAssistant = () => {
  return (
    <div className="min-h-screen bg-[#F7F5F2] pt-24 md:pt-28">
      <section className="px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-[13px] md:text-sm text-brand-charcoal/68">
            <Link to="/" className="text-[#7EA898] transition-colors hover:text-brand-plum">
              Home
            </Link>
            <span className="mx-2 text-brand-charcoal/55">→</span>
            <Link to="/portfolio" className="text-[#7EA898] transition-colors hover:text-brand-plum">
              Portfolio
            </Link>
            <span className="mx-2 text-brand-charcoal/55">→</span>
            <span>Production Assistant</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center"
          >
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-[#7EA898]">Current Role Case Study</p>
              <h1 className="text-4xl font-serif font-bold leading-tight text-[#2F2F2F] md:text-5xl">
                Production Assistant at ASU Enterprise Brand Strategy &amp; Management
              </h1>
              <p className="mt-5 text-lg font-medium text-brand-plum">
                Oct 2025 - Present · Tempe, AZ
              </p>
              <p className="mt-6 max-w-2xl text-[16px] leading-[1.9] text-[#4C4C4C]">
                This role gave me direct exposure to how a large-scale university brand is managed behind the scenes. I contribute to research,
                digital brand operations, content systems, and day-to-day coordination while learning from creative directors and design leaders.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Brand Operations', 'Drupal CMS', 'Competitive Research', 'Creative Collaboration'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex rounded-full bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4B4B4B] shadow-[0_8px_20px_rgba(47,47,47,0.05)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[30px] border border-[#E5E3DF] bg-[linear-gradient(145deg,#e3efe7_0%,#ece4f4_52%,#f4efe8_100%)] p-4 shadow-[0_16px_36px_rgba(47,47,47,0.06)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(169,198,178,0.4),transparent_24%),radial-gradient(circle_at_78%_28%,rgba(189,178,214,0.38),transparent_26%),radial-gradient(circle_at_58%_80%,rgba(242,221,189,0.4),transparent_28%)]" />
              <div className="relative overflow-hidden rounded-[24px] border border-white/70">
                <img src={asuBrand} alt="ASU Enterprise Brand Strategy and Management" className="h-full min-h-[280px] w-full object-cover" />
              </div>
            </div>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: 'easeInOut' }}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {highlightCards.map((item) => (
              <div key={item.title} className={`${item.tone} rounded-[26px] border border-[#E5E3DF] p-6 shadow-[0_10px_24px_rgba(47,47,47,0.04)]`}>
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/72 text-[#4A4A4A]">
                    {item.icon}
                  </span>
                  <span className="text-4xl font-serif font-bold text-[#BA935B]">{item.value}</span>
                </div>
                <h2 className="mt-5 text-xl font-serif font-bold text-[#2F2F2F]">{item.title}</h2>
                <p className="mt-3 text-[14px] leading-[1.75] text-[#4C4C4C]">{item.detail}</p>
              </div>
            ))}
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: 'easeInOut' }}
            className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="rounded-[28px] border border-[#E5E3DF] bg-white p-7 shadow-[0_10px_24px_rgba(47,47,47,0.04)] md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#7EA898]">What I&apos;m Doing</p>
              <div className="mt-6 flex flex-col gap-5">
                {contributionPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#BA935B]" />
                    <p className="text-[15px] leading-[1.85] text-[#4C4C4C]">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-[#E5E3DF] bg-[#F2EFE8] p-7 shadow-[0_10px_24px_rgba(47,47,47,0.04)] md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#7EA898]">Why It Matters</p>
              <h2 className="mt-4 text-2xl font-serif font-bold text-[#2F2F2F]">Learning how strategy becomes execution</h2>
              <p className="mt-4 text-[15px] leading-[1.85] text-[#4C4C4C]">
                What makes this experience meaningful is not just the tasks themselves, but the level of proximity to real decision-making. I&apos;m seeing how
                research, system thinking, content governance, and creative direction all work together inside a major brand environment.
              </p>
              <div className="mt-6 flex items-start gap-3 rounded-[22px] bg-white/72 px-5 py-4">
                <MonitorSmartphone size={18} strokeWidth={1.8} className="mt-1 text-[#4A4A4A]" />
                <p className="text-[14px] leading-[1.75] text-[#4C4C4C]">
                  This role is helping me build stronger instincts in brand systems, digital operations, and cross-functional collaboration.
                </p>
              </div>
            </div>
          </motion.section>

        </div>
      </section>

      <CaseStudyMore currentId="asu-production-assistant" />
    </div>
  );
};

export default AsuProductionAssistant;
