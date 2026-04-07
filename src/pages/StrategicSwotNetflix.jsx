import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ShieldCheck,
  AlertTriangle,
  Rocket,
  Radar,
  LineChart,
  Sparkles,
  ShieldAlert,
  Target,
  CheckCircle2,
} from 'lucide-react';
import CaseStudyMore from '../components/CaseStudyMore';

const swotQuadrants = [
  {
    id: 'strengths',
    title: 'Strengths',
    color: 'bg-[#A8BFB0]/55',
    icon: <ShieldCheck size={18} strokeWidth={1.8} />,
    points: [
      'Global brand recognition and scale',
      'Strong original content engine',
      'Large subscriber base with recurring revenue',
      'Data-driven personalization capabilities',
    ],
    detail:
      'Netflix has built a powerful global platform with a recognizable brand, a proven subscription model, and recommendation systems that reinforce retention. Its content scale gives it a meaningful advantage in keeping viewers inside one ecosystem.',
  },
  {
    id: 'weaknesses',
    title: 'Weaknesses',
    color: 'bg-[#E7D8D4]/72',
    icon: <AlertTriangle size={18} strokeWidth={1.8} />,
    points: [
      'High content production and licensing costs',
      'Ongoing pressure on margins',
      'Dependence on subscriber growth',
      'Limited diversification outside streaming',
    ],
    detail:
      'The same content-first strategy that drives differentiation also creates financial pressure. Heavy investment requirements make profitability more sensitive to churn, market saturation, and the cost of maintaining a premium content pipeline.',
  },
  {
    id: 'opportunities',
    title: 'Opportunities',
    color: 'bg-[#AFC3D2]/58',
    icon: <Rocket size={18} strokeWidth={1.8} />,
    points: [
      'Expand ad-supported and tiered offerings',
      'Grow in emerging international markets',
      'Increase monetization of franchises',
      'Strengthen partnerships and bundled distribution',
    ],
    detail:
      'Netflix has room to grow by serving more price-sensitive users, deepening international reach, and extending successful content into broader ecosystems. These moves support both revenue diversification and long-term resilience.',
  },
  {
    id: 'threats',
    title: 'Threats',
    color: 'bg-[#D6CCE3]/62',
    icon: <Radar size={18} strokeWidth={1.8} />,
    points: [
      'Intense competition from major platforms',
      'Shifting consumer attention and loyalty',
      'Regulatory and content market complexity',
      'Password-sharing and pricing sensitivity',
    ],
    detail:
      'Streaming competition is no longer limited to entertainment quality alone. Price sensitivity, fragmented viewer attention, and aggressive platform strategies increase the pressure on Netflix to differentiate while protecting retention and perceived value.',
  },
];

const insightCards = [
  {
    title: 'Market Pressure',
    body: 'Streaming has become a mature, crowded category where price, content quality, and retention strategy all matter at once.',
    icon: <LineChart size={18} strokeWidth={1.8} />,
  },
  {
    title: 'Competitive Advantage',
    body: 'Netflix still benefits from brand scale, global reach, and a recommendation engine that makes discovery feel effortless.',
    icon: <Sparkles size={18} strokeWidth={1.8} />,
  },
  {
    title: 'Risk Areas',
    body: 'High content spend and limited diversification create pressure if subscriber growth slows or churn rises.',
    icon: <ShieldAlert size={18} strokeWidth={1.8} />,
  },
  {
    title: 'Growth Opportunities',
    body: 'Tiered pricing, ad-supported plans, and international expansion create clear room for strategic growth.',
    icon: <Target size={18} strokeWidth={1.8} />,
  },
];

const strategicOptions = [
  {
    title: 'Option A',
    subtitle: 'Content Differentiation Focus',
    body: 'Double down on premium originals and franchise-building to reinforce platform loyalty.',
    bullets: ['Strengthens brand identity', 'Supports pricing power', 'Tradeoff: keeps spend pressure high'],
  },
  {
    title: 'Option B',
    subtitle: 'Pricing & Monetization Expansion',
    body: 'Use tiered plans and ad-supported growth to widen access without fully diluting premium positioning.',
    bullets: ['Captures price-sensitive users', 'Diversifies revenue', 'Tradeoff: requires careful brand balance'],
  },
  {
    title: 'Option C',
    subtitle: 'Global Market Deepening',
    body: 'Prioritize localized expansion and partnership strategies in high-growth international regions.',
    bullets: ['Unlocks new subscriber growth', 'Improves market relevance', 'Tradeoff: execution varies by region'],
  },
];

const sectionMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.55, ease: 'easeInOut' },
};

const StrategicSwotNetflix = () => {
  const [activeQuadrant, setActiveQuadrant] = useState(swotQuadrants[0]);

  return (
    <div className="min-h-screen bg-[#F7F5F2] pt-24 md:pt-28">
      <div className="sticky top-24 z-40 px-4 md:px-8 pt-2">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 rounded-full border border-brand-line/80 bg-brand-white/85 px-4 py-2 text-sm font-semibold text-[#5DCAA5] backdrop-blur-md transition-colors hover:text-brand-plum"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>
      </div>

      <section className="px-6 md:px-10 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-[13px] md:text-sm text-brand-charcoal/68">
            <Link to="/" className="text-[#5DCAA5] transition-colors hover:text-brand-plum">Home</Link>
            <span className="mx-2 text-brand-charcoal/55">→</span>
            <Link to="/portfolio" className="text-[#5DCAA5] transition-colors hover:text-brand-plum">Portfolio</Link>
            <span className="mx-2 text-brand-charcoal/55">→</span>
            <span>Strategic SWOT Analysis — Netflix</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="rounded-[32px] bg-brand-white px-8 py-10 md:px-12 md:py-14 shadow-[0_12px_32px_rgba(47,47,47,0.06)]"
          >
            <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#7EA898]">Strategy Case Study</p>
            <div className="mt-5 flex justify-center">
              <div className="inline-flex items-center gap-3 rounded-full bg-[#F1EEE8] px-4 py-2.5 text-sm font-semibold text-[#2F2F2F] shadow-[0_4px_14px_rgba(47,47,47,0.04)]">
                <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#E50914] font-serif text-base font-bold text-white shadow-[0_6px_12px_rgba(229,9,20,0.2)]">
                  N
                </span>
                <span className="tracking-[0.08em] uppercase text-[#565656]">Netflix</span>
              </div>
            </div>
            <h1 className="mt-5 text-center text-4xl font-serif font-bold leading-tight text-[#2F2F2F] md:text-5xl">
              Strategic SWOT Analysis — Netflix
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-[1.9] text-[#4A4A4A]">
              Evaluating internal capabilities and external forces to identify strategic growth opportunities.
            </p>
            <div className="mx-auto mt-8 h-px max-w-3xl bg-[#D8D3CB]" />
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            {...sectionMotion}
            className="rounded-[24px] bg-brand-white px-6 py-6 md:px-7 md:py-7 shadow-[0_10px_24px_rgba(47,47,47,0.04)]"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7EA898]">Context</p>
            <p className="mt-4 max-w-4xl text-[16px] leading-[1.9] text-[#4A4A4A]">
              Netflix remains one of the most influential players in streaming, but it operates in a market defined by rising competition,
              high content costs, shifting subscriber expectations, and constant pressure to prove value. This SWOT analysis was designed to
              organize those forces clearly and turn them into focused strategic options.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-10">
        <div className="mx-auto max-w-6xl">
          <motion.div {...sectionMotion}>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1.2fr_0.9fr]">
              <div className="rounded-[28px] bg-brand-white p-6 md:p-7 shadow-[0_10px_24px_rgba(47,47,47,0.04)]">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7EA898]">SWOT Matrix</p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {swotQuadrants.map((quadrant) => {
                    const isActive = activeQuadrant.id === quadrant.id;
                    return (
                      <button
                        key={quadrant.id}
                        type="button"
                        onClick={() => setActiveQuadrant(quadrant)}
                        className={`${quadrant.color} rounded-[22px] p-5 text-left shadow-[0_6px_18px_rgba(47,47,47,0.03)] transition-all duration-300 hover:-translate-y-1 ${
                          isActive ? 'ring-1 ring-[#2F2F2F]/12' : ''
                        }`}
                      >
                        <div className="flex items-center gap-2 text-[#2F2F2F]">
                          {quadrant.icon}
                          <h2 className="text-lg font-semibold">{quadrant.title}</h2>
                        </div>
                        <ul className="mt-4 space-y-2 text-[14px] leading-[1.75] text-[#3F3F3F]">
                          {quadrant.points.map((point) => (
                            <li key={point}>• {point}</li>
                          ))}
                        </ul>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[28px] bg-brand-white p-6 md:p-7 shadow-[0_10px_24px_rgba(47,47,47,0.04)]">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7EA898]">Focused Readout</p>
                <div className={`mt-5 rounded-[22px] ${activeQuadrant.color} p-5`}>
                  <div className="flex items-center gap-2 text-[#2F2F2F]">
                    {activeQuadrant.icon}
                    <h3 className="text-xl font-serif font-bold">{activeQuadrant.title}</h3>
                  </div>
                  <p className="mt-4 text-[15px] leading-[1.85] text-[#3F3F3F]">{activeQuadrant.detail}</p>
                </div>
                <p className="mt-4 text-sm text-[#5C5C5C]">
                  Click any quadrant to shift the decision lens and reveal the deeper strategic implication.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-10">
        <div className="mx-auto max-w-6xl">
          <motion.div {...sectionMotion}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7EA898]">Key Insights</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {insightCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, ease: 'easeInOut', delay: index * 0.08 }}
                  className="rounded-[22px] bg-brand-white p-5 shadow-[0_8px_20px_rgba(47,47,47,0.04)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F1EEE8] text-[#2F2F2F]">
                    {card.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#2F2F2F]">{card.title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.8] text-[#4E4E4E]">{card.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-10">
        <div className="mx-auto max-w-6xl">
          <motion.div {...sectionMotion}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7EA898]">Strategic Options</p>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {strategicOptions.map((option, index) => (
                <motion.article
                  key={option.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, ease: 'easeInOut', delay: index * 0.08 }}
                  className="rounded-[24px] bg-brand-white p-6 shadow-[0_8px_20px_rgba(47,47,47,0.04)]"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7EA898]">{option.title}</p>
                  <h3 className="mt-3 text-xl font-serif font-bold text-[#2F2F2F]">{option.subtitle}</h3>
                  <p className="mt-4 text-[14px] leading-[1.8] text-[#4E4E4E]">{option.body}</p>
                  <ul className="mt-5 space-y-2 text-[14px] leading-[1.75] text-[#3F3F3F]">
                    {option.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            {...sectionMotion}
            className="rounded-[28px] bg-brand-white p-7 md:p-8 shadow-[0_10px_24px_rgba(47,47,47,0.04)]"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7EA898]">Final Recommendation</p>
            <div className="mt-5 rounded-[22px] bg-[#F1EEE8] p-6 md:p-7">
              <div className="h-1.5 w-16 rounded-full bg-[#AFC3D2]" />
              <h2 className="mt-5 text-2xl font-serif font-bold text-[#2F2F2F]">
                Prioritize monetization expansion while protecting Netflix&apos;s premium brand position.
              </h2>
              <ul className="mt-5 space-y-3 text-[15px] leading-[1.85] text-[#3F3F3F]">
                <li>• It creates a growth path beyond pure subscriber volume by widening access through tiered pricing and ad-supported options.</li>
                <li>• It reduces strategic dependence on one revenue model while preserving the advantage of Netflix&apos;s content and platform ecosystem.</li>
                <li>• It gives the business flexibility to compete in a saturated market without abandoning the premium value that built its brand.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            {...sectionMotion}
            className="rounded-[28px] bg-[#EFE9F5] px-7 py-8 md:px-8 md:py-9 shadow-[0_10px_24px_rgba(47,47,47,0.04)]"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7EA898]">Reflection</p>
            <p className="mt-4 max-w-4xl text-[16px] leading-[1.9] text-[#3F3F3F]">
              This project taught me that strong strategic analysis is less about listing observations and more about organizing tradeoffs clearly enough to support a decision. I approached the SWOT by asking what each factor meant for action, not just description. That mindset feels directly transferable to real business problems, where clarity, prioritization, and strategic judgment matter just as much as the analysis itself.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-white/80 px-4 py-2 text-sm font-medium text-[#2F2F2F]">
              <CheckCircle2 size={16} strokeWidth={1.8} className="text-[#7EA898]" />
              Structured analysis turned into decision-ready strategy.
            </div>
          </motion.div>
        </div>
      </section>

      <CaseStudyMore currentId="strategic-swot-analysis-netflix" />
    </div>
  );
};

export default StrategicSwotNetflix;
