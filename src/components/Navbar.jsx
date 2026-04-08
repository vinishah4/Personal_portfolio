import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const contactHref = location.pathname === '/' ? '#contact' : '/#contact';
  const projectHref = location.pathname === '/' ? '#portfolio' : '/#portfolio';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', type: 'route' },
    { name: 'About', path: '/about', type: 'route' },
    { name: 'Project', path: projectHref, type: 'anchor' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 px-6 py-4 md:px-8 flex justify-between items-center rounded-[24px] border border-brand-line/70
        ${isScrolled ? 'bg-brand-white/90 backdrop-blur-xl shadow-[0_16px_40px_rgba(110,93,121,0.12)] py-3' : 'bg-brand-white/70 backdrop-blur-md shadow-[0_10px_30px_rgba(110,93,121,0.08)] py-4'}
      `}
    >
      <Link to="/" className="text-xl md:text-2xl font-serif font-bold text-brand-plum tracking-tight">
        VINITA SHAH
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          link.type === 'route' ? (
            <Link
              key={link.name}
              to={link.path}
              className={`text-base font-medium transition-colors hover:text-brand-plum
                ${location.pathname === link.path ? 'text-brand-plum border-b-2 border-brand-gold' : 'text-brand-charcoal'}
              `}
            >
              {link.name}
            </Link>
          ) : (
            <a
              key={link.name}
              href={link.path}
              className={`text-base font-medium transition-colors hover:text-brand-plum
                ${location.pathname === '/' && location.hash === '#portfolio' ? 'text-brand-plum border-b-2 border-brand-gold' : 'text-brand-charcoal'}
              `}
            >
              {link.name}
            </a>
          )
        ))}
        <a href={contactHref} className="px-5 py-2.5 bg-brand-gold text-white rounded-full text-base font-semibold shadow-[0_10px_25px_rgba(212,163,115,0.25)] hover:bg-brand-gold-deep cursor-pointer">
          Let's Talk
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-brand-plum cursor-pointer"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-[calc(100%+0.75rem)] left-0 right-0 bg-brand-white shadow-[0_18px_40px_rgba(110,93,121,0.12)] md:hidden overflow-hidden flex flex-col rounded-[22px] border border-brand-line"
          >
            {navLinks.map((link) => (
              link.type === 'route' ? (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-4 px-6 text-base font-medium border-b border-brand-line/70 transition-colors
                    ${location.pathname === link.path ? 'text-brand-plum bg-brand-lavender/45' : 'text-brand-charcoal'}
                  `}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-4 px-6 text-base font-medium border-b border-brand-line/70 transition-colors
                    ${location.pathname === '/' && location.hash === '#portfolio' ? 'text-brand-plum bg-brand-lavender/45' : 'text-brand-charcoal'}
                  `}
                >
                  {link.name}
                </a>
              )
            ))}
            <a 
              href={contactHref} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-4 px-6 text-base font-semibold text-brand-plum bg-brand-peach/60 hover:bg-brand-peach cursor-pointer"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
