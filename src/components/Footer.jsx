import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-cream-soft py-12 px-6 md:px-12 border-t border-brand-line/80">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 rounded-[28px] bg-brand-white px-8 py-8 shadow-[0_20px_45px_rgba(110,93,121,0.08)] border border-brand-line/70">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-serif font-bold text-brand-plum mb-2">VINITA SHAH</h2>
          <p className="text-sm text-brand-charcoal font-sans max-w-sm">
            Business Communication graduate focused on branding, marketing strategy, and client engagement.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/vinitashah07/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-brand-lavender text-brand-plum hover:bg-brand-gold hover:text-white transition-all duration-300 cursor-pointer"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <p className="text-sm text-brand-charcoal/80">
            &copy; {new Date().getFullYear()} Vinita Shah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
