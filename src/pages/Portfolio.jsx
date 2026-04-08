import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Briefcase, Compass, Presentation, Users } from 'lucide-react';

const featuredCard = {
  title: 'Production Assistant — ASU Enterprise Brand Strategy & Management',
  tag: 'Current Role',
  description: 'A live case study in brand operations, digital content systems, competitive research, and creative collaboration inside a major university brand team.',
  route: '/portfolio/asu-production-assistant',
  bg: 'bg-[#EEF1EB]',
};

const gridCards = [
  {
    title: 'Strategic SWOT Analysis — Netflix',
    tag: 'Strategy',
    description: "A structured strategic analysis translating Netflix's market position, risks, and opportunities into clear decision-ready recommendations.",
    route: '/portfolio/strategic-swot-analysis-netflix',
    tone: 'bg-[#EEF1EB]',
    tagTone: 'bg-[#DDE8DF] text-[#506454]',
    icon: <Briefcase size={18} strokeWidth={1.8} />,
  },
  {
    title: 'Business Insights for Northwind Traders',
    tag: 'Data',
    description: 'A data-driven business analysis focused on sales performance, profitability patterns, and strategic growth recommendations.',
    route: '/portfolio/northwind-traders',
    tone: 'bg-[#EDF2F5]',
    tagTone: 'bg-[#DCE8EF] text-[#46606A]',
    icon: <BarChart3 size={18} strokeWidth={1.8} />,
  },
  {
    title: 'BridgeCareer Platform Strategy',
    tag: 'Product',
    description: 'A digital platform strategy designed to simplify career navigation for international students.',
    route: '/portfolio/bridgecareer-platform-strategy',
    tone: 'bg-[#EEF1F5]',
    tagTone: 'bg-[#DDE4EF] text-[#526179]',
    icon: <Compass size={18} strokeWidth={1.8} />,
  },
  {
    title: 'Indonesia Market Entry Strategy',
    tag: 'Strategy',
    description: 'A three-part market entry analysis covering cultural, financial, and political strategy decisions.',
    route: '/portfolio/indonesia-market-entry',
    tone: 'bg-[#EEF1EB]',
    tagTone: 'bg-[#DDE8DF] text-[#506454]',
    icon: <Presentation size={18} strokeWidth={1.8} />,
  },
  {
    title: 'WPC Facilitator Program',
    tag: 'Leadership',
    description: 'A facilitation and mentorship case study centered on structured student support and weekly learning design.',
    route: '/portfolio/wpc-facilitator-program',
    tone: 'bg-[#F2EDF5]',
    tagTone: 'bg-[#E4D9EE] text-[#62526E]',
    icon: <Users size={18} strokeWidth={1.8} />,
  },
];

const sectionMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.55, ease: 'easeInOut' },
};

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#F7F5F2] pt-24 md:pt-28">
      <section className="px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-[13px] md:text-sm text-brand-charcoal/68">
            <Link to="/" className="text-[#7EA898] transition-colors hover:text-brand-plum">
              Home
            </Link>
            <span className="mx-2 text-brand-charcoal/55">→</span>
            <span>Portfolio</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="max-w-3xl"
          >
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-[#7EA898]">Portfolio</p>
            <h1 className="text-4xl font-serif font-bold leading-tight text-[#2F2F2F] md:text-5xl">
              A curated selection of strategy, product, data, and leadership work.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-[1.9] text-[#4C4C4C]">
              The portfolio is designed to be easy to scan quickly: one featured case study up front, followed by a focused grid of supporting work.
            </p>
          </motion.div>

          <motion.section {...sectionMotion} className="mt-12">
            <Link
              to={featuredCard.route}
              className={`${featuredCard.bg} group block overflow-hidden rounded-[30px] border border-[#E5E3DF] p-7 shadow-[0_12px_30px_rgba(47,47,47,0.05)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_18px_36px_rgba(47,47,47,0.08)] md:p-8`}
            >
              <div className="grid items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="flex min-h-[240px] flex-col justify-between">
                  <div>
                    <span className="inline-flex rounded-full bg-[#DDE8DF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#506454]">
                      {featuredCard.tag}
                    </span>
                    <h2 className="mt-5 max-w-2xl text-3xl font-serif font-bold leading-tight text-[#2F2F2F] md:text-[2.2rem]">
                      {featuredCard.title}
                    </h2>
                    <p className="mt-4 max-w-xl text-[15px] leading-[1.8] text-[#4C4C4C]">
                      {featuredCard.description}
                    </p>
                  </div>

                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#2F2F2F] transition-colors group-hover:text-[#7EA898]">
                    Open case study
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                <div className="relative min-h-[220px] overflow-hidden rounded-[24px] bg-[linear-gradient(145deg,#dfe8df_0%,#e7e1ef_48%,#f2efe8_100%)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(168,191,176,0.42),transparent_26%),radial-gradient(circle_at_75%_30%,rgba(175,195,210,0.34),transparent_28%),radial-gradient(circle_at_55%_75%,rgba(214,204,227,0.5),transparent_30%)]" />
                  <div className="absolute left-6 top-6 rounded-full border border-white/60 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5A5A5A] backdrop-blur-sm">
                    Featured
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                    {[
                      ['Focus', 'Brand Ops'],
                      ['Tools', 'Drupal'],
                      ['Scope', 'Research'],
                      ['Status', 'Current'],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-[18px] border border-white/60 bg-white/68 px-4 py-3 backdrop-blur-sm">
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7A7A7A]">{label}</p>
                        <p className="mt-1 text-sm font-semibold text-[#2F2F2F]">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.section>

          <motion.section {...sectionMotion} className="mt-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {gridCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, ease: 'easeInOut', delay: index * 0.08 }}
                >
                  <Link
                    to={card.route}
                    className={`${card.tone} group flex min-h-[220px] flex-col justify-between rounded-[26px] border border-[#E5E3DF] p-6 shadow-[0_10px_24px_rgba(47,47,47,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(47,47,47,0.07)]`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${card.tagTone}`}>
                          {card.tag}
                        </span>
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/72 text-[#4A4A4A] transition-colors duration-300 group-hover:text-[#2F2F2F]">
                          {card.icon}
                        </span>
                      </div>

                      <h2 className="mt-5 max-w-[18rem] text-2xl font-serif font-bold leading-tight text-[#2F2F2F]">
                        {card.title}
                      </h2>
                    </div>

                    <div className="mt-6">
                      <p className="max-h-0 overflow-hidden text-[14px] leading-[1.75] text-[#4C4C4C] opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100">
                        {card.description}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2F2F2F] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-[#7EA898]">
                        Open case study
                        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-5xl rounded-[32px] bg-[linear-gradient(135deg,#e6eee8_0%,#ece4f4_52%,#f3eee7_100%)] px-6 py-10 md:px-10 md:py-14">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#7EA898]">You&apos;re All Caught Up</p>
            <h2 className="mb-8 text-2xl font-serif font-bold text-[#2F2F2F]">Ready to get in touch?</h2>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/"
                className="w-full rounded-full border border-[#2F2F2F] px-8 py-3 text-center font-semibold text-[#2F2F2F] transition-all duration-300 hover:bg-[#E8E4F0] sm:w-auto"
              >
                ← Back to Home
              </Link>
              <a
                href="/#contact"
                className="w-full rounded-full bg-[#2F2F2F] px-8 py-3 text-center font-semibold text-white transition-all duration-300 hover:bg-[#474747] sm:w-auto"
              >
                Let&apos;s Talk →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
