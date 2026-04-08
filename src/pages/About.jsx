import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import cocoonPhoto from '../assets/Photo/04-22port.jpg';
import steppingOut from  '../assets/Photo/22port.jpg';

import transition from  '../assets/Photo/24port.JPG';

import rebuilding from  '../assets/Photo/24-25port.jpg';
import realWorld from  '../assets/Photo/snowport.png';
import becoming from  '../assets/Photo/26port.jpeg';
import whatsNext from  '../assets/Photo/wnport.png';

const JourneyBloomDoodle = ({ className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, scale: [0.94, 1.05, 1], y: [10, -8, 0], x: [0, 5, 0], rotate: [-3, 3, -1] }}
    transition={{
      opacity: { duration: 0.6 },
      scale: { duration: 1.1, ease: 'easeOut' },
      y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
      x: { duration: 7.8, repeat: Infinity, ease: 'easeInOut' },
      rotate: { duration: 6.6, repeat: Infinity, ease: 'easeInOut' },
    }}
    viewport={{ once: false, margin: '-15% 0px' }}
    className={`pointer-events-none absolute ${className}`}
    aria-hidden="true"
  >
    <svg viewBox="0 0 220 190" className="h-auto w-[165px] md:w-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 148C40 130 54 120 64 102C76 81 93 66 113 62C130 58 145 64 153 76C161 88 161 103 150 114C140 124 123 129 112 139C97 152 86 167 80 181"
        stroke="#d5a86b"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 10"
        opacity="0.72"
      />
      <path
        d="M42 164C56 156 68 145 75 132"
        stroke="#d5a86b"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.6"
      />
      <g transform="translate(116 78)">
        <motion.g
          animate={{ rotate: [0, 6, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ originX: '50%', originY: '50%' }}
        >
          <path
            d="M0 0C-14 -19 -32 -30 -48 -24C-62 -18 -63 2 -48 12C-34 22 -16 18 0 0Z"
            fill="#f0d7e6"
            stroke="#5f5669"
            strokeWidth="2.1"
            strokeLinejoin="round"
          />
          <path
            d="M0 0C-6 -18 -1 -33 11 -38C23 -42 31 -29 26 -16C21 -4 10 2 0 0Z"
            fill="#f8e7c1"
            stroke="#5f5669"
            strokeWidth="2.1"
            strokeLinejoin="round"
          />
          <path d="M-4 -2C-16 -10 -28 -12 -38 -8" stroke="#fffaf6" strokeWidth="1.25" strokeLinecap="round" opacity="0.75" />
          <path d="M3 -4C7 -15 12 -22 18 -26" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        </motion.g>

        <motion.g
          animate={{ rotate: [0, -6, 4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.18 }}
          style={{ originX: '50%', originY: '50%' }}
        >
          <path
            d="M0 0C14 -19 32 -30 48 -24C62 -18 63 2 48 12C34 22 16 18 0 0Z"
            fill="#dce8f3"
            stroke="#5f5669"
            strokeWidth="2.1"
            strokeLinejoin="round"
          />
          <path
            d="M0 0C6 -18 1 -33 -11 -38C-23 -42 -31 -29 -26 -16C-21 -4 -10 2 0 0Z"
            fill="#f5ddd1"
            stroke="#5f5669"
            strokeWidth="2.1"
            strokeLinejoin="round"
          />
          <path d="M4 -2C16 -10 28 -12 38 -8" stroke="#fffaf6" strokeWidth="1.25" strokeLinecap="round" opacity="0.75" />
          <path d="M-3 -4C-7 -15 -12 -22 -18 -26" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        </motion.g>
        <path d="M0 -6V42" stroke="#5f5669" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M0 8C-8 18 -16 28 -18 40" stroke="#7da089" strokeWidth="2.1" strokeLinecap="round" />
        <path d="M0 14C8 23 15 32 16 44" stroke="#8cb09a" strokeWidth="2.1" strokeLinecap="round" />
        <path d="M-6 24C-15 20 -21 15 -24 8" stroke="#9bbca7" strokeWidth="1.9" strokeLinecap="round" />
        <path d="M7 29C16 28 25 31 31 38" stroke="#cfa4b5" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="0" cy="-8" r="4.2" fill="#5f5669" />
        <path d="M-1 -10C-5 -18 -9 -22 -14 -22" stroke="#5f5669" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M1 -10C5 -18 9 -22 14 -22" stroke="#5f5669" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="-14.5" cy="-22.5" r="1.5" fill="#5f5669" />
        <circle cx="14.5" cy="-22.5" r="1.5" fill="#5f5669" />
      </g>
    </svg>
  </motion.div>
);

const timelineData = [
  {
    year: '2004 – 2022',
    title: 'the cocoon',
    emoji: '🌱',
    desc: 'as a kid, i was the first in my family to come to the united states. everything felt unfamiliar, but it shaped me early. being an only child made me independent. i learned to figure things out on my own. i didn’t know exactly what i wanted yet. but i knew i wanted more.',
    img: cocoonPhoto
  },
  {
    year: '2022 – 2024',
    title: 'stepping out',
    emoji: '🌊',
    desc: 'moving to California changed everything. new environment, new people, new experiences. at Orange Coast College, i started finding my place. i built friendships, explored different cultures, and stepped outside my comfort zone. my first job working at Starbucks taught me responsibility, communication, and consistency. i graduated with an Associate degree in Business Administration.',
    img: steppingOut
  },
  {
    year: '2024',
    title: 'transition',
    emoji: '☀️',
    desc: 'moving to Arizona in the middle of summer felt like stepping into the unknown. everything changed again — new city, new environment, and one big question: where is my life going next?',
    img: transition
  },
  {
    year: '2024 – 2025',
    title: 'rebuilding',
    emoji: '🎓',
    desc: 'i began my journey at Arizona State University as a rising junior at the W. P. Carey School of business. starting over wasn’t easy but this is where things started to click. I built connections, explored opportunities, and pushed myself through new challenges.',
    img: rebuilding
  },
  {
    year: '2025',
    title: 'real-world experience',
    emoji: '🚀',
    desc: 'in summer 2025, i stepped into my first major professional experience at Nomad Temporary Housing. i learned how to communicate effectively, manage high-volume interactions, and solve problems under pressure. alongside this, i became a WPC facilitator, mentoring first-year students and strengthening my leadership skills.',
    img: realWorld
  },
  {
    year: '2026',
    title: 'becoming',
    emoji: '✨',
    desc: 'i stepped into a role as a production assistant for Enterprise Brand Strategy & Management at ASU. working alongside directors and contributing to real brand initiatives deepened my understanding of strategy, execution, and collaboration.',
    img: becoming
  },
  {
    year: 'what\'s next',
    title: 'taking flight',
    emoji: '🌟',
    desc: 'as i approach graduation, i’m stepping into the next chapter — ready to grow and fully immerse myself in the professional world. i’m excited to build a career in sales, client experience, marketing, and business.',
    img: whatsNext
  }
];

const About = () => {
  return (
    <div className="bg-brand-cream min-h-screen pt-28 pb-12 overflow-x-hidden font-serif">
      {/* 1. Hero */}
      <section className="relative text-center px-6 py-16 md:py-24 max-w-4xl mx-auto flex flex-col items-center">
        <JourneyBloomDoodle className="-right-2 top-8 hidden md:block" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-sm font-sans font-bold uppercase tracking-[0.28em] text-brand-gold mb-6 block">My Journey</span>
          <h1 className="text-4xl md:text-6xl font-serif text-brand-plum tracking-tight lowercase mb-6">
            from a cocoon<br />to a butterfly🦋
          </h1>
          <p className="text-lg md:text-xl text-brand-charcoal font-serif italic lowercase tracking-wide">
            this is my journey — growth, change, and becoming.
          </p>
        </motion.div>
      </section>

      {/* 2. Timeline */}
      <section className="max-w-5xl mx-auto px-6 relative py-8 md:py-10">
        {/* Center line (Desktop only) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-brand-gold/30 -translate-x-1/2"></div>

        <div className="flex flex-col gap-14 md:gap-18">
          {timelineData.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2 flex justify-center relative">
                  <div className={`absolute top-1/2 -translate-y-1/2 w-8 h-px bg-brand-gold/40 hidden md:block ${isEven ? '-right-4' : '-left-4'}`}></div>
                  <div className="w-full max-w-[16rem] md:max-w-[18rem] aspect-[4/5] overflow-hidden rounded-t-[3.5rem] rounded-b-[1.5rem] shadow-[0_18px_40px_rgba(110,93,121,0.1)] opacity-95 hover:opacity-100 transition-opacity border border-brand-white/70">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Text Side */}
                <div className={`w-full md:w-1/2 flex flex-col justify-center text-center md:text-left ${!isEven && 'md:text-right'}`}>
                  <div className="text-[1.15rem] md:text-[1.25rem] font-bold tracking-[0.22em] text-brand-gold uppercase mb-1.5">
                    {item.year}
                  </div>
                  <h3 className="text-[1.7rem] md:text-[1.9rem] font-serif text-brand-plum mb-3 lowercase">
                    {item.title}
                  </h3>
                  <p className="text-brand-charcoal font-serif text-[1.06rem] md:text-[1.12rem] leading-[1.8] max-w-md mx-auto md:mx-0">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          <Link
            to="/"
            className="px-8 py-4 bg-brand-gold text-white rounded-full font-serif font-bold text-lg hover:bg-brand-gold-deep transition-all hover:-translate-y-1 shadow-[0_16px_35px_rgba(212,163,115,0.24)]"
          >
            See My Work
          </Link>
          <div className="flex gap-6 mt-4">
            <a href="https://www.linkedin.com/in/vinitashah07/" target="_blank" rel="noreferrer" className="text-brand-plum hover:text-brand-gold transition-colors font-sans text-sm font-medium uppercase tracking-widest">
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
