import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import cocoonPhoto from '../assets/Photo/04-22port.jpg';
import steppingOut from  '../assets/Photo/22port.jpg';

import transition from  '../assets/Photo/24port.JPG';

import rebuilding from  '../assets/Photo/24-25port.jpg';
import realWorld from  '../assets/Photo/snowport.png';
import becoming from  '../assets/Photo/26port.jpeg';
import whatsNext from  '../assets/Photo/wnport.png';


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
      <section className="text-center px-6 py-16 md:py-24 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-sm font-sans font-bold uppercase tracking-[0.28em] text-brand-gold mb-6 block">My Journey</span>
          <h1 className="text-4xl md:text-6xl font-serif text-brand-plum tracking-tight lowercase mb-6">
            from a cocoon<br />to a butterfly
          </h1>
          <p className="text-lg md:text-xl text-brand-charcoal font-serif italic lowercase tracking-wide">
            this is my journey — growth, change, and becoming.
          </p>
        </motion.div>
      </section>

      {/* 2. Timeline */}
      <section className="max-w-5xl mx-auto px-6 relative py-12">
        {/* Center line (Desktop only) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-brand-gold/30 -translate-x-1/2"></div>

        <div className="flex flex-col gap-24 md:gap-32">
          {timelineData.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2 flex justify-center relative">
                  <div className={`absolute top-1/2 -translate-y-1/2 w-12 h-px bg-brand-gold/40 hidden md:block ${isEven ? '-right-6' : '-left-6'}`}></div>
                  <div className="w-full max-w-sm aspect-[4/5] overflow-hidden rounded-t-[5rem] rounded-b-3xl shadow-[0_24px_60px_rgba(110,93,121,0.12)] opacity-95 hover:opacity-100 transition-opacity border border-brand-white/70">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Text Side */}
                <div className={`w-full md:w-1/2 flex flex-col justify-center text-center md:text-left ${!isEven && 'md:text-right'}`}>
                  <div className="text-xl font-bold tracking-[0.24em] text-brand-gold uppercase mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-3xl font-serif text-brand-plum mb-4 lowercase">
                    {item.title}
                  </h3>
                  <p className="text-brand-charcoal font-serif text-lg leading-relaxed max-w-md mx-auto md:mx-0">
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
            <a href="#" target="_blank" rel="noreferrer" className="text-brand-plum hover:text-brand-gold transition-colors font-sans text-sm font-medium uppercase tracking-widest">
              Instagram
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
