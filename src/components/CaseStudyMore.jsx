import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const studies = [
  {
    id: 'wpc-facilitator-program',
    title: 'WPC Facilitator Program',
    tag: 'Leadership',
    route: '/portfolio/wpc-facilitator-program',
    summary: 'A facilitation and mentorship case study centered on structured student support and weekly learning design.',
  },
  {
    id: 'indonesia-market-entry',
    title: 'Indonesia Market Entry Strategy',
    tag: 'Strategy',
    route: '/portfolio/indonesia-market-entry',
    summary: 'A three-part market entry analysis covering cultural, financial, and political strategy decisions.',
  },
  {
    id: 'northwind-traders',
    title: 'Business Insights for Northwind Traders',
    tag: 'Data',
    route: '/portfolio/northwind-traders',
    summary: 'A data-driven business analysis focused on sales performance, profitability patterns, and strategic growth recommendations.',
  },
  {
    id: 'bridgecareer-platform-strategy',
    title: 'BridgeCareer Platform Strategy',
    tag: 'Product',
    route: '/portfolio/bridgecareer-platform-strategy',
    summary: 'A digital platform strategy designed to simplify career navigation for international students.',
  },
  {
    id: 'strategic-swot-analysis-netflix',
    title: 'Strategic SWOT Analysis — Netflix',
    tag: 'Strategy',
    route: '/portfolio/strategic-swot-analysis-netflix',
    summary: "A structured strategic analysis translating Netflix's market position into decision-ready recommendations.",
  },
  {
    id: 'asu-production-assistant',
    title: 'Production Assistant — ASU Enterprise Brand Strategy & Management',
    tag: 'Current Role',
    route: '/portfolio/asu-production-assistant',
    summary: 'A live case study in brand operations, digital content systems, competitive research, and creative collaboration inside a major university brand team.',
  },
];

const lightCardStyles = {
  wrapper: 'bg-[linear-gradient(135deg,#f4efe8_0%,#ece5f4_52%,#e7f0ea_100%)] border border-brand-line/70',
  card: 'bg-brand-white/88 border border-brand-line/65 text-brand-charcoal hover:bg-brand-white',
  heading: 'text-brand-plum',
  subheading: 'text-[#7EA898]',
  summary: 'text-brand-charcoal/82',
  cta: 'text-brand-plum hover:text-brand-gold',
  pill: 'bg-brand-white text-brand-plum border border-brand-line/60',
};

const darkCardStyles = {
  wrapper: 'bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)] border border-white/10',
  card: 'bg-white/[0.05] border border-white/10 text-white hover:bg-white/[0.08]',
  heading: 'text-white',
  subheading: 'text-[#4ED3A8]',
  summary: 'text-white/72',
  cta: 'text-white hover:text-[#FAC775]',
  pill: 'bg-white/[0.08] text-white border border-white/10',
};

const CaseStudyMore = ({ currentId, variant = 'light' }) => {
  const styles = variant === 'dark' ? darkCardStyles : lightCardStyles;
  const relatedStudies = studies.filter((study) => study.id !== currentId).slice(0, 3);

  return (
    <section className="px-6 pb-16 md:px-10 md:pb-20">
      <div className={`mx-auto max-w-6xl rounded-[30px] px-6 py-8 md:px-8 md:py-10 shadow-[0_18px_40px_rgba(110,93,121,0.08)] ${styles.wrapper}`}>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className={`text-xs font-bold uppercase tracking-[0.24em] ${styles.subheading}`}>View Other Studies</p>
            <h2 className={`mt-3 text-2xl font-serif font-bold ${styles.heading}`}>Keep exploring the portfolio</h2>
          </div>
          <Link to="/portfolio" className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${styles.cta}`}>
            See all case studies
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {relatedStudies.map((study) => (
            <Link
              key={study.id}
              to={study.route}
              className={`group rounded-[24px] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(110,93,121,0.08)] ${styles.card}`}
            >
              <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] ${styles.pill}`}>
                {study.tag}
              </span>
              <h3 className={`mt-4 text-xl font-serif font-bold leading-tight ${styles.heading}`}>{study.title}</h3>
              <p className={`mt-3 text-[14px] leading-[1.75] ${styles.summary}`}>{study.summary}</p>
              <div className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-colors ${styles.cta}`}>
                Open case study
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyMore;
