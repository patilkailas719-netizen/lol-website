import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Target, Users, Cog } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'ISO 9001:2015 Certified',
    description: 'Internationally recognized quality management standards',
  },
  {
    icon: Target,
    title: 'Zero Defect Policy',
    description: 'Lowest PPM at all customer ends with rigorous QC',
  },
  {
    icon: Users,
    title: 'Skilled Team',
    description: '50+ trained professionals including CNC programmers',
  },
  {
    icon: Cog,
    title: 'End-to-End Process',
    description: 'Raw material to finished components under one roof',
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-background pattern-grid">
      <div className="container-premium">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-label"
            >
              About Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-title"
            >
              Crafting Precision
              <br />
              <span className="gradient-text">Since 2007</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-description mb-8"
            >
              Bhushan Industries is a leading manufacturer and supplier of graded 
              cast iron castings and precision machined components. Located in 
              Kolhapur, Maharashtra, we specialize in producing high-quality 
              shafts, planet gears, helical gears, and ring gears for the 
              automotive and industrial sectors.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-accent rounded-full" />
                <div>
                  <p className="font-medium text-foreground">Vision</p>
                  <p className="text-muted-foreground text-sm">
                    Be a global leader in engineering & technology
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-accent rounded-full" />
                <div>
                  <p className="font-medium text-foreground">Mission</p>
                  <p className="text-muted-foreground text-sm">
                    Develop long-term relationships with satisfied clients
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="card-premium p-6 group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Major Customers */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {['Dana Fairfield Ltd.', 'Veltech Forge', 'Surendra Forge', 'Trinity Auto', 'Mahesh Forge'].map(
              (customer) => (
                <span
                  key={customer}
                  className="text-foreground/60 font-medium text-sm md:text-base hover:text-accent transition-colors"
                >
                  {customer}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
