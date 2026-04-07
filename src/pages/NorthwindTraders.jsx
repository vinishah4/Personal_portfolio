import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BarChart3, Globe2, Briefcase, Sparkles, FileSpreadsheet, Presentation, ChevronRight, CircleDollarSign } from 'lucide-react';
import CaseStudyMore from '../components/CaseStudyMore';

const steps = [
  { id: 1, title: "The Business Problem", prompt: "Start the analysis", icon: <Globe2 size={18} strokeWidth={1.8} /> },
  { id: 2, title: "Exploring the Data", prompt: "Dig deeper into patterns", icon: <BarChart3 size={18} strokeWidth={1.8} /> },
  { id: 3, title: "Identifying Patterns", prompt: "What should we do next?", icon: <Sparkles size={18} strokeWidth={1.8} /> },
  { id: 4, title: "Strategic Thinking", prompt: "Build a solution", icon: <Briefcase size={18} strokeWidth={1.8} /> },
  { id: 5, title: "Proposed Solution (RFP)", prompt: "What was the impact?", icon: <FileSpreadsheet size={18} strokeWidth={1.8} /> },
  { id: 6, title: "Outcome & Reflection", prompt: "", icon: <Presentation size={18} strokeWidth={1.8} /> },
];

const stats = [
  { label: "Total Sales", value: "$4.2M+" },
  { label: "Top Countries", value: "USA, Germany, Austria" },
  { label: "Lowest Markets", value: "Poland, Norway" },
];

const findings = [
  { title: "Total sales 2021–2023", body: "$4,279,939 in revenue analyzed across three full years of performance." },
  { title: "Top-performing countries", body: "USA: $926,144 · Germany: $810,632 · Austria: $492,699" },
  { title: "Lowest-performing countries", body: "Argentina: $22,775 · Norway: $19,126 · Poland: $8,625" },
  { title: "Top-spending customers", body: "Save-a-lot Markets, Ernst Handel, and QUICK-Stop generated outsized account value." },
  { title: "Peak sales months", body: "May, August, and July consistently outperformed the rest of the calendar." },
  { title: "Category leaders", body: "Beverages, Dairy Products, and Confections stood out while Meat/Poultry, Produce, and Grains/Cereals lagged." },
];

const recommendationList = [
  "Strengthen investment in high-performing markets while exploring why lower-performing regions lagged",
  "Reevaluate underperforming product categories for pricing, positioning, or operational inefficiencies",
  "Focus retention efforts on highest-value customers",
  "Improve cost visibility with a more advanced activity-based costing model",
  "Use forecasting tools to support better profitability and demand planning",
];

const deliverables = [
  "Analysis report",
  "Request for Proposal (RFP)",
  "Six business visualizations",
  "Strategic recommendations for profitability and operations",
  "Business presentation deck",
];

const skills = [
  "Data Analysis",
  "Business Strategy",
  "Excel",
  "Market Insights",
  "Data Visualization",
  "Team Collaboration",
  "Recommendation Development",
  "Strategic Planning",
];

const cardVariants = {
  enter: { opacity: 0, y: 18 },
  center: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeInOut' } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.3, ease: 'easeInOut' } },
};

const StepNode = ({ step, active, onClick, last }) => (
  <div className="flex items-center">
    <button
      type="button"
      onClick={onClick}
      className={`group flex items-center gap-3 rounded-full border px-4 py-3 text-left transition-all duration-300 cursor-pointer ${
        active
          ? 'border-brand-gold bg-brand-white shadow-[0_12px_28px_rgba(110,93,121,0.12)]'
          : 'border-brand-line/80 bg-brand-white/65 hover:bg-brand-white'
      }`}
    >
      <span className={`flex h-9 w-9 items-center justify-center rounded-full ${active ? 'bg-brand-blush text-brand-plum' : 'bg-brand-cream text-brand-charcoal/75'}`}>
        {step.icon}
      </span>
      <span>
        <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#5DCAA5]">Step {step.id}</span>
        <span className="block text-sm font-semibold text-brand-plum">{step.title}</span>
      </span>
    </button>
    {!last ? (
      <span className="mx-2 hidden md:flex items-center text-[#9CCFC3]">
        <ChevronRight size={18} />
      </span>
    ) : null}
  </div>
);

const NorthwindTraders = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="min-h-screen bg-brand-cream pt-24 md:pt-28">
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
            <span>Business Insights for Northwind Traders</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="rounded-[34px] border border-brand-line/70 bg-brand-white px-8 py-10 md:px-12 md:py-14 shadow-[0_22px_60px_rgba(110,93,121,0.08)]"
          >
            <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#5DCAA5]">Built Case Study</p>
            <h1 className="mt-5 text-4xl md:text-5xl font-serif font-bold text-brand-plum leading-tight">Business Insights for Northwind Traders</h1>
            <p className="mt-5 max-w-3xl text-lg text-brand-charcoal leading-[1.9]">
              Turning three years of global sales data into strategic recommendations for profitability, operational improvement, and future forecasting.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                'Timeline: Sep 2024 – Dec 2024',
                'Associated with: W. P. Carey School of Business – Arizona State University',
                'Focus areas: Data Analysis, Business Strategy, Market Insights, Excel, Visualization, Team Collaboration',
              ].map((item) => (
                <span key={item} className="rounded-full bg-brand-cream px-4 py-2 text-sm text-brand-charcoal border border-brand-line/60">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:flex-wrap gap-3 md:items-center">
            {steps.map((step, index) => (
              <StepNode
                key={step.id}
                step={step}
                active={activeStep === step.id}
                onClick={() => setActiveStep(step.id)}
                last={index === steps.length - 1}
              />
            ))}
          </div>
          <div className="mt-4 text-sm text-brand-charcoal/72">
            Step {activeStep} of {steps.length}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="rounded-[34px] border border-brand-line/70 bg-brand-white p-8 md:p-10 shadow-[0_22px_60px_rgba(110,93,121,0.08)]"
            >
              {activeStep === 1 ? (
                <div className="space-y-10">
                  <div>
                    <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#5DCAA5]">The Business Problem</p>
                    <h2 className="mt-4 text-3xl font-serif font-bold text-brand-plum">Where is the business actually performing?</h2>
                    <p className="mt-5 max-w-3xl text-[17px] leading-[1.9] text-brand-charcoal">
                      Northwind Traders had 3 years of global sales data, but lacked clear insights into which countries drive revenue, which customers matter most, and which products are truly profitable. The goal was to move beyond raw spreadsheets and translate business data into strategy.
                    </p>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="rounded-[24px] bg-brand-lavender/45 p-6">
                      <h3 className="text-lg font-semibold text-brand-plum">Overview</h3>
                      <p className="mt-3 text-[15px] leading-[1.8] text-brand-charcoal">
                        This project analyzed Northwind Traders&apos; sales performance from 2021–2023 to uncover trends across countries, customers, and product categories. The goal was to transform raw business data into actionable recommendations that could improve profitability, cost allocation, and decision-making.
                      </p>
                    </div>
                    <div className="rounded-[24px] bg-brand-peach/45 p-6">
                      <h3 className="text-lg font-semibold text-brand-plum">My Role</h3>
                      <p className="mt-3 text-[15px] leading-[1.8] text-brand-charcoal">
                        As part of a six-person team, I helped analyze global sales data, identify meaningful business patterns, and translate findings into recommendations. I contributed to building a professional analysis report and helping shape a business-focused Request for Proposal for future operational improvements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 rounded-[24px] bg-brand-cream px-6 py-5">
                    <p className="text-sm font-semibold text-brand-plum">Ready to begin the decision journey?</p>
                    <button type="button" onClick={() => setActiveStep(2)} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-plum hover:text-brand-gold transition-colors cursor-pointer">
                      Start the analysis
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ) : null}

              {activeStep === 2 ? (
                <div className="space-y-10">
                  <div>
                    <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#5DCAA5]">Exploring the Data</p>
                    <h2 className="mt-4 text-3xl font-serif font-bold text-brand-plum">What does the data reveal?</h2>
                    <p className="mt-5 max-w-3xl text-[17px] leading-[1.9] text-brand-charcoal">
                      I analyzed sales data across 20+ countries, customer purchase behavior, and product category performance to see where Northwind Traders was strongest, where it was vulnerable, and where strategic attention could have the biggest business impact.
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, ease: 'easeInOut', delay: index * 0.08 }}
                        className="rounded-[24px] bg-brand-white border border-brand-line/70 p-6 shadow-sm"
                      >
                        <p className="text-3xl font-serif font-bold text-brand-plum">{stat.value}</p>
                        <p className="mt-2 text-sm text-brand-charcoal/75">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-[24px] bg-brand-blush/45 p-6">
                      <h3 className="text-lg font-semibold text-brand-plum">What I analyzed</h3>
                      <ul className="mt-4 space-y-2 text-[15px] leading-[1.8] text-brand-charcoal">
                        <li>• Country-level revenue trends</li>
                        <li>• Customer spending behavior</li>
                        <li>• Product category performance</li>
                        <li>• Top and bottom products by revenue</li>
                        <li>• Profitability and operational opportunity areas</li>
                        <li>• Strategic business recommendations</li>
                      </ul>
                    </div>
                    <div className="rounded-[24px] bg-brand-sage/45 p-6">
                      <h3 className="text-lg font-semibold text-brand-plum">Key business lens</h3>
                      <p className="mt-4 text-[15px] leading-[1.8] text-brand-charcoal">
                        The goal wasn&apos;t just to summarize what happened. It was to understand which markets, customers, and product categories were truly creating value for the business and where operational decisions could change performance.
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}

              {activeStep === 3 ? (
                <div className="space-y-10">
                  <div>
                    <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#5DCAA5]">Identifying Patterns</p>
                    <h2 className="mt-4 text-3xl font-serif font-bold text-brand-plum">Where are the opportunities?</h2>
                    <p className="mt-5 max-w-3xl text-[17px] leading-[1.9] text-brand-charcoal">
                      Once the numbers were organized, the real work was interpreting what they meant for the business. The data showed concentration, uneven customer dependency, category winners and laggards, and clear signs that volume alone didn&apos;t always equal strong profitability.
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {findings.map((finding, index) => (
                      <motion.div
                        key={finding.title}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, ease: 'easeInOut', delay: index * 0.07 }}
                        className="rounded-[24px] bg-brand-cream p-6 border border-brand-line/70"
                      >
                        <h3 className="text-[17px] font-semibold text-brand-plum">{finding.title}</h3>
                        <p className="mt-3 text-[14px] leading-[1.75] text-brand-charcoal">{finding.body}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-[24px] bg-brand-lavender/45 p-6">
                      <h3 className="text-lg font-semibold text-brand-plum">Data story</h3>
                      <ul className="mt-4 space-y-3 text-[15px] leading-[1.8] text-brand-charcoal">
                        <li>• High revenue was concentrated in a few countries, which suggested both strong core markets and overdependence on limited regions.</li>
                        <li>• Customer spending was uneven, with a small number of major accounts contributing outsized value.</li>
                        <li>• Product category trends revealed clear winners and weaker segments, creating opportunities for pricing, inventory, and growth strategy decisions.</li>
                        <li>• Units sold did not always equal profitability, which highlighted the need for more advanced cost and forecasting models.</li>
                      </ul>
                    </div>
                    <div className="rounded-[24px] bg-brand-peach/45 p-6">
                      <h3 className="text-lg font-semibold text-brand-plum">Insight highlights</h3>
                      <div className="mt-4 space-y-3">
                        {[
                          'Beverages = top performer',
                          'Grains & Produce underperforming',
                          'Few customers = high dependency',
                        ].map((item) => (
                          <div key={item} className="rounded-[18px] bg-brand-white/75 px-4 py-3 text-sm font-medium text-brand-charcoal">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              {activeStep === 4 ? (
                <div className="space-y-10">
                  <div>
                    <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#5DCAA5]">Strategic Thinking</p>
                    <h2 className="mt-4 text-3xl font-serif font-bold text-brand-plum">What decisions should be made?</h2>
                    <p className="mt-5 max-w-3xl text-[17px] leading-[1.9] text-brand-charcoal">
                      The most important shift in this project was moving from reporting to recommendation. I focused on what leadership should do next based on market performance, customer concentration, category weakness, and the limits of the current cost visibility model.
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-[24px] bg-brand-blush/45 p-6">
                      <h3 className="text-lg font-semibold text-brand-plum">Recommendations &amp; Business Impact</h3>
                      <ul className="mt-4 space-y-3 text-[15px] leading-[1.8] text-brand-charcoal">
                        {recommendationList.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-[24px] bg-brand-sage/45 p-6">
                      <h3 className="text-lg font-semibold text-brand-plum">Why this mattered</h3>
                      <p className="mt-4 text-[15px] leading-[1.85] text-brand-charcoal">
                        The analysis showed that the business didn&apos;t need more data. It needed clearer prioritization. By identifying where value was concentrated and where margins were likely being diluted, the project created a roadmap for better market focus, customer retention, and operational efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}

              {activeStep === 5 ? (
                <div className="space-y-10">
                  <div>
                    <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#5DCAA5]">Proposed Solution (RFP)</p>
                    <h2 className="mt-4 text-3xl font-serif font-bold text-brand-plum">How do we implement this?</h2>
                    <p className="mt-5 max-w-3xl text-[17px] leading-[1.9] text-brand-charcoal">
                      The project went beyond analysis by proposing a future-state solution through an RFP designed to help Northwind Traders modernize how it measures profitability, forecasts performance, and improves operational decision-making.
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    {[
                      { title: 'Proposed Budget', value: '$900,000', bg: 'bg-brand-lavender/45' },
                      { title: 'Timeline', value: '6 months', bg: 'bg-brand-peach/45' },
                      { title: 'Proposed Vendors', value: 'KPMG · Sysco · Clairvoyant', bg: 'bg-brand-blush/45' },
                    ].map((item) => (
                      <div key={item.title} className={`rounded-[24px] ${item.bg} p-6`}>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5DCAA5]">{item.title}</p>
                        <p className="mt-3 text-xl font-serif font-bold text-brand-plum">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-[28px] bg-brand-white border border-brand-line/70 p-6 shadow-sm">
                    <h3 className="text-xl font-serif font-bold text-brand-plum">Forward-looking strategy</h3>
                    <ul className="mt-4 space-y-3 text-[15px] leading-[1.8] text-brand-charcoal">
                      <li>• Modernizing the activity-based costing model</li>
                      <li>• Integrating predictive analytics and profitability forecasting</li>
                      <li>• Improving order efficiency</li>
                      <li>• Supporting better financial and operational decision-making</li>
                    </ul>
                  </div>
                </div>
              ) : null}

              {activeStep === 6 ? (
                <div className="space-y-10">
                  <div>
                    <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#5DCAA5]">Outcome &amp; Reflection</p>
                    <h2 className="mt-4 text-3xl font-serif font-bold text-brand-plum">What did this project demonstrate?</h2>
                    <p className="mt-5 max-w-3xl text-[17px] leading-[1.9] text-brand-charcoal">
                      This project demonstrated how I approach business analysis as a decision-making tool, not just a reporting exercise. It connected insights, recommendations, and forward-looking planning in a way that felt much closer to real business strategy work than a classroom assignment.
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-[24px] bg-brand-cream p-6 border border-brand-line/70">
                      <h3 className="text-lg font-semibold text-brand-plum">Deliverables</h3>
                      <ul className="mt-4 space-y-3 text-[15px] leading-[1.8] text-brand-charcoal">
                        {deliverables.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-[24px] bg-brand-lavender/45 p-6">
                      <h3 className="text-lg font-semibold text-brand-plum">Skills Demonstrated</h3>
                      <div className="mt-4 flex flex-wrap gap-3">
                        {skills.map((skill) => (
                          <span key={skill} className="rounded-full border border-brand-charcoal/18 bg-brand-white/75 px-4 py-2 text-sm font-semibold text-brand-charcoal">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[28px] bg-brand-peach/45 p-7 md:p-8">
                    <p className="text-[18px] italic font-serif leading-[1.95] text-brand-plum">
                      This project strengthened my ability to look beyond the data and focus on what the numbers mean for the business. It taught me how to connect analysis with strategy, communicate findings clearly, and think about solutions that improve both profitability and operations.
                    </p>
                    <p className="mt-5 text-[16px] italic font-serif leading-[1.9] text-brand-plum">
                      I learned how to move beyond analyzing data to actually using it to guide business decisions and strategy.
                    </p>
                  </div>
                </div>
              ) : null}

              <div className="mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={() => setActiveStep((step) => Math.max(1, step - 1))}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-line px-5 py-3 text-sm font-semibold text-brand-plum hover:bg-brand-lavender/45 transition-colors cursor-pointer"
                >
                  <ArrowLeft size={16} />
                  Back
                </button>

                {steps[activeStep - 1]?.prompt ? (
                  <button
                    type="button"
                    onClick={() => setActiveStep((step) => Math.min(6, step + 1))}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-plum px-5 py-3 text-sm font-semibold text-white hover:bg-[#6a5a7c] transition-colors cursor-pointer"
                  >
                    {steps[activeStep - 1].prompt}
                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-plum px-5 py-3 text-sm font-semibold text-white hover:bg-[#6a5a7c] transition-colors"
                  >
                    Back to Portfolio
                    <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <CaseStudyMore currentId="northwind-traders" />
    </div>
  );
};

export default NorthwindTraders;
