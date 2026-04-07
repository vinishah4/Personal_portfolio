import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, ClipboardList, Briefcase, FileText, Users, MessageCircle, CheckCheck, Lightbulb, Sparkles, MapPin, Clock3, NotebookPen } from 'lucide-react';
import CaseStudyMore from '../components/CaseStudyMore';

const lessonWeeks = [
  {
    week: 'Week 1',
    title: 'Transitioning Into W. P. Carey',
    objective: 'Help students feel grounded, welcomed, and less overwhelmed as they adjusted to a new academic environment.',
    content: ['Campus resources', 'Student expectations', 'Business school culture', 'Academic planning basics'],
    activities: ['Introductions and icebreakers', 'Resource mapping', 'Group discussion on first-week concerns'],
    tools: ['Google Slides', 'ASU resource links', 'Peer discussion prompts'],
    engagement: 'Created a low-pressure environment where students could voice uncertainty without embarrassment.',
    outcome: ['Clarity', 'Belonging', 'First-step direction'],
    bg: 'bg-[#F1ECF8]',
  },
  {
    week: 'Week 2',
    title: 'Career Development & LinkedIn',
    objective: 'Show students how to start building a professional presence early instead of waiting until internship season.',
    content: ['LinkedIn', 'Handshake', 'Internships', 'Clubs & involvement'],
    activities: ['LinkedIn profile walkthrough', 'Resume brainstorms', 'Career interest discussion'],
    tools: ['Google Slides', 'LinkedIn', 'Handshake', 'Campus career resources'],
    engagement: 'Encouraged students to ask practical career questions and normalized not having everything figured out yet.',
    outcome: ['Confidence', 'Professional direction', 'Actionable next steps'],
    bg: 'bg-[#EAF4EE]',
  },
  {
    week: 'Week 3',
    title: 'Academic Momentum & Time Management',
    objective: 'Help students build sustainable routines that supported performance without burnout.',
    content: ['Semester scheduling', 'Study strategies', 'Prioritization', 'Accountability habits'],
    activities: ['Calendar planning', 'Weekly reset exercise', 'Small-group strategy sharing'],
    tools: ['Planning templates', 'Google Slides', 'Assignment trackers'],
    engagement: 'Facilitated honest conversation about stress, procrastination, and how to recover when falling behind.',
    outcome: ['Structure', 'Consistency', 'Better self-management'],
    bg: 'bg-[#F8EEE4]',
  },
];

const weeklyChecklist = [
  'Planned weekly lesson structure',
  'Designed Google Slides using ASU brand guidelines',
  'Conducted weekly check-ins',
  'Held 1:1 mentorship sessions',
  'Evaluated assignments and gave feedback',
  'Supported student goal-setting',
];

const supportCards = [
  {
    title: 'Academic planning',
    body: 'Built semester schedules and helped students understand requirements in a way that felt manageable.',
    icon: <CalendarDays size={18} strokeWidth={1.8} />,
    bg: 'bg-brand-lavender/55',
  },
  {
    title: 'Career confusion',
    body: 'Explored paths together so students could connect interests with realistic next steps.',
    icon: <Sparkles size={18} strokeWidth={1.8} />,
    bg: 'bg-brand-blush/55',
  },
  {
    title: 'No LinkedIn',
    body: 'Guided students through profile creation and how to present themselves professionally.',
    icon: <Briefcase size={18} strokeWidth={1.8} />,
    bg: 'bg-brand-sage/55',
  },
  {
    title: 'No network',
    body: 'Introduced events, clubs, and peer communities that made campus feel more accessible.',
    icon: <Users size={18} strokeWidth={1.8} />,
    bg: 'bg-brand-peach/55',
  },
  {
    title: 'Feeling overwhelmed',
    body: 'Provided structured support, follow-up, and reassurance so students could move forward with confidence.',
    icon: <MessageCircle size={18} strokeWidth={1.8} />,
    bg: 'bg-brand-cream',
  },
];

const frameworkSteps = [
  {
    title: 'Listen',
    body: 'Start with the student’s actual concern instead of assuming what they need.',
    icon: <MessageCircle size={18} strokeWidth={1.8} />,
  },
  {
    title: 'Understand',
    body: 'Look at context, personality, and what is creating stress or uncertainty.',
    icon: <ClipboardList size={18} strokeWidth={1.8} />,
  },
  {
    title: 'Guide',
    body: 'Connect them to the right strategy, tool, resource, or person.',
    icon: <Lightbulb size={18} strokeWidth={1.8} />,
  },
  {
    title: 'Follow Up',
    body: 'Check back in so support continues beyond the first conversation.',
    icon: <CheckCheck size={18} strokeWidth={1.8} />,
  },
];

const impactStats = [
  { value: '40', label: 'Students mentored', bg: 'bg-brand-lavender/60' },
  { value: 'Weekly', label: 'Engagement sessions', bg: 'bg-brand-sage/60' },
  { value: '1:1', label: 'Mentorship conversations', bg: 'bg-brand-blush/60' },
  { value: '1', label: 'Semester-long support system', bg: 'bg-brand-peach/60' },
];

const sectionMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.55, ease: 'easeInOut' },
};

const WpcFacilitator = () => {
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
            <span>WPC Facilitator Program</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr] items-start"
          >
            <div className="rounded-[32px] bg-[linear-gradient(135deg,#f1ecfb_0%,#f9e7ee_52%,#faf7f2_100%)] p-8 md:p-10 border border-brand-line/70 shadow-[0_20px_55px_rgba(110,93,121,0.08)]">
              <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#5DCAA5]">Semester Overview</p>
              <h1 className="mt-5 text-4xl md:text-5xl font-serif font-bold text-brand-plum leading-tight">WPC Facilitator Program</h1>
              <p className="mt-5 max-w-2xl text-lg leading-[1.9] text-brand-charcoal">
                Designing weekly learning experiences to support 40 students in leadership, career readiness, and academic success.
              </p>
            </div>

            <div className="rounded-[28px] bg-brand-white border border-brand-line/70 p-6 shadow-[0_16px_40px_rgba(110,93,121,0.08)]">
              <div className="flex items-center gap-3 text-brand-plum">
                <NotebookPen size={18} strokeWidth={1.9} />
                <p className="text-sm font-semibold">Semester snapshot</p>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  ['40', 'Students mentored'],
                  ['Weekly', 'Sessions'],
                  ['5+', 'Core topics'],
                  ['1', 'Semester impact'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-[20px] bg-brand-cream px-4 py-4">
                    <div className="text-2xl font-serif font-bold text-brand-plum">{value}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.12em] text-brand-charcoal/72">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-10">
        <div className="max-w-6xl mx-auto">
          <motion.div {...sectionMotion}>
            <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#5DCAA5] mb-6">Weekly Lesson Planner</p>
            <div className="grid gap-6 md:pb-12">
              {lessonWeeks.map((week, index) => (
                <motion.article
                  key={week.week}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, ease: 'easeInOut', delay: index * 0.08 }}
                  className={`${week.bg} isolate rounded-[28px] border border-brand-line/80 p-6 md:p-7 shadow-[0_18px_40px_rgba(110,93,121,0.1)] hover:-translate-y-1 hover:shadow-[0_22px_42px_rgba(110,93,121,0.12)] transition-all duration-300 md:sticky`}
                  style={{ top: index === 0 ? '7.5rem' : index === 1 ? '9.5rem' : '11.5rem' }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="rounded-full bg-brand-white px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#5DCAA5] border border-brand-line/70">
                      {week.week}
                    </span>
                    <h2 className="text-2xl font-serif font-bold text-brand-plum">{week.title}</h2>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    <div className="rounded-[20px] bg-brand-white/95 border border-brand-line/65 p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#5DCAA5]">Objective</p>
                      <p className="mt-3 text-sm leading-[1.8] text-brand-charcoal">{week.objective}</p>
                    </div>
                    <div className="rounded-[20px] bg-brand-white/95 border border-brand-line/65 p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#5DCAA5]">Lesson Content</p>
                      <ul className="mt-3 space-y-1.5 text-sm leading-[1.7] text-brand-charcoal">
                        {week.content.map((item) => <li key={item}>• {item}</li>)}
                      </ul>
                    </div>
                    <div className="rounded-[20px] bg-brand-white/95 border border-brand-line/65 p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#5DCAA5]">Activities</p>
                      <ul className="mt-3 space-y-1.5 text-sm leading-[1.7] text-brand-charcoal">
                        {week.activities.map((item) => <li key={item}>• {item}</li>)}
                      </ul>
                    </div>
                    <div className="rounded-[20px] bg-brand-white/95 border border-brand-line/65 p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#5DCAA5]">Tools Used</p>
                      <ul className="mt-3 space-y-1.5 text-sm leading-[1.7] text-brand-charcoal">
                        {week.tools.map((item) => <li key={item}>• {item}</li>)}
                      </ul>
                    </div>
                    <div className="rounded-[20px] bg-brand-white/95 border border-brand-line/65 p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#5DCAA5]">Engagement</p>
                      <p className="mt-3 text-sm leading-[1.8] text-brand-charcoal">{week.engagement}</p>
                    </div>
                    <div className="rounded-[20px] bg-brand-white/95 border border-brand-line/65 p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#5DCAA5]">Outcome</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {week.outcome.map((item) => (
                          <span key={item} className="rounded-full bg-brand-lavender/55 px-3 py-1 text-xs font-semibold text-brand-plum">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...sectionMotion} className="rounded-[30px] bg-[linear-gradient(135deg,#f6e8ef_0%,#f2ecfb_55%,#faf7f2_100%)] border border-brand-line/60 p-7 md:p-8 shadow-[0_18px_40px_rgba(110,93,121,0.08)]">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#5DCAA5]">
                  <Sparkles size={14} />
                  Student Favorite
                </div>
                <h2 className="mt-4 text-3xl font-serif font-bold text-brand-plum">Spark Tank Challenge</h2>
                <p className="mt-4 max-w-2xl text-[16px] leading-[1.9] text-brand-charcoal">
                  Students worked in teams to create startup ideas and present them. This activity encouraged creativity, collaboration, and real-world thinking while helping them practice speaking up, building on each other’s ideas, and translating abstract concepts into something tangible.
                </p>
              </div>
              <div className="rounded-[22px] bg-brand-white/70 px-5 py-5 min-w-[220px]">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#5DCAA5]">Activity goals</p>
                <ul className="mt-3 space-y-2 text-sm leading-[1.7] text-brand-charcoal">
                  <li>• Team collaboration</li>
                  <li>• Startup thinking</li>
                  <li>• Presentation confidence</li>
                  <li>• Real-world application</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-12">
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div {...sectionMotion} className="rounded-[28px] bg-brand-white border border-brand-line/70 p-6 md:p-7 shadow-[0_14px_36px_rgba(110,93,121,0.06)]">
            <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#5DCAA5] mb-5">Beyond the Lesson: What Happened Every Week</p>
            <div className="space-y-3">
              {weeklyChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-[18px] bg-brand-cream px-4 py-3">
                  <CheckCheck size={18} strokeWidth={1.8} className="text-[#5DCAA5] mt-0.5" />
                  <span className="text-sm leading-[1.7] text-brand-charcoal">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...sectionMotion} className="rounded-[28px] bg-brand-white border border-brand-line/70 p-6 md:p-7 shadow-[0_14px_36px_rgba(110,93,121,0.06)]">
            <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#5DCAA5] mb-5">How I Supported Students</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {supportCards.map((card) => (
                <div key={card.title} className={`${card.bg} rounded-[20px] p-4`}>
                  <div className="flex items-center gap-2 text-brand-plum">
                    {card.icon}
                    <h3 className="text-[15px] font-bold">{card.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-[1.8] text-brand-charcoal">{card.body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...sectionMotion} className="rounded-[28px] bg-brand-white border border-brand-line/70 p-6 md:p-7 shadow-[0_14px_36px_rgba(110,93,121,0.06)]">
            <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#5DCAA5] mb-6">My Approach</p>
            <div className="grid gap-4 md:grid-cols-4">
              {frameworkSteps.map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="rounded-[22px] bg-brand-cream p-5 h-full">
                    <div className="flex items-center gap-2 text-brand-plum">
                      {step.icon}
                      <h3 className="text-base font-bold">{step.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-[1.8] text-brand-charcoal">{step.body}</p>
                  </div>
                  {index < frameworkSteps.length - 1 ? (
                    <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 text-[#9CCFC3]">
                      <svg width="32" height="12" viewBox="0 0 32 12" fill="none" aria-hidden="true">
                        <path d="M1 6H28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M23 1L28 6L23 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-12">
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div {...sectionMotion} className="rounded-[28px] bg-brand-white border border-brand-line/70 p-6 md:p-7 shadow-[0_14px_36px_rgba(110,93,121,0.06)]">
            <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#5DCAA5] mb-5">Impact</p>
            <div className="grid grid-cols-2 gap-4">
              {impactStats.map((stat) => (
                <div key={stat.label} className={`${stat.bg} rounded-[20px] px-4 py-5`}>
                  <div className="text-3xl font-serif font-bold text-brand-plum">{stat.value}</div>
                  <div className="mt-2 text-sm text-brand-charcoal/78">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm italic text-brand-charcoal/76">
              Confidence was built over time through consistent support and structured guidance.
            </p>
          </motion.div>

          <motion.div {...sectionMotion} className="rounded-[28px] bg-brand-lavender/40 border border-brand-line/70 p-6 md:p-7 shadow-[0_14px_36px_rgba(110,93,121,0.06)]">
            <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#5DCAA5] mb-5">Reflection</p>
            <p className="text-[18px] leading-[1.95] text-brand-charcoal font-serif">
              Leading these sessions taught me how to adapt my communication, understand different personalities, and create an environment where students felt comfortable asking questions. The most important thing I learned was that impact doesn’t come from having all the answers — it comes from making someone feel supported.
            </p>
          </motion.div>
        </div>
      </section>

      <CaseStudyMore currentId="wpc-facilitator-program" />
    </div>
  );
};

export default WpcFacilitator;
