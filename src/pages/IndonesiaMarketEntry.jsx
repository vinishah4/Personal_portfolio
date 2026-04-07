import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import CaseStudyMore from '../components/CaseStudyMore';

const regionCallouts = [
  {
    title: "Java — Primary Target Market",
    tag: "High Priority · Low Risk",
    tagClass: "bg-[#1D9E75]/16 text-[#74E4BF]",
    bgClass: "bg-white/8 border border-[#1D9E75]/30",
    align: "md:ml-auto",
    glow: "#1D9E75",
    points: [
      "Population 150M+ — 60% of Indonesia's GDP",
      "Largest consumer concentration — urban middle class expanding rapidly",
      "Connected Shoppers segment dominant — heavy digital and brand-conscious buyers",
      "Strategy: concentrated marketing budget and distribution here first",
    ],
  },
  {
    title: "Sumatra — Secondary Growth Market",
    tag: "High Growth · Price Sensitive",
    tagClass: "bg-[#FAC775]/16 text-[#FFD99C]",
    bgClass: "bg-white/8 border border-[#FAC775]/30",
    align: "md:mr-auto",
    glow: "#FAC775",
    points: [
      "Population 58M — resource-rich, rising disposable income",
      "Price-sensitive, value-driven, growing digital adoption",
      "Wellness Enthusiasts segment prominent — health and quality focused",
      "Strategy: adjusted pricing downward, localized messaging, phased entry",
    ],
  },
  {
    title: "Bali — Premium Niche Segment",
    tag: "Premium Segment · High Value",
    tagClass: "bg-[#F4C0D1]/18 text-[#FFD7E6]",
    bgClass: "bg-white/8 border border-[#F4C0D1]/30",
    align: "md:ml-auto",
    glow: "#F4C0D1",
    points: [
      "Tourism-driven economy, internationally influenced consumer base",
      "Premium-oriented, experience-focused, high brand awareness",
      "Strategy: premium positioning, higher price point, experience-led marketing",
    ],
  },
];

const hofstedeData = [
  { label: "Power Distance", indonesia: 78, usa: 40, insight: "Trust in authority figures influences which brands succeed" },
  { label: "Individualism", indonesia: 14, usa: 91, insight: "Family and community-focused messaging outperforms individual appeals" },
  { label: "Masculinity", indonesia: 46, usa: 62, insight: "Modest, quality-of-life tone resonates over competitive aggressive messaging" },
  { label: "Uncertainty Avoidance", indonesia: 48, usa: 46, insight: "New brands must invest heavily in trust-building and reliability signals" },
  { label: "Long-Term Orientation", indonesia: 62, usa: 26, insight: "Consistent brand presence over time builds deeper consumer loyalty" },
  { label: "Indulgence", indonesia: 38, usa: 68, insight: "Campaigns should emphasize practicality and family value — not self-indulgence" },
];

const financialMetrics = [
  { value: "~5%", label: "Annual GDP Growth" },
  { value: "2.5%", label: "Inflation Target (BI)" },
  { value: "4th", label: "World's Most Populous Country" },
  { value: "G20", label: "Member Economy" },
  { value: "Moderate", label: "Overall Financial Risk" },
];

const politicalCards = [
  {
    title: "Political Stability",
    text: "No coups since late 1990s · democratic institutions persist · risks from religious and ethnic tensions remain localized",
    risk: "Risk: LOW-MODERATE",
    border: "border-[#1D9E75]/40",
  },
  {
    title: "Business-Government Relations",
    text: "Government promotes investment · domestic firms have stronger informal networks · foreign firms face red tape and local content rules",
    risk: "Risk: MODERATE",
    border: "border-[#FAC775]/40",
  },
  {
    title: "Legal & Regulatory Environment",
    text: "Corporate income tax moderate · VAT applies broadly · profit repatriation allowed with reporting and tax compliance",
    risk: "Risk: MODERATE",
    border: "border-[#F4C0D1]/40",
  },
  {
    title: "Corruption & Transparency",
    text: "Corruption remains a challenge · Transparency International ranks Indonesia moderately · informal networks matter in practice",
    risk: "Risk: MODERATE-HIGH",
    border: "border-[#CECBF6]/40",
  },
];

const funnelLayers = [
  { label: "Market Research", description: "Cultural, financial, political analysis across 3 project parts", bg: "#1D9E75", width: "100%" },
  { label: "Segment Targeting", description: "Connected Shoppers + Wellness Enthusiasts as primary targets", bg: "#FAC775", width: "88%" },
  { label: "Product Positioning", description: "Halal compliance, family-value framing, community messaging", bg: "#CECBF6", width: "76%" },
  { label: "Pricing Strategy", description: "Competitive Java, value Sumatra, premium Bali", bg: "#F4C0D1", width: "64%" },
  { label: "Budget Allocation", description: "Weighted toward Java launch, phased Sumatra and Bali investment", bg: "#E8A97F", width: "52%" },
  { label: "Simulation Optimization", description: "Adjusted decisions each round based on performance data", bg: "#FFFFFF", width: "40%" },
];

const simulationRows = [
  ["Market Focus", "Java only", "Java + Sumatra", "All 3 regions", "Optimized mix"],
  ["Product Strategy", "Mass market", "Segment split", "Regional variants", "Refined positioning"],
  ["Pricing", "Low entry", "Mid-range", "Regional pricing", "Value-based"],
  ["Budget Split", "Even", "Marketing heavy", "R&D + Marketing", "Optimized"],
  ["Performance", "Baseline", "+18%", "+31%", "Peak"],
];

const takeawayCards = [
  {
    title: "Culture shapes strategy",
    text: "Hofstede analysis wasn't academic — it directly informed messaging tone, product positioning, and channel choices.",
    border: "border-[#1D9E75]/40",
  },
  {
    title: "Markets are not monolithic",
    text: "Indonesia's three regions — Java, Sumatra, Bali — required three completely different strategic approaches within one country.",
    border: "border-[#FAC775]/40",
  },
  {
    title: "Iteration is the strategy",
    text: "The simulation rewarded adjustment not perfection. The best results came from learning fast and adapting every round.",
    border: "border-[#F4C0D1]/40",
  },
];

const chartVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut", delay: i * 0.1 },
  }),
};

const SectionLabel = ({ children }) => (
  <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#4ED3A8] mb-5">{children}</p>
);

const DrawingLineChart = ({ title, values, color, yLabels }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const max = Math.max(...values);
  const min = Math.min(...values);
  const points = values.map((value, index) => {
    const x = 20 + (index * 220) / (values.length - 1);
    const normalized = max === min ? 0.5 : (value - min) / (max - min);
    const y = 140 - normalized * 100;
    return `${x},${y}`;
  }).join(" ");

  return (
    <motion.div
      ref={ref}
      variants={chartVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-md"
    >
      <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
      <svg viewBox="0 0 260 160" className="w-full h-auto">
        {yLabels?.map((label, idx) => (
          <text key={label} x="0" y={20 + idx * 40} fill="rgba(255,255,255,0.45)" fontSize="10">
            {label}
          </text>
        ))}
        <motion.polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
        {values.map((value, index) => {
          const x = 20 + (index * 220) / (values.length - 1);
          const normalized = max === min ? 0.5 : (value - min) / (max - min);
          const y = 140 - normalized * 100;
          return (
            <g key={`${title}-${index}`}>
              <circle cx={x} cy={y} r="4" fill={color} />
              <text x={x} y="156" textAnchor="middle" fill="rgba(255,255,255,0.62)" fontSize="10">
                {2024 + index}
              </text>
            </g>
          );
        })}
      </svg>
    </motion.div>
  );
};

const IndonesiaMarketEntry = () => {
  return (
    <div className="min-h-screen bg-[#1A1A2E] text-white">
      <div className="sticky top-24 z-40 px-4 md:px-8 pt-2">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 rounded-full border border-[#1D9E75]/30 bg-[#121425]/70 px-4 py-2 text-sm font-semibold text-[#4ED3A8] backdrop-blur-md hover:bg-[#1D9E75]/12 transition-colors"
        >
          ← Back to Portfolio
        </Link>
      </div>

      <section className="relative min-h-screen overflow-hidden px-6 py-20 md:px-10">
        <svg className="absolute inset-0 h-full w-full opacity-[0.06]" viewBox="0 0 1200 800" aria-hidden="true">
          <path d="M123 229c51-36 112-29 172-8 54 18 105 39 163 27 60-12 93-67 154-73 85-9 139 50 217 77 63 22 142 29 198-12" fill="none" stroke="white" strokeWidth="2" />
          <path d="M79 396c71-20 146-7 216 19 56 21 112 44 173 38 87-8 152-73 239-72 69 1 127 40 194 56 72 17 149 10 220-14" fill="none" stroke="white" strokeWidth="2" />
          <path d="M112 586c62 14 126 3 187-21 75-30 144-77 226-76 71 2 132 42 201 58 99 24 207 4 292-54" fill="none" stroke="white" strokeWidth="2" />
        </svg>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative mx-auto flex min-h-[80vh] max-w-[900px] flex-col items-center justify-center text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#4ED3A8]">Global Market Strategy · ASU W.P. Carey</p>
          <h1 className="mt-6 text-[34px] md:text-[58px] font-serif font-bold leading-tight">Indonesia Market Entry Strategy</h1>
          <p className="mt-4 text-[18px] md:text-[24px] font-semibold text-[#FAC775]">A Three-Part Country Analysis &amp; Marketing Simulation</p>
          <p className="mt-6 max-w-[780px] text-base italic leading-[1.9] text-white/88 md:text-lg">
            Conducted cultural, financial, and political environment analysis on Indonesia — then translated research into a go-to-market strategy and optimized a multi-round marketing simulation by adjusting product, pricing, and budget allocation to drive performance.
          </p>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/72">
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-3 w-3 rounded-full bg-white"
            />
            <span className="text-xs uppercase tracking-[0.22em]">scroll to explore</span>
          </div>
        </motion.div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>Market Landscape</SectionLabel>
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 md:p-10">
            <svg viewBox="0 0 900 300" className="w-full h-auto">
              <rect x="0" y="0" width="900" height="300" rx="28" fill="#20233E" />
              <path d="M145 145c24-10 54-17 83-12 19 4 40 4 53 19 6 8 2 17-5 23-12 10-31 17-48 18-32 4-63-7-92-20-9-4-18-11-17-20 0-4 3-6 6-8 7-5 14-6 20-8Z" fill="#2B3154" />
              <path d="M350 136c51-21 103-31 155-24 22 3 56 9 69 31 7 13-3 25-18 33-26 15-60 21-90 23-50 3-103-4-145-28-10-6-20-15-19-24 1-5 3-8 8-11 13-8 25-7 40-14Z" fill="#2B3154" />
              <path d="M574 177c25-6 53-6 76 2 12 4 29 12 29 28 0 18-19 28-35 33-27 10-58 12-87 5-14-4-33-11-37-27-4-18 10-30 25-35 9-3 19-4 29-6Z" fill="#2B3154" />
              <path d="M735 197c10-7 23-10 35-7 7 1 15 7 16 15 1 10-7 16-16 21-15 7-33 10-49 8-8-2-18-8-18-18 0-9 8-15 16-19 5-2 10-2 16 0Z" fill="#2B3154" />

              <g>
                <motion.circle cx="470" cy="153" r="38" fill="none" stroke="#1D9E75" strokeWidth="2" animate={{ opacity: [0.2, 0.75, 0.2], scale: [0.92, 1.06, 0.92] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }} />
                <motion.circle cx="178" cy="157" r="30" fill="none" stroke="#FAC775" strokeWidth="2" animate={{ opacity: [0.25, 0.7, 0.25], scale: [0.92, 1.08, 0.92] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }} />
                <motion.circle cx="756" cy="202" r="24" fill="none" stroke="#F4C0D1" strokeWidth="2" animate={{ opacity: [0.2, 0.65, 0.2], scale: [0.95, 1.1, 0.95] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
                <motion.circle cx="470" cy="153" r="5" fill="#1D9E75" animate={{ scale: [1, 1.3, 1], opacity: [0.75, 1, 0.75] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} />
                <motion.circle cx="178" cy="157" r="5" fill="#FAC775" animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
                <motion.circle cx="756" cy="202" r="5" fill="#F4C0D1" animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }} />
              </g>
            </svg>
            <p className="mt-5 text-center text-sm italic text-white/72">Scroll to explore each region&apos;s opportunity and strategy</p>
          </div>

          <div className="mt-10 grid gap-6">
            {regionCallouts.map((region, index) => (
              <motion.div
                key={region.title}
                initial={{ opacity: 0, x: index === 1 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`max-w-[620px] rounded-[26px] p-6 backdrop-blur-xl shadow-[0_16px_50px_rgba(0,0,0,0.18)] ${region.bgClass} ${region.align}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-serif font-bold">{region.title}</h3>
                    <ul className="mt-4 space-y-2 text-[15px] leading-[1.8] text-white/84">
                      {region.points.map((point) => (
                        <li key={point}>• {point}</li>
                      ))}
                    </ul>
                  </div>
                  <span className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] ${region.tagClass}`}>
                    {region.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>Part I · Cultural Environment</SectionLabel>
          <p className="max-w-[760px] text-lg text-white/86">Understanding Indonesia&apos;s cultural values was the foundation of every strategic decision that followed.</p>

          <div className="mt-10 space-y-7">
            {hofstedeData.map((item, index) => (
              <motion.div
                key={item.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index}
                variants={chartVariants}
                className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 md:p-6"
              >
                <div className="grid gap-5 md:grid-cols-[220px_1fr_280px] md:items-center">
                  <div>
                    <h3 className="text-[15px] font-semibold text-white">{item.label}</h3>
                    <p className="mt-2 text-sm text-white/62">{item.insight}</p>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: "Indonesia", value: item.indonesia, color: "#1D9E75" },
                      { name: "USA", value: item.usa, color: "#FAC775" },
                    ].map((bar, barIndex) => (
                      <div key={bar.name}>
                        <div className="mb-1 flex items-center justify-between text-xs uppercase tracking-[0.14em] text-white/66">
                          <span>{bar.name}</span>
                          <span>{bar.value}</span>
                        </div>
                        <div className="h-3 rounded-full bg-white/8">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${bar.value}%` }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.6, ease: "easeInOut", delay: index * 0.1 + barIndex * 0.1 }}
                            className="h-3 rounded-full"
                            style={{ backgroundColor: bar.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-white/72">{item.insight}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <motion.div variants={chartVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-[24px] border border-[#1D9E75]/35 bg-white/[0.04] p-6 backdrop-blur-md">
              <p className="text-lg font-semibold text-white">Connected Shoppers · 55% of consumers</p>
              <p className="mt-3 text-[15px] leading-[1.8] text-white/76">Heavy tech users · prefer trusted brands · rely on online reviews · expect seamless digital-to-store experience</p>
            </motion.div>
            <motion.div variants={chartVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="rounded-[24px] border border-[#FAC775]/35 bg-white/[0.04] p-6 backdrop-blur-md">
              <p className="text-lg font-semibold text-white">Wellness Enthusiasts · 54% of consumers</p>
              <p className="mt-3 text-[15px] leading-[1.8] text-white/76">Health and nutrition focused · read labels · seek safe high-quality ingredients · choose products supporting overall wellbeing</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>Part II · Financial Environment</SectionLabel>
          <p className="max-w-[760px] text-lg text-white/86">Indonesia&apos;s financial environment is medium-risk but broadly supportive for market entry.</p>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
            {financialMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                variants={chartVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index}
                className="rounded-[22px] border border-white/10 bg-white/[0.05] p-5 text-center backdrop-blur-md"
              >
                <div className="text-2xl md:text-3xl font-serif font-bold text-white">{metric.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.14em] text-white/62">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <DrawingLineChart title="Inflation Projections 2024–2029" values={[2.8, 2.7, 2.5, 2.4, 2.6, 2.5]} color="#1D9E75" yLabels={["3%", "2.5%", "2%"]} />
            <DrawingLineChart title="Interest Rate Projections 2024–2029" values={[7.0, 6.1, 5.3, 4.7, 4.1, 3.8]} color="#FAC775" yLabels={["7%", "5%", "4%"]} />
            <DrawingLineChart title="Rupiah vs USD 2024–2029" values={[15800, 16020, 16130, 16240, 16400, 16550]} color="#CECBF6" yLabels={["16.5k", "16.1k", "15.8k"]} />
          </div>
          <p className="mt-4 text-sm italic text-white/62">EIU forecast data — 2024–2029 projection horizon</p>

          <motion.div
            variants={chartVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="mt-10 rounded-[26px] border border-[#FAC775]/40 bg-white/[0.05] p-6 backdrop-blur-md"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-serif font-bold text-white">Overall Assessment</h3>
                <p className="mt-3 max-w-[640px] text-[15px] leading-[1.85] text-white/78">
                  Low stable inflation, moderately easing interest rates, and a gently weakening currency describe a financial environment that is fundamentally orderly but exposed to global shocks. Main risk: exchange-rate volatility and policy shifts responding to global conditions.
                </p>
              </div>
              <span className="rounded-full bg-[#FAC775]/14 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FFD99C]">
                Medium Risk · Broadly Supportive
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>Part III · Political &amp; Legal Environment</SectionLabel>
          <p className="max-w-[760px] text-lg text-white/86">Indonesia is a stable presidential democracy — but navigating its political and legal landscape requires local knowledge and patience.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {politicalCards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={chartVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index}
                className={`rounded-[24px] border bg-white/[0.05] p-6 backdrop-blur-md ${card.border}`}
              >
                <h3 className="text-xl font-serif font-bold text-white">{card.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.8] text-white/78">{card.text}</p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/88">{card.risk}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>Go-to-Market Framework</SectionLabel>
          <div className="flex flex-col items-center gap-4">
            {funnelLayers.map((layer, index) => (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: index * 0.15 }}
                className="rounded-[20px] px-5 py-5 text-center shadow-[0_18px_45px_rgba(0,0,0,0.18)]"
                style={{ width: layer.width, backgroundColor: layer.bg, color: layer.bg === "#FFFFFF" ? "#1A1A2E" : "#FFFFFF" }}
              >
                <h3 className="text-lg font-bold">{layer.label}</h3>
                <p className="mt-2 text-sm opacity-90">{layer.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>Marketing Simulation Results</SectionLabel>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
            <svg viewBox="0 0 860 320" className="w-full h-auto">
              <text x="32" y="285" fill="rgba(255,255,255,0.62)" fontSize="12">Round 1</text>
              <text x="260" y="285" fill="rgba(255,255,255,0.62)" fontSize="12">Round 2</text>
              <text x="488" y="285" fill="rgba(255,255,255,0.62)" fontSize="12">Round 3</text>
              <text x="716" y="285" fill="rgba(255,255,255,0.62)" fontSize="12">Round 4</text>
              {[
                { color: "#1D9E75", points: "42,210 270,178 498,132 726,96", label: "Java", labelX: 30 },
                { color: "#FAC775", points: "42,226 270,196 498,154 726,112", label: "Sumatra", labelX: 106 },
                { color: "#F4C0D1", points: "42,238 270,210 498,176 726,138", label: "Bali", labelX: 218 },
              ].map((line, index) => (
                <g key={line.label}>
                  <text x={line.labelX} y="24" fill={line.color} fontSize="13" fontWeight="700">{line.label}</text>
                  <motion.polyline
                    points={line.points}
                    fill="none"
                    stroke={line.color}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.85, ease: "easeInOut", delay: index * 0.12 }}
                  />
                </g>
              ))}
            </svg>
            <p className="mt-4 text-sm italic text-white/62">Performance improved each round as pricing, product mix, and budget allocation were refined based on simulation feedback.</p>

            <div className="mt-8 overflow-x-auto">
              <table className="min-w-[760px] w-full text-left">
                <thead>
                  <tr className="text-[#4ED3A8]">
                    {["Decision", "Round 1", "Round 2", "Round 3", "Round 4"].map((header) => (
                      <th key={header} className="px-4 py-3 text-xs uppercase tracking-[0.16em]">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {simulationRows.map((row, index) => (
                    <tr key={row[0]} className={index % 2 === 0 ? "bg-white/[0.03]" : "bg-transparent"}>
                      {row.map((cell, idx) => (
                        <td key={`${row[0]}-${idx}`} className={`px-4 py-4 text-sm ${idx === 0 ? 'sticky left-0 bg-[#1A1A2E] font-semibold text-white' : 'text-white/78'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>What This Taught Me</SectionLabel>
          <div className="grid gap-6 md:grid-cols-3">
            {takeawayCards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={chartVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index}
                className={`rounded-[24px] border bg-white/[0.05] p-6 backdrop-blur-md ${card.border}`}
              >
                <h3 className="text-xl font-serif font-bold text-white">{card.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.8] text-white/76">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>Skills Applied</SectionLabel>
          <div className="flex flex-wrap gap-3">
            {["Market Research", "Cultural Analysis", "Hofstede Framework", "Consumer Segmentation", "Financial Analysis", "Political Risk Assessment", "Go-to-Market Strategy", "Budget Allocation", "Data-Driven Decision Making", "Global Marketing", "Strategic Planning"].map((skill) => (
              <span key={skill} className="rounded-full border border-[#1D9E75]/40 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-[600px] text-center">
          <p className="text-[24px] md:text-[28px] italic font-serif leading-[1.9] text-white">
            Strategy without research is just opinion. Three parts of analysis taught me the difference.
          </p>
          <p className="mt-5 text-[13px] font-bold uppercase tracking-[0.22em] text-[#4ED3A8]">Vinita Shah</p>
        </div>
      </section>

      <CaseStudyMore currentId="indonesia-market-entry" variant="dark" />
    </div>
  );
};

export default IndonesiaMarketEntry;
