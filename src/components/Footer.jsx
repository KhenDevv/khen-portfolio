import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-10 text-center md:text-left">
          <div className="max-w-md">
            <h2 className="text-2xl font-display font-bold mb-4">Let's build something <span className="text-blue-500">extraordinary</span>.</h2>
            <p className="text-slate-400">
              Open for collaborations and new opportunities. Reach out if you have a vision you want to bring to life.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="mailto:contact@example.com" className="btn-primary">
              Send an Email
            </a>
            <button 
              onClick={scrollToTop}
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-slate-400 hover:text-white transition-all"
              aria-label="Scroll to top"
            >
              <ChevronUp size={20} />
            </button>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
