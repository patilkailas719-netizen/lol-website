import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container-premium">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
              <span className="text-accent-foreground font-serif font-bold text-lg">B</span>
            </div>
            <div>
              <span className="font-serif text-lg text-background">
                Bhushan Industries
              </span>
              <p className="text-background/50 text-xs">
                ISO 9001:2015 Certified
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {['About', 'Products', 'Machines', 'Documentation'].map((item) => (
              <button
                key={item}
                onClick={() =>
                  document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })
                }
                className="text-background/60 hover:text-accent text-sm transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-background/50 text-sm text-center md:text-right">
            © {currentYear} Bhushan Industries.
            <br className="md:hidden" />
            <span className="md:ml-1">All rights reserved.</span>
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 mt-8 pt-8">
          <p className="text-background/40 text-xs text-center">
            Manufacturer & Supplier of Graded Cast Iron Casting and Precision Machined Components
          </p>
        </div>
      </div>
    </footer>
  );
};
