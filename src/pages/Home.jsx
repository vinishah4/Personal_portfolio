import { motion, useMotionValue, useTransform, animate, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Lightbulb, Mail, MapPin, X, GraduationCap, Users, Megaphone, Camera, ChevronLeft, ChevronRight, MessageCircle, CheckCheck, Briefcase, FileText, Clock3, Compass, CalendarDays } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import asuBrandPortPhoto from '../assets/Photo/mainport.jpeg';

import nomadtemp from '../assets/Photo/Mainhomephoto/Nomadtempport.png'; 
import icustomer from '../assets/Photo/Mainhomephoto/ICSUTPORT.png'; 
import asu_brand from '../assets/Photo/Mainhomephoto/ASUBRANDPORT.png'; 
import FloatingDoodle from '../components/FloatingDoodle';
import HomeTestimonials from '../components/ui/testimonials-demo';
import { HeroSection } from '@/components/ui/hero-section-with-smooth-bg-shader';





const DoodleShell = ({ className = "", innerClassName = "", children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.94, y: 16 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: false, margin: "-12% 0px" }}
    transition={{ duration: 0.65, ease: "easeOut" }}
    className={`absolute z-20 ${className}`}
  >
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [-1.5, 1.5, -1.5],
        boxShadow: [
          "0 0 0 rgba(0,0,0,0)",
          "0 0 0 rgba(0,0,0,0)",
          "0 0 0 rgba(0,0,0,0)",
        ],
      }}
      transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
      className={`relative overflow-visible rounded-[2rem] border-0 bg-transparent p-4 shadow-none backdrop-blur-0 ${innerClassName}`}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  </motion.div>
);

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [count, value, isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const PhotoStrip = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (isHovered || lightboxOpen || !images || images.length === 0) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered, lightboxOpen, images]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const paginate = (newDirection, e) => {
    if(e) e.stopPropagation();
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + images.length) % images.length);
  };

  return (
    <div className="w-full relative mt-8">
      <h4 className="text-sm font-bold tracking-[0.24em] text-brand-gold uppercase mb-4">WORK IN ACTION</h4>
      
      {/* Strip Container */}
      <div 
        className="relative w-full h-[200px] md:h-[280px] rounded-[24px] overflow-hidden bg-brand-lavender/65 cursor-pointer group shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] border border-brand-line/60"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setLightboxOpen(true)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "tween", duration: 0.6, ease: "easeInOut" }, opacity: { duration: 0.2 } }}
            className="absolute inset-0 w-full h-full flex items-center justify-center bg-transparent"
          >
            {images[currentIndex] === "placeholder" ? (
              <div className="flex flex-col items-center justify-center text-brand-charcoal/55">
                <Camera size={24} className="mb-2 opacity-60" />
                <span className="text-[12px] font-medium tracking-wide">Upload your work photo here</span>
              </div>
            ) : (
              <img src={images[currentIndex]} alt={`Work sample ${currentIndex + 1}`} className="w-full h-full object-cover" />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows (Strip) */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-3 md:px-4 z-10 pointer-events-none">
          <button 
            onClick={(e) => paginate(-1, e)}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-white/85 backdrop-blur-md flex items-center justify-center text-brand-plum opacity-70 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto hover:bg-brand-white shadow-sm cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            onClick={(e) => paginate(1, e)}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-white/85 backdrop-blur-md flex items-center justify-center text-brand-plum opacity-70 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto hover:bg-brand-white shadow-sm cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-5 cursor-default">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex 
                ? 'bg-brand-gold w-6' 
                : 'w-2 border border-brand-line bg-brand-white/40 hover:bg-brand-white/80'
            }`}
          />
        ))}
      </div>
      
      {/* Caption */}
      <p className="text-center text-brand-charcoal/80 italic text-[15px] mt-4 max-w-lg mx-auto">
        A snapshot of the brand operations work behind the scenes at ASU.
      </p>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <div 
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
            onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
          >
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="absolute inset-0 bg-[#463c52]/88 backdrop-blur-sm cursor-pointer"
            />
            <button 
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors p-2 z-[210] rounded-full hover:bg-white/10 cursor-pointer"
              onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
            >
              <X size={28} />
            </button>
            
            <div className="relative w-full max-w-6xl h-full max-h-[85vh] flex items-center justify-center pointer-events-none z-[205]">
               <button 
                onClick={(e) => paginate(-1, e)}
                className="absolute left-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur flex items-center justify-center text-white transition-all pointer-events-auto cursor-pointer"
              >
                <ChevronLeft size={28} />
              </button>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full md:w-[85%] h-full bg-transparent rounded-2xl overflow-hidden flex items-center justify-center pointer-events-auto shadow-none"
                onClick={e => e.stopPropagation()}
              >
                {images[currentIndex] === "placeholder" ? (
                  <div className="w-full aspect-video md:aspect-[16/9] bg-white/10 rounded-2xl flex flex-col items-center justify-center text-white/70 max-w-4xl max-h-full shadow-2xl">
                    <Camera size={48} className="mb-4 opacity-50" />
                    <span className="text-sm font-medium tracking-wide">Upload your work photo here</span>
                  </div>
                ) : (
                  <img src={images[currentIndex]} className="w-full h-full object-contain" alt="Fullscreen" />
                )}
              </motion.div>

              <button 
                onClick={(e) => paginate(1, e)}
                className="absolute right-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur flex items-center justify-center text-white transition-all pointer-events-auto cursor-pointer"
              >
                <ChevronRight size={28} />
              </button>
            </div>
            
            {/* Lightbox Dots */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-[210]">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                  className={`h-2 rounded-full transition-all duration-300 pointer-events-auto ${
                    idx === currentIndex ? 'bg-white w-6' : 'bg-white/30 w-2 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const responseTimeData = [
  { label: "Average First Reply Time", before: 4.2, after: 1.8, unit: "hrs" },
  { label: "Resolution Time", before: 2.3, after: 1.1, unit: "days" },
  { label: "Escalation Rate", before: 18, after: 4, unit: "%" },
];

const monthlyInquiryData = [
  { month: "Month 1", inquiries: "98", resolved: "72%", satisfaction: "94%" },
  { month: "Month 2", inquiries: "134", resolved: "81%", satisfaction: "97%" },
  { month: "Month 3", inquiries: "156", resolved: "89%", satisfaction: "98%" },
  { month: "Month 4", inquiries: "124", resolved: "91%", satisfaction: "99%" },
];

const industriesData = [
  { label: "Consulting", companies: "Deloitte, Accenture", percentage: 35, color: "#CECBF6" },
  { label: "Technology", companies: "Microsoft, Amazon", percentage: 28, color: "#5DCAA5" },
  { label: "Healthcare", companies: "Mayo Clinic, HCA Healthcare", percentage: 18, color: "#F4C0D1" },
  { label: "Insurance", companies: "State Farm, Allstate", percentage: 12, color: "#FAC775" },
  { label: "Relocation & Mobility", companies: "Cartus, Graebel", percentage: 7, color: "#D3D1C7" },
];

const wpcProcessSteps = [
  {
    icon: <MessageCircle size={20} strokeWidth={1.8} />,
    label: "Listen",
    description: "Understanding each student's specific challenges, fears, and goals before offering any guidance.",
    bg: "bg-brand-lavender/70",
  },
  {
    icon: <Lightbulb size={20} strokeWidth={1.8} />,
    label: "Guide",
    description: "Connecting students to the right resources, strategies, and people based on their individual situation.",
    bg: "bg-[#DDF4EC]",
  },
  {
    icon: <CheckCheck size={20} strokeWidth={1.8} />,
    label: "Follow Up",
    description: "Checking back in to make sure students stayed on track and felt supported beyond the initial session.",
    bg: "bg-brand-blush/70",
  },
];

const whatIDoBestCards = [
  {
    id: "01",
    title: "Project Coordination",
    description: "Keeping teams aligned and timelines on track — managed 500+ brand initiatives at ASU with 100% on-time delivery.",
    tags: ["Wrike", "Timeline Management", "Reporting"],
    color: "bg-[#dfeee3]",
    icon: CheckCheck,
  },
  {
    id: "02",
    title: "Client & Customer Service",
    description: "Coordinating temporary relocation requests between Fortune 1000 corporate clients and accommodation providers, I handle high-volume interactions with professionalism, clarity, and care.",
    tags: ["CRM Tools", "Client Relations", "Problem Solving"],
    color: "bg-[#f4dfe5]",
    icon: Users,
  },
  {
    id: "03",
    title: "Brand & Marketing Operations",
    description: "From brand audits and competitive research to website content and asset management — I keep brands consistent and campaigns moving.",
    tags: ["Drupal CMS", "Brand Strategy", "Content Marketing"],
    color: "bg-[#e6ddf7]",
    icon: Briefcase,
  },
  {
    id: "04",
    title: "Content & Digital Marketing",
    description: "Creating content that connects. Managed blogs, social media, email campaigns, and SEO strategy — bringing both strategic thinking and hands-on execution.",
    tags: ["SEO", "Social Media", "Email Campaigns"],
    color: "bg-[#f8e7b6]",
    icon: Megaphone,
  },
];

const currentRoleHoverCards = [
  {
    id: "01",
    title: "Project & Workflow Management",
    teaser: "Inside the system",
    description:
      "Built and scaled Wrike workflows for major ASU brand initiatives, including Sun Devil Athletics — managing and reporting on 600+ projects while creating new workflow systems to improve visibility, coordination, and on-time delivery.",
    pills: ["Wrike", "Project Tracking", "Reporting", "Documentation", "Cross-team Coordination"],
    icon: CheckCheck,
    hoverTone: "hover:bg-[#e3efe4] hover:border-[#99bea0]",
    pillTone: "bg-[#cfe0d2] text-[#4f6453]",
    dividerTone: "group-hover:bg-[#99bea0]",
  },
  {
    id: "02",
    title: "Digital & Website Management",
    teaser: "How it works",
    description:
      "Maintained and updated the ASU Brand Guide website using Drupal CMS — aligning web content with internal brand standards and refining backend pages for consistency, usability, and accessibility.",
    pills: ["Drupal CMS", "Webspark", "Content Management", "Brand Standards", "Accessibility"],
    icon: FileText,
    hoverTone: "hover:bg-[#ece6f7] hover:border-[#b4a9d2]",
    pillTone: "bg-[#ddd4ef] text-[#60557b]",
    dividerTone: "group-hover:bg-[#b4a9d2]",
  },
  {
    id: "03",
    title: "Cross-Functional Execution",
    teaser: "See execution",
    description:
      "Collaborated with design, marketing, and media teams across ASU to support brand campaigns, multimedia planning, and internal reporting — improving project visibility and ensuring on-time asset delivery.",
    pills: ["Team Collaboration", "Brand Campaigns", "Stakeholder Alignment", "Asset Delivery", "Media Support"],
    icon: Users,
    hoverTone: "hover:bg-[#f7e8de] hover:border-[#d7b39a]",
    pillTone: "bg-[#efd4c3] text-[#7a5b45]",
    dividerTone: "group-hover:bg-[#d7b39a]",
  },
];

const wpcWorkshopTopics = [
  {
    title: "Academic Planning",
    description: "Course selection, degree requirements, and building a semester plan that actually works.",
    icon: <CalendarDays size={22} strokeWidth={1.7} />,
    bg: "bg-brand-lavender/75",
  },
  {
    title: "Professional Development",
    description: "Networking basics, LinkedIn setup, and how to start building a professional presence early.",
    icon: <Briefcase size={22} strokeWidth={1.7} />,
    bg: "bg-[#DDF4EC]",
  },
  {
    title: "Resume Foundations",
    description: "Crafting a first resume that tells a clear story even without extensive work experience.",
    icon: <FileText size={22} strokeWidth={1.7} />,
    bg: "bg-brand-blush/75",
  },
  {
    title: "Time Management",
    description: "Study strategies, prioritization frameworks, and avoiding the burnout trap in a demanding program.",
    icon: <Clock3 size={22} strokeWidth={1.7} />,
    bg: "bg-brand-peach/75",
  },
  {
    title: "Campus Resources",
    description: "Tutoring centers, career services, student orgs — knowing what exists and how to actually use it.",
    icon: <MapPin size={22} strokeWidth={1.7} />,
    bg: "bg-brand-sage/75",
  },
  {
    title: "Career Exploration",
    description: "Exploring majors, internship options, and what a career in business could realistically look like.",
    icon: <Compass size={22} strokeWidth={1.7} />,
    bg: "bg-[#F6EFD8]",
  },
];

const brandOperationsAreas = [
  {
    title: "Workflow Systems",
    summary: "Managing and structuring large-scale brand workflows",
    detail:
      "Built and scaled Wrike workflows for enterprise initiatives, including Sun Devil Athletics — managing and reporting on 600+ projects while improving tracking, documentation, and team coordination.",
    icon: CheckCheck,
  },
  {
    title: "Digital & Website",
    summary: "Maintaining ASU's brand infrastructure",
    detail:
      "Managed and updated the ASU Brand Guide website (Drupal CMS), aligning content with internal standards and improving usability for 100+ departments.",
    icon: FileText,
  },
  {
    title: "Brand Research",
    summary: "Analyzing brand systems and positioning",
    detail:
      "Conducted competitor brand audits (NAU, U of A, GCU), identified differentiation opportunities, and refined internal typography and design guidelines.",
    icon: Lightbulb,
  },
  {
    title: "Asset & Content Management",
    summary: "Organizing and structuring brand assets",
    detail:
      "Centralized user-generated content (UGC), maintained asset libraries, and supported editorial organization for ASU Thrive Magazine.",
    icon: Briefcase,
  },
  {
    title: "Media & Event Support",
    summary: "Supporting brand storytelling and production",
    detail:
      "Assisted with multimedia planning, photography studio setup, and brand activation content for major initiatives like ASU Commencement.",
    icon: Camera,
  },
  {
    title: "Operations & Communication",
    summary: "Supporting internal coordination and systems",
    detail:
      "Managed internal communications, onboarding materials, email distribution lists, and documentation systems to support brand and creative teams.",
    icon: MessageCircle,
  },
];

const brandOperationsFlow = [
  ["Intake", "Brand requests and campaign needs are received"],
  ["Workflow Setup", "Wrike workflows created and structured"],
  ["Content & Assets", "Content, assets, and brand materials organized"],
  ["Collaboration", "Design, marketing, and media teams aligned"],
  ["Delivery", "Assets executed and delivered"],
  ["Reporting", "Progress tracked and shared through internal decks"],
];

const brandOperationsMetrics = [
  "600+ Projects Managed",
  "100+ Departments Supported",
  "~97% On-Time Delivery",
  "Enterprise Brand Office Experience",
];

const brandOperationsSkills = [
  "Wrike",
  "Drupal",
  "Figma",
  "Adobe XD",
  "Canto",
  "Project Management",
  "Content Systems",
  "Brand Strategy",
  "Cross-Functional Collaboration",
  "Documentation",
  "Asset Management",
];

const wpcChallengeRows = [
  {
    challenge: "Didn't know which classes to take",
    solution: "Walked through degree requirements and built a personalized semester plan together",
  },
  {
    challenge: "Felt overwhelmed and isolated",
    solution: "Connected them with study groups, student orgs, and peer networks",
  },
  {
    challenge: "No professional network or LinkedIn presence",
    solution: "Introduced them to networking events and helped set up their professional profiles",
  },
  {
    challenge: "Unsure of career direction or major",
    solution: "Explored options together and mapped interests to realistic career paths",
  },
  {
    challenge: "Struggling academically",
    solution: "Pointed them toward tutoring resources, office hours, and better study strategies",
  },
];

const MetricValue = ({ value, suffix = "" }) => (
  <>
    <AnimatedNumber value={value} />
    {suffix}
  </>
);

const NomadMetricStrip = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="grid gap-4 md:grid-cols-3 mt-10">
      {[
        { value: 500, suffix: "+", label: "Client Inquiries Managed", color: "bg-brand-lavender/70" },
        { value: 98, suffix: "%", label: "Satisfaction Rate Maintained", color: "bg-[#DDF4EC]" },
        { value: 57, suffix: "%", label: "Reduction in Response Time", color: "bg-brand-blush/70" },
      ].map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeInOut", delay: index * 0.08 }}
          className={`${metric.color} rounded-[24px] px-6 py-7`}
        >
          <div className="text-[36px] leading-none font-serif font-bold text-brand-plum">
            {isInView ? <MetricValue value={metric.value} suffix={metric.suffix} /> : `0${metric.suffix}`}
          </div>
          <div className="mt-2 text-[16px] text-brand-charcoal/80">{metric.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

const NomadResponseTimeChart = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const barMaxWidth = 320;

  return (
    <div ref={ref} className="mt-4 overflow-x-auto">
      <div className="min-w-[620px]">
        <div className="flex items-center justify-between gap-4 mb-5">
          <h5 className="text-xs font-bold tracking-[0.24em] text-[#7FAEA3] uppercase">Response Time Before &amp; After</h5>
          <div className="flex items-center gap-4 text-[13px] text-brand-charcoal/80">
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#E7A69A]" />
              Before
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#5DCAA5]" />
              After
            </span>
          </div>
        </div>

        <svg viewBox="0 0 620 240" className="w-full h-auto" role="img" aria-label="Response time before and after process improvements">
          {responseTimeData.map((item, index) => {
            const top = 18 + index * 74;
            const localMax = Math.max(item.before, item.after);
            const beforeWidth = (item.before / localMax) * barMaxWidth;
            const afterWidth = (item.after / localMax) * barMaxWidth;

            return (
              <g key={item.label}>
                <text x="0" y={top + 12} fill="#4A3F55" fontSize="15" fontWeight="700">
                  {item.label}
                </text>
                <motion.rect
                  x="0"
                  y={top + 28}
                  width={isInView ? beforeWidth : 0}
                  height="14"
                  rx="7"
                  fill="#E7A69A"
                  initial={false}
                  animate={{ width: isInView ? beforeWidth : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut", delay: index * 0.08 }}
                />
                <text x={beforeWidth + 10} y={top + 39} fill="#E7A69A" fontSize="13" fontWeight="600">
                  Before {item.before} {item.unit}
                </text>
                <motion.rect
                  x="0"
                  y={top + 50}
                  width={isInView ? afterWidth : 0}
                  height="14"
                  rx="7"
                  fill="#5DCAA5"
                  initial={false}
                  animate={{ width: isInView ? afterWidth : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut", delay: index * 0.08 + 0.08 }}
                />
                <text x={afterWidth + 10} y={top + 61} fill="#5DCAA5" fontSize="13" fontWeight="600">
                  After {item.after} {item.unit}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <p className="mt-4 text-[13px] italic text-brand-charcoal/75">
        After implementing the prioritization matrix and standardized communication templates.
      </p>
    </div>
  );
};

const NomadSatisfactionDonut = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const radius = 72;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * 0.02;

  return (
    <div ref={ref} className="flex flex-col items-center">
      <h5 className="text-base font-semibold text-brand-plum mb-6">Client Satisfaction Rate</h5>
      <svg viewBox="0 0 220 220" className="w-[220px] h-[220px] drop-shadow-[0_14px_25px_rgba(93,202,165,0.08)]" role="img" aria-label="Client satisfaction rate 98 percent">
        <circle cx="110" cy="110" r={radius} fill="none" stroke="#E7E7E7" strokeWidth="22" />
        <motion.circle
          cx="110"
          cy="110"
          r={radius}
          fill="none"
          stroke="#5DCAA5"
          strokeWidth="22"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={isInView ? dashOffset : circumference}
          transform="rotate(-90 110 110)"
          initial={false}
          animate={{ strokeDashoffset: isInView ? dashOffset : circumference }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        <text x="110" y="108" textAnchor="middle" fill="#4A3F55" fontSize="34" fontWeight="700">
          98%
        </text>
        <text x="110" y="132" textAnchor="middle" fill="#5F5F5F" fontSize="12">
          satisfied
        </text>
      </svg>
    </div>
  );
};

const NomadIndustriesChart = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const barMaxWidth = 340;

  return (
  <div ref={ref} className="mt-4 overflow-x-auto">
    <div className="min-w-[620px]">
      <h5 className="text-xs font-bold tracking-[0.24em] text-[#7FAEA3] uppercase mb-6">Fortune 1000 Client Industries Served</h5>
      <svg viewBox="0 0 620 290" className="w-full h-auto" role="img" aria-label="Client industries served chart">
        {industriesData.map((item, index) => {
          const y = 18 + index * 54;
          const width = (item.percentage / 100) * barMaxWidth;
          const companyX = item.label === "Relocation & Mobility" ? 0 : 120;
          const companyY = item.label === "Relocation & Mobility" ? y + 28 : y + 12;
          const barY = item.label === "Relocation & Mobility" ? y + 36 : y + 20;
          const valueY = item.label === "Relocation & Mobility" ? y + 49 : y + 33;

          return (
            <g key={item.label}>
              <text x="0" y={y + 12} fill="#4A3F55" fontSize="14" fontWeight="600">
                {item.label}
              </text>
              {item.companies ? (
                <text x={companyX} y={companyY} fill="#7A7A7A" fontSize="12" fontStyle="italic">
                  {item.companies}
                </text>
              ) : null}
              <motion.rect
                x="0"
                y={barY}
                width={isInView ? width : 0}
                height="16"
                rx="8"
                fill={item.color}
                initial={false}
                animate={{ width: isInView ? width : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.1 }}
              />
              <text x={width + 10} y={valueY} fill={item.color} fontSize="13" fontWeight="700">
                {item.percentage}%
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  </div>
  );
};

const NomadCaseStudyModal = ({ study, onClose }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95, y: 20 }}
    onClick={(e) => e.stopPropagation()}
    className="relative bg-[#FDFAF6] w-full max-w-5xl rounded-[32px] overflow-y-auto shadow-[0_35px_80px_rgba(74,63,85,0.24)] max-h-[90vh]"
  >
    <div className="sticky top-5 z-20 flex justify-end px-5 pt-5 -mb-16 pointer-events-none">
      <button
        onClick={onClose}
        className="pointer-events-auto p-2.5 bg-brand-white/92 hover:bg-brand-white text-brand-plum rounded-full backdrop-blur-md border border-brand-line/70 shadow-[0_10px_30px_rgba(74,63,85,0.12)] transition-all duration-300 cursor-pointer"
      >
        <X size={22} />
      </button>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="relative h-[280px] md:h-[400px] bg-[linear-gradient(135deg,#d8ccc1_0%,#ece3da_58%,#f6f0e8_100%)]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#4a3f55]/90 via-[#4a3f55]/42 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
        <div className="max-w-[720px] mx-auto w-full">
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">Nomad Temporary Housing</h3>
          <p className="mt-4 text-[13px] md:text-sm font-bold tracking-[0.22em] uppercase text-[#9bd0c5]">Client Experience Internship · Fortune 1000</p>
        </div>
      </div>
    </motion.div>

    <div className="bg-[#FDFAF6] px-6 py-10 md:px-10 md:py-14">
      <div className="max-w-[720px] mx-auto space-y-14 md:space-y-16">
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeInOut", delay: 0.12 }}>
          <h4 className="text-sm font-bold tracking-[0.24em] text-brand-gold uppercase mb-5">Project Overview</h4>
          <p className="text-lg leading-[1.9] text-brand-charcoal font-serif max-w-[680px]">
            My internship at Nomad Temporary Housing was one of my first deep dives into client-facing operations. I supported temporary housing requests for employees at companies including Deloitte, Accenture, Microsoft, Mayo Clinic, and State Farm, while learning how to communicate under pressure, manage high-volume requests, and build more organized support systems. That experience strengthened both my professionalism and my confidence in fast-moving business environments.
          </p>
          <NomadMetricStrip />
        </motion.section>

        <section className="grid md:grid-cols-3 gap-6 bg-brand-cream border border-brand-line/70 p-8 rounded-[24px]">
          <div>
            <span className="font-bold text-brand-gold block mb-2 text-sm uppercase tracking-wider">Opportunity</span>
            <p className="text-brand-charcoal text-base leading-[1.8]">{study.problem}</p>
          </div>
          <div>
            <span className="font-bold text-brand-plum block mb-2 text-sm uppercase tracking-wider">Approach</span>
            <p className="text-brand-charcoal text-base leading-[1.8]">Implemented a prioritization matrix and standardized communication templates.</p>
          </div>
          <div>
            <span className="font-bold text-brand-gold block mb-2 text-sm uppercase tracking-wider">Implementation</span>
            <p className="text-brand-plum font-bold text-xl leading-tight">{study.result}</p>
          </div>
        </section>

        <section>
          <h4 className="text-[28px] font-serif font-semibold text-brand-plum mb-6">The Impact</h4>
          <NomadResponseTimeChart />
        </section>

        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <NomadSatisfactionDonut />
          <div>
            <p className="text-lg leading-[1.9] text-brand-charcoal font-serif">
              Across four months of high-volume operations, client satisfaction never dropped below 94% and trended upward every single month. The combination of a structured prioritization system and consistent communication standards kept enterprise clients confident even during peak demand periods.
            </p>
            <p className="mt-5 text-base font-medium text-[#5DCAA5]">
              Clients served included teams from Deloitte, Accenture, Microsoft, Mayo Clinic, and State Farm.
            </p>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between gap-4 mb-5">
            <h5 className="text-xs font-bold tracking-[0.24em] text-[#7FAEA3] uppercase">Monthly Inquiry Volume</h5>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[680px] w-full text-left">
              <thead>
                <tr className="text-[13px] text-[#7FAEA3]">
                  <th className="pb-4 font-bold">Month</th>
                  <th className="pb-4 font-bold">Inquiries Handled</th>
                  <th className="pb-4 font-bold">Resolved Same Day</th>
                  <th className="pb-4 font-bold">Satisfaction Score</th>
                </tr>
              </thead>
              <tbody className="text-[15px] text-brand-charcoal">
                {monthlyInquiryData.map((row, index) => (
                  <motion.tr
                    key={row.month}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, ease: "easeInOut", delay: index * 0.1 }}
                    className={index % 2 === 0 ? "bg-brand-white" : "bg-[#F5F3FF]"}
                  >
                    <td className={`px-4 py-4 border-b border-[#E6DFF2] font-medium sticky left-0 ${index % 2 === 0 ? "bg-brand-white" : "bg-[#F5F3FF]"}`}>{row.month}</td>
                    <td className="px-4 py-4 border-b border-[#E6DFF2]">{row.inquiries}</td>
                    <td className="px-4 py-4 border-b border-[#E6DFF2]">{row.resolved}</td>
                    <td className="px-4 py-4 border-b border-[#E6DFF2]">
                      <span className="inline-flex items-center gap-2 font-semibold text-brand-plum">
                        <span className="text-[#55A76A] text-base leading-none">↑</span>
                        {row.satisfaction}
                      </span>
                    </td>
                  </motion.tr>
                ))}
                <tr className="bg-[#EDE9FF] font-bold text-brand-plum">
                  <td className="px-4 py-4 sticky left-0 bg-[#EDE9FF]">Total</td>
                  <td className="px-4 py-4">512+</td>
                  <td className="px-4 py-4">83% avg</td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center gap-2">
                      <span className="text-[#55A76A] text-base leading-none">↑</span>
                      98% avg
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[13px] italic text-brand-charcoal/75">
            Inquiry volume and satisfaction both trended upward across all four months — reflecting the compounding effect of process improvements over time.
          </p>
        </section>

        <section>
          <NomadIndustriesChart />
        </section>

        <section>
          <h4 className="text-sm font-bold tracking-[0.24em] text-brand-gold uppercase mb-4">Skills Applied</h4>
          <div className="flex flex-wrap gap-3">
            {study.skills.map((skill, i) => (
              <span key={i} className="px-5 py-2.5 bg-brand-lavender/55 text-brand-plum rounded-full text-sm font-bold border border-brand-line/70 hover:bg-brand-blush/60 hover:border-brand-gold/25 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="py-2 text-center"
        >
          <p className="max-w-[560px] mx-auto text-2xl leading-[1.8] italic font-serif text-brand-plum">
            Every interaction with a high-profile client is an opportunity to build trust. I treated it that way every single time.
          </p>
          <p className="mt-4 text-[13px] font-bold tracking-[0.22em] uppercase text-[#5DCAA5]">Vinita Shah</p>
        </motion.section>
      </div>
    </div>
  </motion.div>
);

const WpcMetricStrip = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="grid gap-4 md:grid-cols-3 mt-10">
      {[
        { value: 40, suffix: "+", label: "Students Mentored", color: "bg-brand-lavender/75" },
        { value: 5, suffix: "+", label: "Core Workshop Topics", color: "bg-[#DDF4EC]" },
        { value: 1, suffix: "", label: "Semester of Consistent Impact", color: "bg-brand-blush/75" },
      ].map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeInOut", delay: index * 0.08 }}
          className={`${metric.color} rounded-[24px] px-6 py-7`}
        >
          <div className="text-[36px] leading-none font-serif font-bold text-brand-plum">
            {isInView ? <MetricValue value={metric.value} suffix={metric.suffix} /> : `0${metric.suffix}`}
          </div>
          <div className="mt-2 text-[13px] text-brand-charcoal/80">{metric.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

const WpcApproachDiagram = () => (
  <div className="mt-4">
    <div className="hidden md:flex items-start gap-4">
      {wpcProcessSteps.map((step, index) => (
        <div key={step.label} className="flex items-center flex-1 min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: "easeInOut", delay: index * 0.3 }}
            className={`w-full ${step.bg} rounded-[24px] px-5 py-6`}
          >
            <div className="mb-4 text-brand-plum">{step.icon}</div>
            <h5 className="text-base font-bold text-brand-plum mb-2">{step.label}</h5>
            <p className="text-[13px] leading-[1.7] text-brand-charcoal/80">{step.description}</p>
          </motion.div>
          {index < wpcProcessSteps.length - 1 ? (
            <div className="mx-3 flex items-center justify-center text-[#7FAEA3] shrink-0">
              <svg width="48" height="16" viewBox="0 0 48 16" fill="none" aria-hidden="true">
                <path d="M1 8H44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M38 3L44 8L38 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          ) : null}
        </div>
      ))}
    </div>

    <div className="md:hidden flex flex-col gap-3">
      {wpcProcessSteps.map((step, index) => (
        <div key={step.label} className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: "easeInOut", delay: index * 0.3 }}
            className={`w-full ${step.bg} rounded-[24px] px-5 py-6`}
          >
            <div className="mb-4 text-brand-plum">{step.icon}</div>
            <h5 className="text-base font-bold text-brand-plum mb-2">{step.label}</h5>
            <p className="text-[13px] leading-[1.7] text-brand-charcoal/80">{step.description}</p>
          </motion.div>
          {index < wpcProcessSteps.length - 1 ? (
            <div className="py-1 text-[#7FAEA3]">
              <svg width="18" height="34" viewBox="0 0 18 34" fill="none" aria-hidden="true">
                <path d="M9 1V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M4 23L9 29L14 23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  </div>
);

const WpcWorkshopGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    {wpcWorkshopTopics.map((topic, index) => (
      <motion.div
        key={topic.title}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.1 }}
        className={`${topic.bg} rounded-[24px] px-6 py-6`}
      >
        <div className="mb-4 text-brand-plum flex justify-center md:justify-start">{topic.icon}</div>
        <h5 className="text-[15px] font-bold text-brand-plum mb-2 text-center md:text-left">{topic.title}</h5>
        <p className="text-[12px] leading-[1.75] text-brand-charcoal/80 text-center md:text-left">{topic.description}</p>
      </motion.div>
    ))}
  </div>
);

const WpcChallengesTable = () => (
  <div className="mt-4 overflow-x-auto">
    <table className="min-w-[680px] w-full text-left">
      <thead>
        <tr>
          <th className="pb-4 text-[13px] font-bold uppercase tracking-[0.14em] text-[#E7A69A]">Challenge</th>
          <th className="pb-4 text-[13px] font-bold uppercase tracking-[0.14em] text-[#5DCAA5]">How I Helped</th>
        </tr>
      </thead>
      <tbody>
        {wpcChallengeRows.map((row, index) => (
          <motion.tr
            key={row.challenge}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.45, ease: "easeInOut", delay: index * 0.1 }}
            className={index % 2 === 0 ? "bg-brand-white" : "bg-[#F5F3FF]"}
          >
            <td className={`px-4 py-4 border-b border-[#E6DFF2] text-[14px] text-[#D27C8D] ${index % 2 === 0 ? "bg-brand-white" : "bg-[#F5F3FF]"} sticky left-0 align-top`}>{row.challenge}</td>
            <td className="px-4 py-4 border-b border-[#E6DFF2] text-[14px] text-brand-charcoal align-top">{row.solution}</td>
          </motion.tr>
        ))}
      </tbody>
    </table>
    <p className="mt-4 text-[13px] italic text-brand-charcoal/75">
      Every student came in with different challenges. The approach was always the same — listen first, then find the right path forward.
    </p>
  </div>
);

const WpcCaseStudyModal = ({ onClose }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95, y: 20 }}
    onClick={(e) => e.stopPropagation()}
    className="relative bg-[#FDFAF6] w-full max-w-5xl rounded-[32px] overflow-hidden shadow-[0_35px_80px_rgba(74,63,85,0.24)] flex flex-col max-h-[90vh]"
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="relative h-[280px] md:h-[400px] shrink-0 bg-[linear-gradient(135deg,#c9b8ec_0%,#eac8d7_50%,#f6dedd_100%)]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#735f88]/35 via-[#8f7387]/24 to-[#4a3f55]/42" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h3 className="text-[26px] md:text-[40px] font-serif font-bold text-white leading-tight">WPC Facilitator Program</h3>
        <p className="mt-4 text-sm font-bold tracking-[0.18em] uppercase text-[#B9F0E0]">Leadership · Mentorship · ASU W.P. Carey</p>
        <p className="mt-4 text-base italic text-white/92 max-w-[620px]">
          Mentoring isn't just answering questions. It's building confidence in someone who doesn't know yet what they're capable of.
        </p>
      </div>
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-[#8B8491] hover:text-brand-plum rounded-full transition-all duration-300 cursor-pointer"
      >
        <X size={24} />
      </button>
    </motion.div>

    <div className="overflow-y-auto bg-[#FDFAF6] px-6 py-10 md:px-10 md:py-14">
      <div className="max-w-[720px] mx-auto space-y-14 md:space-y-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <h4 className="text-xs font-bold tracking-[0.24em] text-[#5DCAA5] uppercase mb-5">Project Overview</h4>
          <p className="text-[17px] leading-[1.9] text-brand-charcoal font-serif max-w-[680px]">
            As a WPC Facilitator at Arizona State University's W.P. Carey School of Business, I supported first-year business students through one of the most overwhelming transitions of their academic lives. I led structured workshops, provided one-on-one guidance, and connected students with the resources, strategies, and confidence they needed to find their footing in a competitive business school environment. I remembered what it felt like to start over in a new school, a new city, with no roadmap — and that's exactly why I showed up for these students the way I wished someone had shown up for me.
          </p>
          <WpcMetricStrip />
        </motion.section>

        <section>
          <h4 className="text-xs font-bold tracking-[0.24em] text-[#5DCAA5] uppercase mb-5">My Approach</h4>
          <WpcApproachDiagram />
        </section>

        <section>
          <h4 className="text-xs font-bold tracking-[0.24em] text-[#5DCAA5] uppercase mb-5">Workshop Topics</h4>
          <WpcWorkshopGrid />
        </section>

        <section>
          <h4 className="text-xs font-bold tracking-[0.24em] text-[#5DCAA5] uppercase mb-5">Challenges I Helped Solve</h4>
          <WpcChallengesTable />
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          className="bg-brand-lavender/45 rounded-[18px] border-l-[3px] border-brand-lavender px-6 py-8 md:px-8 md:py-10"
        >
          <h4 className="text-xs font-bold tracking-[0.24em] text-[#5DCAA5] uppercase mb-5">What I Learned</h4>
          <p className="text-[17px] leading-[1.9] text-brand-charcoal font-serif max-w-[600px]">
            Leading these sessions taught me more than I expected. I learned how to read a room, adapt my communication style for completely different personalities, and create a space where students felt safe asking questions they were too embarrassed to ask a professor. I discovered that the most powerful thing a facilitator can do is not have all the answers — it's making someone feel like their question was worth asking in the first place. That lesson shows up in every client interaction, every team meeting, and every piece of work I do today.
          </p>
        </motion.section>

        <section>
          <h4 className="text-xs font-bold tracking-[0.24em] text-[#5DCAA5] uppercase mb-4">Skills Applied</h4>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-wrap gap-3"
          >
            {["Facilitation", "Mentorship", "Program Design", "Public Speaking", "Student Development", "Communication", "Leadership"].map((skill) => (
              <span key={skill} className="px-5 py-2.5 bg-brand-white/70 text-brand-charcoal rounded-full text-sm font-bold border border-brand-charcoal/25">
                {skill}
              </span>
            ))}
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="py-6 md:py-10 text-center"
        >
          <p className="max-w-[560px] mx-auto text-[20px] leading-[1.95] italic font-serif text-brand-plum">
            The best thing I could give these students wasn't advice. It was proof that someone believed they belonged here.
          </p>
          <p className="mt-5 text-[13px] font-bold tracking-[0.22em] uppercase text-[#5DCAA5]">Vinita Shah</p>
        </motion.section>
      </div>
    </div>
  </motion.div>
);

const BrandOperationsCaseStudyModal = ({ study, onClose }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95, y: 20 }}
    onClick={(e) => e.stopPropagation()}
    className="relative bg-[#FDFAF6] w-full max-w-5xl rounded-[32px] overflow-y-auto shadow-[0_35px_80px_rgba(74,63,85,0.24)] max-h-[90vh]"
  >
    <div className="sticky top-5 z-20 flex justify-end px-5 pt-5 -mb-16 pointer-events-none">
      <button
        onClick={onClose}
        className="pointer-events-auto p-2.5 bg-brand-white/92 hover:bg-brand-white text-brand-plum rounded-full backdrop-blur-md border border-brand-line/70 shadow-[0_10px_30px_rgba(74,63,85,0.12)] transition-all duration-300 cursor-pointer"
      >
        <X size={22} />
      </button>
    </div>

    <div className="relative h-[280px] md:h-[380px] overflow-hidden">
      <img src={study.img} alt={study.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#4a3f55]/82 via-[#4a3f55]/26 to-transparent flex items-end p-8 md:p-12">
        <div>
          <p className="text-[13px] md:text-sm font-bold tracking-[0.22em] uppercase text-brand-gold">Brand Operations</p>
          <h3 className="mt-3 text-3xl md:text-5xl font-serif font-bold text-white leading-tight">{study.title}</h3>
          <p className="mt-4 max-w-2xl text-white/90 text-base md:text-lg leading-[1.8]">
            Contributing to the systems, content, and execution that power ASU&apos;s enterprise brand.
          </p>
        </div>
      </div>
    </div>

    <div className="bg-[#FDFAF6] px-6 py-10 md:px-10 md:py-14">
      <div className="max-w-[960px] mx-auto space-y-10 md:space-y-12">
        <section>
          <h4 className="text-sm font-bold tracking-[0.24em] text-brand-gold uppercase mb-5">Project Overview</h4>
          <p className="text-lg leading-[1.9] text-brand-charcoal font-serif max-w-[820px]">
            Working within ASU&apos;s enterprise brand system taught me how large-scale organizations operate behind the scenes. I supported workflow design, website management, competitor research, asset organization, and internal reporting systems that helped keep brand execution consistent across hundreds of initiatives.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-4">
          {brandOperationsAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, ease: "easeInOut", delay: index * 0.05 }}
                className="rounded-[24px] bg-brand-white border border-brand-line/65 p-5 shadow-[0_10px_24px_rgba(110,93,121,0.05)]"
              >
                <div className="flex items-center gap-3 text-brand-plum">
                  <span className="flex h-10 w-10 items-center justify-center rounded-[1rem] bg-brand-cream border border-brand-line/60">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <h5 className="text-lg font-serif font-bold leading-tight">{area.title}</h5>
                </div>
                <p className="mt-4 text-[14px] leading-[1.75] text-brand-charcoal/86">{area.summary}</p>
                <div className="mt-4 h-px w-full bg-brand-line/70" />
                <p className="mt-4 text-[14px] leading-[1.75] text-brand-charcoal">{area.detail}</p>
              </motion.div>
            );
          })}
        </section>

        <section className="rounded-[28px] bg-brand-white border border-brand-line/65 p-7 md:p-8 shadow-[0_10px_24px_rgba(110,93,121,0.05)]">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">How The System Works</p>
          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-6">
            {brandOperationsFlow.map(([label, text], index) => (
              <div key={label} className="relative rounded-[22px] bg-brand-cream border border-brand-line/55 p-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-gold">{label}</p>
                <p className="mt-3 text-[13px] leading-[1.7] text-brand-charcoal">{text}</p>
                {index < brandOperationsFlow.length - 1 ? (
                  <span className="hidden lg:block absolute -right-[10px] top-1/2 -translate-y-1/2 text-brand-gold/55">→</span>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[28px] bg-brand-white border border-brand-line/65 p-7 md:p-8 shadow-[0_10px_24px_rgba(110,93,121,0.05)]">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">Scale & Impact</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {brandOperationsMetrics.map((metric) => (
                <div key={metric} className="rounded-[22px] bg-brand-cream border border-brand-line/55 px-4 py-5">
                  <p className="text-[20px] md:text-[22px] font-serif font-bold leading-tight text-brand-plum">{metric}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] bg-brand-white border border-brand-line/65 p-7 md:p-8 shadow-[0_10px_24px_rgba(110,93,121,0.05)]">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">Skills In Action</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {brandOperationsSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-brand-line/55 bg-brand-cream px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-plum"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="rounded-[28px] bg-brand-lavender/35 border border-brand-line/60 p-7 md:p-8"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">Reflection</p>
          <p className="mt-5 text-[19px] leading-[1.9] text-brand-charcoal font-serif">
            Working within ASU&apos;s enterprise brand system taught me how large-scale organizations operate behind the scenes. I learned how workflows, content, and communication come together to create consistent brand execution across hundreds of initiatives.
          </p>
        </motion.section>
      </div>
    </div>
  </motion.div>
);

const Home = () => {
  const [selectedStudy, setSelectedStudy] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (selectedStudy) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedStudy]);

  useEffect(() => {
    if (!location.hash) return;

    const targetId = location.hash.replace('#', '');
    const scrollToTarget = () => {
      const target = document.getElementById(targetId);
      if (!target) return;

      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const frameId = window.requestAnimationFrame(scrollToTarget);
    const timeoutId = window.setTimeout(scrollToTarget, 180);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
    };
  }, [location.hash]);

  return (
    <div className="pt-24">
      <style>{`
        @keyframes arrow-nudge {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
      `}</style>
      {/* 1. Hero Section */}
      <HeroSection
        className="px-0"
        maxWidth="max-w-7xl"
        contentClassName="md:px-12"
        colors={["#f6dce5", "#f0e7fb", "#fde6d7", "#fff4ea", "#e4efe8", "#f8efe6"]}
        distortion={1}
        swirl={0.58}
        speed={0.34}
        offsetX={0.03}
        veilOpacity="bg-white/34"
      >
        <div className="relative">
          <div className="absolute inset-x-0 top-10 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"></div>
          <div className="grid min-h-[90vh] items-center gap-10 py-16 md:grid-cols-[minmax(0,0.92fr)_minmax(0,0.84fr)] xl:gap-12">
            <div className="relative">
              <DoodleShell
                className="left-0 top-4 hidden md:block md:-translate-x-[34%] lg:-translate-x-[42%] xl:-translate-x-[62%]"
                innerClassName="w-[clamp(144px,17vw,248px)]"
              >
                <div className="relative aspect-square">
                  <FloatingDoodle className="left-1/2 top-2 w-[80%] -translate-x-1/2 lg:w-[84%] xl:w-[86%]" />
                </div>
              </DoodleShell>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="relative z-10 max-w-[50rem] flex flex-col gap-5 rounded-[36px] border border-white/65 bg-white/45 p-7 shadow-[0_24px_60px_rgba(170,119,140,0.08)] backdrop-blur-[3px] md:p-8 lg:p-9"
              >
                <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.6),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(247,217,229,0.28),transparent_38%)]" />
                <div className="relative">
                  <h1 className="relative text-5xl md:text-6xl xl:text-7xl font-serif font-bold text-brand-plum leading-tight">
                    I show up.<br />
                    <span className="text-brand-gold italic">I figure it out.</span><br />
                    I make it better.
                  </h1>
                </div>
                <p className="relative text-lg md:text-xl text-brand-charcoal max-w-lg font-sans leading-relaxed">
                  Business Communication graduate focused on branding, marketing strategy, and client engagement. I bring energy, curiosity, and organization to every project.
                </p>
                <div className="relative mt-4 flex gap-3 md:flex-nowrap">
                    <a href="#portfolio" className="px-6 py-4 bg-brand-gold text-white rounded-full font-medium hover:bg-brand-gold-deep shadow-[0_16px_35px_rgba(212,163,115,0.22)] cursor-pointer whitespace-nowrap">
                      View My Work
                    </a>
                    <Link to="/about" className="px-6 py-4 border border-brand-line bg-brand-white/70 text-brand-plum rounded-full font-medium hover:bg-brand-lavender/45 transition-all flex items-center gap-2 group cursor-pointer whitespace-nowrap">
                      My Story <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/resume" className="px-6 py-4 border border-brand-line bg-brand-white/70 text-brand-plum rounded-full font-medium hover:bg-brand-blush/45 transition-all flex items-center gap-2 group cursor-pointer whitespace-nowrap">
                      Resume <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 mx-auto h-[420px] w-full max-w-[46rem] rounded-[32px] overflow-hidden border border-brand-white/70 shadow-[0_32px_70px_rgba(110,93,121,0.16)] md:h-[450px] lg:h-[470px]"
            >
              <img
                src={asuBrandPortPhoto}
                alt="Vinita Shah Professional Portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4a3f55]/30 via-[#4a3f55]/5 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </HeroSection>

      {/* 2. Stats Bar */}
      <section className="bg-brand-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 rounded-[28px] border border-brand-line/70 bg-brand-peach/45 px-4 py-8 md:px-8 md:py-10 shadow-[0_20px_45px_rgba(110,93,121,0.08)] divide-x divide-brand-gold/15 text-center"
          >
            {[
              { number: 600, suffix: "+", label: "Brand Projects Tracked" },
              { number: 40, suffix: "", label: "Students Mentored" },
              { number: 500, suffix: "+", label: "Client Requests Managed" },
              { number: 4, suffix: "+", label: "Years Experience" }
            ].map((stat, idx) => (
              <motion.div key={idx} variants={fadeIn} className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-serif font-bold text-brand-gold">
                  <AnimatedNumber value={stat.number} />{stat.suffix}
                </span>
                <span className="text-sm md:text-base font-medium text-brand-charcoal uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. About Me */}
      <section className="py-24 px-6 md:px-12 bg-brand-lavender/50">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-3xl flex flex-col gap-6">
            <h2 className="text-xl font-bold tracking-[0.24em] text-brand-gold uppercase">My Story</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-semibold text-brand-plum leading-normal">
              I didn't take a straight path and I think that's exactly what makes me good at what I do.
            </h3>
            <p className="text-lg text-brand-charcoal leading-relaxed text-left">
              I started as a barista, said yes to every opportunity that came after, and worked my way into brand strategy at one of the largest universities in the country. Along the way I supported Fortune 1000 clients, mentored 40 students, and contributed to AI research. Every single role taught me something I use every day.
            </p>
            <p className="text-lg text-brand-charcoal leading-relaxed text-left">
              I'm currently a senior at ASU's W.P. Carey School of Business, working in Enterprise Brand Strategy & Management. I specialize in marketing coordination, brand operations, project management, and client-facing support and I bring the same energy to all of it: curious, organized, and genuinely invested in making things better.
            </p>
            <div className="mt-8">
              <Link to="/about" className="text-brand-plum font-semibold hover:text-brand-gold transition-colors underline decoration-2 underline-offset-4">Read My Full Timeline Path →</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Current Role */}
      <section className="bg-[linear-gradient(180deg,#fbf5ee_0%,#f8f1e9_100%)] px-6 md:px-12">
        <div className="max-w-7xl mx-auto border-y border-brand-line/70 py-16 md:py-20">
          <div className="grid gap-10 md:gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-xl"
            >
              <span className="text-sm font-extrabold tracking-[0.28em] text-brand-plum/70 uppercase">Currently Working At</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-brand-plum leading-tight">Production Assistant</h2>
              <p className="mt-4 text-lg md:text-[19px] font-medium text-brand-plum">
                Enterprise Brand Strategy &amp; Management
              </p>
              <p className="mt-2 text-sm md:text-[15px] font-bold text-brand-plum/70 uppercase tracking-[0.12em]">
                Oct 2025 - Present · Tempe, AZ
              </p>
              <p className="mt-6 text-[16px] md:text-[17px] leading-[1.9] text-brand-charcoal">
                
I work under Arizona State University's Chief Brand Office, supporting the Enterprise Brand Strategy & Management team with brand operations, content systems, and project coordination across large-scale university initiatives.
              </p>
              <a
                href="#portfolio"
                className="mt-8 inline-flex items-center gap-2 text-brand-plum font-semibold hover:text-brand-gold transition-colors underline decoration-2 underline-offset-4"
              >
                See Full Experience <ArrowRight size={18} className="transition-transform" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
              className="grid grid-cols-1 gap-4 md:grid-cols-3"
            >
              {currentRoleHoverCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.id}
                    className={`group min-h-[320px] rounded-[1.5rem] border border-brand-line/60 bg-[#f8f5ef] p-5 shadow-[0_16px_35px_rgba(110,93,121,0.06)] transition-all duration-300 ease-in-out hover:-translate-y-2 ${card.hoverTone}`}
                  >
                    <div className="flex h-full flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <span className="text-[13px] font-bold tracking-[0.22em] text-brand-charcoal/60 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:-translate-y-1">
                          {card.id}
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-[1rem] border border-brand-line/55 bg-brand-white/85 text-brand-plum shadow-sm transition-colors duration-300 ease-in-out">
                          <Icon size={18} strokeWidth={1.8} />
                        </div>
                      </div>

                      <div className="mt-5 flex flex-1 flex-col">
                        <h3 className="text-[22px] font-serif font-bold leading-tight text-brand-plum">
                          {card.title}
                        </h3>

                        <div className="mt-3 flex-1 relative">
                          <div className="absolute left-0 right-0 top-0 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:-translate-y-2">
                            <p className="inline-flex items-center gap-2 text-[15px] font-medium text-brand-charcoal">
                              {card.teaser}
                              <span className="inline-block animate-[arrow-nudge_1.2s_ease-in-out_infinite]">
                                →
                              </span>
                            </p>
                          </div>

                          <div className="mt-0 grid transition-all duration-300 ease-in-out [grid-template-rows:0fr] group-hover:[grid-template-rows:1fr]">
                            <div className="overflow-hidden">
                              <div className="translate-y-1 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                                <div className={`mb-2 mt-0 h-px w-full bg-transparent transition-colors duration-300 ${card.dividerTone}`} />
                                <p className="text-[14px] leading-[1.75] text-brand-charcoal">
                                  {card.description}
                                </p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                  {card.pills.map((pill) => (
                                    <span
                                      key={pill}
                                      className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] ${card.pillTone}`}
                                    >
                                      {pill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. What I Do Best */}
      <section className="py-24 md:py-28 px-6 md:px-12 bg-brand-white border-y border-brand-line/45">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:w-1/3 relative"
          >
            <div className="lg:sticky lg:top-32 flex flex-col gap-6 max-w-xl">
              <span className="text-sm font-bold tracking-[0.28em] text-brand-gold uppercase">What I Do Best</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-plum leading-tight">What I Do Best</h2>
              <p className="text-[17px] md:text-lg leading-[1.85] text-brand-charcoal">
                Combining strategy, operational discipline, and genuine care for people — I bring both the hard skills and the human touch to every team I join.
              </p>
              <a
                href="#portfolio"
                className="inline-flex w-fit items-center justify-center px-8 py-3.5 bg-brand-gold text-white rounded-full font-medium shadow-[0_14px_30px_rgba(212,163,115,0.24)] hover:bg-brand-gold-deep transition-colors cursor-pointer"
              >
                See My Work
              </a>
            </div>
          </motion.div>

          <div className="lg:w-2/3 flex flex-col gap-10 md:gap-14 relative pb-20">
            {whatIDoBestCards.map((card, idx) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`${card.color} sticky w-full rounded-[2.5rem] border border-brand-white/80 p-8 md:p-10 shadow-[0_20px_50px_rgba(110,93,121,0.1)] flex flex-col gap-7`}
                  style={{ top: `calc(15vh + ${idx * 34}px)` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-14 h-14 rounded-[1.25rem] bg-brand-white/60 border border-brand-white/80 flex items-center justify-center text-brand-plum shadow-sm shrink-0">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>
                    <span className="text-[13px] font-semibold tracking-[0.18em] text-brand-charcoal/75">
                      ({card.id})
                    </span>
                  </div>

                  <div>
                    <h3 className="text-[24px] md:text-[26px] font-serif font-bold text-brand-plum mb-4 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-[15px] md:text-base text-brand-charcoal leading-[1.8] max-w-[36rem]">
                      {card.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full bg-brand-white/62 text-brand-plum text-[11px] font-bold tracking-[0.12em] uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Case Studies */}
      <section id="portfolio" className="scroll-mt-32 py-24 px-6 md:px-12 bg-[linear-gradient(180deg,#f9f4fb_0%,#fcf8f2_100%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-brand-plum mb-4">My Work in Action</h2>
            <p className="text-brand-charcoal max-w-2xl mx-auto text-lg">Welcome to my portfolio. Here you’ll find a selection of my work. Explore my projects to learn more about what I do.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {[
              {
                img: asu_brand,
                title: "Inside the Brand System",
                customType: "brandops",
                overviewBadge: "Chief Brand Office · Enterprise Brand",
                problem: "ASU's brand team needed stronger systems to manage hundreds of projects and departments consistently.",
                solution: "Supported Wrike tracking for 600+ projects, helped maintain the brand website on Drupal CMS, and assisted with internal documentation audits.",
                result: "Contributed to more consistent brand operations across 100+ university departments.",
                details: "A closer look at the systems behind ASU&apos;s enterprise brand work. Inside the Chief Brand Office, I contributed across workflow design, website management, research, asset coordination, and reporting to help teams stay aligned and keep brand execution moving.",
                skills: ["Wrike", "Drupal CMS", "Webspark", "Pantheon", "Brand Operations"],
                tagSkills: ["Wrike", "Drupal CMS", "Webspark", "Pantheon", "Brand Operations"],
                delay: 0
              },
              {
                img: nomadtemp ,
                title: "Nomad Temporary Housing",
                overviewBadge: "Client Experience Internship · Fortune 1000",
                problem: "Fortune 1000 relocation clients needed faster, more organized support across high-volume communication channels.",
                solution: "Assisted with 25-30 daily client interactions, supported 200+ weekly communications, and helped maintain CRM records and resolve escalations.",
                result: "Contributed to consistent, professional client support throughout a fast-paced internship environment.",
                details: "My internship at Nomad Temporary Housing gave me real experience in fast-paced client operations. I supported temporary housing requests for employees at major companies, learned how to communicate with urgency and professionalism, and built systems that improved response time, visibility, and follow-through across 500+ interactions.",
                skills: ["Salesforce CRM", "Ticketing Systems", "Client Communications", "Escalation Management"],
                tagSkills: ["Salesforce CRM", "Ticketing Systems", "Client Communications", "Escalation Management"],
                delay: 0.15
              },
              {
                img: icustomer ,
                title: "iCustomer",
                hasBlog: true,
                overviewBadge: "Content Strategy · B2C Marketing",
                problem: "The brand needed SEO-driven content to grow visibility and reach B2C audiences more effectively.",
                solution: "Assisted with keyword research using Google Trends and Ahrefs and helped publish SEO-optimized blog content on Wix.",
                result: "Contributed to improved content visibility and stronger SEO structure across multiple channels.",
                details: "The iCustomer initiative was a comprehensive attempt to unify messaging sent out to the student body. I created a consistent editorial calendar, established strict narrative guidelines, and coordinated with the creative team to build supporting visuals. By speaking with 'one voice', we saw a dramatic 45% lift in student engagement.",
                skills: ["SEO", "Ahrefs", "Google Trends", "Wix", "Content Marketing"],
                tagSkills: ["SEO", "Ahrefs", "Google Trends", "Wix", "Content Marketing"],
                delay: 0.3,
                blogs: [
                  {
                    title: "Full Funnel Analytics in Music Streaming Platforms 🎵📊",
                    tag: "Marketing Analytics",
                    preview: "Ever wondered how Spotify knows exactly what you want to hear? Every listening habit tells a story — here's how full funnel analytics breaks it all down.",
                    link: "/blog/full-funnel-analytics"
                  },
                  {
                    title: "Marketing Attribution in B2C: Playing the Right Game to Win Big, Topgolf Style",
                    tag: "Marketing Strategy",
                    preview: "Instagram seems to know exactly what you're thinking — here's how B2C marketing attribution actually works, explained through Topgolf.",
                    link: "/blog/marketing-attribution"
                  },
                  {
                    title: "What the Minecraft Movie Can Teach Us About Building a Strong Data Foundation",
                    tag: "Data & Brand",
                    preview: "From pixels to promotions — what a blockbuster video game movie teaches us about building a brand on solid data.",
                    link: "/blog/minecraft-data-foundation"
                  }
                ]
              }
            ].map((study, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: study.delay, ease: "easeOut" }}
                onClick={() => setSelectedStudy(study)}
                className="group bg-brand-white rounded-[28px] overflow-hidden border border-brand-line/70 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(110,93,121,0.13)] transition-all duration-300 flex flex-col cursor-pointer"
              >
                <div className="h-64 overflow-hidden shrink-0 relative">
                  {study.customType === "wpc" ? (
                    <div className="h-full w-full bg-[linear-gradient(135deg,#c9b8ec_0%,#eac8d7_52%,#f6dedd_100%)] relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-[#4a3f55]/18" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-white/90">Leadership · Mentorship</span>
                        <h4 className="mt-4 text-3xl font-serif font-bold text-white leading-tight">WPC Facilitator Program</h4>
                      </div>
                    </div>
                  ) : (
                    <img src={study.img} alt={study.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-in-out" />
                  )}
                </div>
                
                <div className="p-8 flex-grow flex flex-col pt-8">
                  <h3 className="text-[26px] font-bold text-brand-plum mb-3 leading-tight">{study.title}</h3>

                  {study.overviewBadge && (
                    <div className="mb-5">
                      <span className="inline-block px-3 py-1.5 bg-brand-sage/70 text-brand-plum text-[11px] font-bold rounded-full tracking-[0.14em] uppercase">
                        {study.overviewBadge}
                      </span>
                    </div>
                  )}

                  {!study.overviewBadge && study.hasBlog && (
                    <div className="mb-5">
                      <span className="inline-block px-3 py-1.5 bg-brand-lavender text-brand-plum text-[11px] font-bold rounded-full">
                        Includes Blog Posts
                      </span>
                    </div>
                  )}
                  
                  <div className="space-y-5 flex-grow mb-8">
                    <div>
                      <span className="text-brand-gold font-bold text-[13px] uppercase tracking-wider block mb-1.5">Opportunity:</span>
                      <p className="text-brand-charcoal text-[15px] leading-relaxed">
                        {study.problem}
                      </p>
                    </div>
                    <div>
                      <span className="text-brand-gold font-bold text-[13px] uppercase tracking-wider block mb-1.5">Implementation:</span>
                      <p className="text-brand-charcoal text-[15px] leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                    <div>
                      <span className="text-brand-gold font-bold text-[13px] uppercase tracking-wider block mb-1.5">Result:</span>
                      <p className="text-brand-plum font-medium text-[15px] leading-relaxed">
                        {study.result}
                      </p>
                    </div>

                    {study.tagSkills && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {study.tagSkills.map((skill, i) => (
                          <span key={i} className="px-3 py-1 bg-brand-blush text-brand-plum text-[11px] font-bold rounded-full tracking-wide">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-auto pt-5 border-t border-brand-line/70 flex items-center text-brand-plum text-[13px] font-bold tracking-[0.1em] uppercase group-hover:text-brand-gold transition-colors">
                    {study.ctaLabel ? (
                      <span className="normal-case tracking-normal text-[15px] font-semibold flex items-center">
                        {study.ctaLabel}
                      </span>
                    ) : (
                      <>
                        READ MORE 
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <a href="/portfolio" className="px-10 py-4 border-2 border-brand-line text-brand-plum rounded-full font-bold hover:bg-brand-lavender hover:text-brand-plum transition-colors duration-300 cursor-pointer">
              View More of My Portfolio →
            </a>
          </div>
        </div>

        {/* Modal popup */}
        <AnimatePresence>
          {selectedStudy && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedStudy(null)}
                className="absolute inset-0 bg-[#4a3f55]/45 backdrop-blur-sm cursor-pointer"
              />
              {selectedStudy.title === "Nomad Temporary Housing" ? (
                <NomadCaseStudyModal study={selectedStudy} onClose={() => setSelectedStudy(null)} />
              ) : selectedStudy.customType === "brandops" ? (
                <BrandOperationsCaseStudyModal study={selectedStudy} onClose={() => setSelectedStudy(null)} />
              ) : selectedStudy.customType === "wpc" ? (
                <WpcCaseStudyModal onClose={() => setSelectedStudy(null)} />
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative bg-brand-white w-full max-w-4xl rounded-[30px] overflow-y-auto shadow-[0_35px_80px_rgba(74,63,85,0.24)] max-h-[90vh]"
                >
                  <div className="sticky top-5 z-20 flex justify-end px-5 pt-5 -mb-16 pointer-events-none">
                    <button
                      onClick={() => setSelectedStudy(null)}
                      className="pointer-events-auto p-2.5 bg-brand-white/92 hover:bg-brand-white text-brand-plum rounded-full backdrop-blur-md border border-brand-line/70 shadow-[0_10px_30px_rgba(74,63,85,0.12)] transition-all duration-300 cursor-pointer"
                    >
                      <X size={22} />
                    </button>
                  </div>

                  <div className="relative h-64 md:h-80">
                    <img src={selectedStudy.img} alt={selectedStudy.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4a3f55]/80 via-[#4a3f55]/30 to-transparent flex items-end p-8 md:p-12">
                      <h3 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">{selectedStudy.title}</h3>
                    </div>
                  </div>

                  <div className="p-8 md:p-12">
                    <div className="mb-10">
                      <h4 className="text-sm font-bold tracking-[0.24em] text-brand-gold uppercase mb-4">Project Overview</h4>
                      <p className="text-brand-charcoal text-lg leading-relaxed">{selectedStudy.details}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-10 bg-brand-cream border border-brand-line/70 p-8 rounded-[24px]">
                      <div>
                        <span className="font-bold text-brand-gold block mb-2 text-sm uppercase tracking-wider">Opportunity</span>
                        <p className="text-brand-charcoal">{selectedStudy.problem}</p>
                      </div>
                      <div>
                        <span className="font-bold text-brand-plum block mb-2 text-sm uppercase tracking-wider">Implementation</span>
                        <p className="text-brand-charcoal">{selectedStudy.solution}</p>
                      </div>
                      <div>
                        <span className="font-bold text-brand-gold block mb-2 text-sm uppercase tracking-wider">Result</span>
                        <p className="text-brand-plum font-bold text-xl leading-tight">{selectedStudy.result}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold tracking-[0.24em] text-brand-gold uppercase mb-4">Skills Applied</h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedStudy.skills.map((skill, i) => (
                          <span key={i} className="px-5 py-2.5 bg-brand-lavender/55 text-brand-plum rounded-full text-sm font-bold border border-brand-line/70 hover:bg-brand-blush/60 hover:border-brand-gold/25 transition-colors">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {selectedStudy.gallery && (
                      <div className="mt-12 pt-12 border-t border-slate-100">
                        <PhotoStrip images={selectedStudy.gallery} />
                      </div>
                    )}

                    {selectedStudy.hasBlog && selectedStudy.blogs && (
                      <div className="mt-12 pt-12 border-t border-brand-line/70">
                        <h4 className="text-sm font-bold tracking-[0.24em] text-brand-plum uppercase mb-2">Thoughts from this experience</h4>
                        <p className="text-brand-charcoal mb-8 text-lg">Marketing ideas I explored at {selectedStudy.title}</p>
                        <div className="grid md:grid-cols-3 gap-6">
                          {selectedStudy.blogs.map((blog, idx) => {
                            const CardWrapper = blog.link ? Link : 'div';
                            const gradientClass = [
                              'bg-[linear-gradient(135deg,#e7eff4_0%,#edf3f7_100%)]',
                              'bg-[linear-gradient(135deg,#f3e8ef_0%,#f9eef4_100%)]',
                              'bg-[linear-gradient(135deg,#e8f2ea_0%,#eff7f1_100%)]',
                            ][idx % 3];
                            return (
                            <CardWrapper to={blog.link || '#'} key={idx} className="bg-brand-white border border-brand-line/70 rounded-[22px] overflow-hidden shadow-sm hover:shadow-[0_16px_35px_rgba(110,93,121,0.12)] transition-all group flex flex-col cursor-pointer">
                              <div className={`${gradientClass} p-6 border-b border-brand-line/60 pb-4`}>
                                <span className="text-xs font-bold uppercase tracking-wider text-brand-plum mb-2 block">{blog.tag}</span>
                                <h5 className="font-bold text-brand-plum text-lg leading-tight line-clamp-2">{blog.title}</h5>
                              </div>
                              <div className="p-6 flex flex-col flex-grow">
                                <p className="text-brand-charcoal text-sm mb-6 flex-grow">{blog.preview}</p>
                                <div className="text-brand-gold font-bold uppercase text-xs tracking-wider group-hover:translate-x-1 transition-transform flex items-center gap-1 mt-auto">
                                  Read More <ArrowRight size={14} />
                                </div>
                              </div>
                            </CardWrapper>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* Education - Floating Pill Layout */}
      <section className="py-10 md:py-12 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(180deg,#fffaf4_0%,#f7efe6_100%)] border-t border-brand-line/45">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-10 relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-plum mb-3">
              Education
            </h2>
            <svg className="w-24 h-2 mx-auto text-brand-gold opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </div>

          <div className="flex flex-col md:flex-row gap-5 md:gap-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full md:w-1/2 flex justify-center md:justify-end"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-gradient-to-br from-brand-lavender to-brand-blush p-6 md:p-7 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_18px_40px_rgba(110,93,121,0.09)] border border-brand-white/60 flex flex-col items-center text-center max-w-[22rem] w-full"
              >
                <div className="w-12 h-12 rounded-full bg-brand-white/70 flex items-center justify-center mb-4 shadow-sm">
                  <GraduationCap className="text-brand-plum" size={24} />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-brand-plum leading-tight mb-1.5 font-serif">
                  B.A. in Business Communication
                </h3>
                <p className="text-sm md:text-[15px] text-brand-plum/80 font-medium mb-4">
                  ASU W.P. Carey School of Business
                </p>

                <div className="flex items-center gap-2.5 mb-4">
                  <div className="px-2.5 py-1 bg-brand-white rounded-full text-brand-plum text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    In Progress
                  </div>
                  <span className="text-brand-plum/60 font-bold text-sm">2026</span>
                </div>

                <div className="flex items-center gap-1.5 text-brand-plum/60 text-sm mb-4">
                  <MapPin size={14} /> Tempe, AZ
                </div>

                <div className="flex flex-wrap justify-center gap-1.5 mt-auto">
                  {["Brand Operations", "Marketing Coordination", "Consumer Behavior", "Strategic Management"].map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-brand-white/60 backdrop-blur-sm rounded-full text-brand-plum text-[10px] font-bold tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="w-full md:w-1/2 flex justify-center md:justify-start md:pt-10 md:pl-2"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="relative bg-gradient-to-br from-brand-sage to-brand-peach p-6 md:p-7 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_18px_40px_rgba(110,93,121,0.09)] border border-brand-white/60 flex flex-col items-center text-center max-w-[22rem] w-full"
              >
                <div className="w-12 h-12 rounded-full bg-brand-white/70 flex items-center justify-center mb-4 shadow-sm">
                  <GraduationCap className="text-brand-plum" size={24} />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-brand-plum leading-tight mb-1.5 font-serif">
                  A.S. in Business Administration
                </h3>
                <p className="text-sm md:text-[15px] text-brand-plum/80 font-medium mb-4">
                  Orange Coast College
                </p>

                <div className="flex items-center gap-2.5 mb-4">
                  <div className="px-2.5 py-1 bg-brand-white rounded-full text-brand-plum text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    Completed
                  </div>
                  <span className="text-brand-plum/60 font-bold text-sm">2024</span>
                </div>

                <div className="flex items-center gap-1.5 text-brand-plum/60 text-sm mb-4">
                  <MapPin size={14} /> Costa Mesa, CA
                </div>

                <div className="flex flex-wrap justify-center gap-1.5 mt-auto">
                  {["Marketing Principles", "Business Writing", "Organizational Communication", "Customer Relations"].map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-brand-white/60 backdrop-blur-sm rounded-full text-brand-plum text-[10px] font-bold tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <HomeTestimonials />

      {/* 8. Doodle Break */}
      <section className="bg-brand-cream px-6 py-10 md:px-12">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-10">
          <div className="relative h-[256px] w-[270px] shrink-0">
            <DoodleShell className="left-1/2 top-0 -translate-x-1/2" innerClassName="w-[270px]">
              <div className="relative h-[228px]">
                <FloatingDoodle className="left-1/2 top-2 -translate-x-1/2" />
              </div>
            </DoodleShell>
          </div>
          <p className="max-w-[260px] text-center text-2xl font-serif italic leading-snug text-brand-plum md:text-left">
            Thanks for stopping by my portfolio 🌸
          </p>
        </div>
      </section>

      {/* 9. Contact Section */}
      <section id="contact" className="scroll-mt-32 py-24 px-6 md:px-12 bg-brand-cream">
        <div className="max-w-6xl mx-auto bg-brand-white rounded-[32px] overflow-hidden shadow-[0_24px_60px_rgba(110,93,121,0.1)] border border-brand-line/70">
          <div className="grid md:grid-cols-5 h-full">
            <div className="bg-brand-peach p-12 text-brand-plum md:col-span-2 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Let's Connect</h2>
                <p className="text-brand-charcoal mb-12 opacity-90">Open to full-time roles in marketing, brand coordination, or client success. Let's make something great together.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className="text-brand-gold" />
                    <span>shahvinita1176@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="text-brand-gold" />
                    <span>Tempe, AZ</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 md:col-span-3 bg-brand-white">
              <form
                action="https://formsubmit.co/shahvinita1176@gmail.com"
                method="POST"
                className="space-y-6 flex flex-col"
              >
                <input type="hidden" name="_subject" value="New portfolio inquiry" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-brand-plum" htmlFor="contact-name">Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      className="bg-brand-cream border border-brand-line p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-gold/35"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-brand-plum" htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      className="bg-brand-cream border border-brand-line p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-gold/35"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-brand-plum" htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    required
                    className="bg-brand-cream border border-brand-line p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-gold/35 resize-none"
                    placeholder="Hello Vinita..."
                  ></textarea>
                </div>
                <button type="submit" className="self-start mt-4 px-8 py-3 bg-brand-gold text-white rounded-full font-bold hover:bg-brand-gold-deep transition-colors shadow-[0_14px_30px_rgba(212,163,115,0.24)] cursor-pointer">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
