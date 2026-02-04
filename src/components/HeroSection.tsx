import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-gears.jpg';

export const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Precision engineered gears"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-premium">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-sm text-accent text-sm font-medium tracking-wider uppercase">
              ISO 9001:2015 Certified
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-primary-foreground leading-[1.1] mb-6"
          >
            Precision
            <br />
            <span className="text-accent">Engineering</span>
            <br />
            Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-10 leading-relaxed"
          >
            Manufacturing precision gears, shafts, and machined components 
            since 2007. From raw material to finished products with uncompromising quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <button 
              onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-premium btn-accent"
            >
              View Products
            </button>
            <button 
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-premium border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-accent transition-colors"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="absolute bottom-0 left-0 right-0 bg-primary/95 backdrop-blur-sm"
      >
        <div className="container-premium py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: '17+', label: 'Years Experience' },
              { value: '50+', label: 'Skilled Employees' },
              { value: '6', label: 'CNC Machines' },
              { value: '0%', label: 'Rejection Rate' },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-serif text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-primary-foreground/70 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
