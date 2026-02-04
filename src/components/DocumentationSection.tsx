import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Award, FileCheck, BadgeCheck } from 'lucide-react';

const certifications = [
  {
    icon: Shield,
    title: 'ISO 9001:2015',
    subtitle: 'Quality Management',
    description: 'Certified by BQC Assessment Private Limited',
    date: 'Since January 2020',
  },
  {
    icon: Award,
    title: 'ZED Silver',
    subtitle: 'MSME Certification',
    description: 'Zero Effect Zero Defect scheme by MSME Ministry',
    date: 'Certified 2025',
  },
  {
    icon: FileCheck,
    title: 'UDYAM Registration',
    subtitle: 'MSME Enterprise',
    description: 'Registered under Udyam for manufacturing sector',
    date: 'UDYAM-MH-15-0012824',
  },
  {
    icon: BadgeCheck,
    title: 'Quality Standards',
    subtitle: 'IAS Accredited',
    description: 'International Accreditation Service compliant',
    date: 'Global Recognition',
  },
];

const qualityProcesses = [
  'Incoming Material Inspection',
  'Online Stage Inspection',
  'Final Dimensional Inspection',
  'Surface Finish Testing',
  'Hardness Testing',
  'Visual Inspection',
];

export const DocumentationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="documentation" className="section-padding bg-secondary/30">
      <div className="container-premium" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label"
          >
            Certifications
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Quality
            <span className="gradient-text"> Assured</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-description mx-auto"
          >
            Our commitment to quality is backed by international certifications 
            and rigorous quality control processes at every stage.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="card-premium p-6 text-center group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors duration-300">
                <cert.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-1">
                {cert.title}
              </h3>
              <p className="text-accent text-sm font-medium mb-2">
                {cert.subtitle}
              </p>
              <p className="text-muted-foreground text-sm mb-3">
                {cert.description}
              </p>
              <span className="text-xs text-muted-foreground/70">
                {cert.date}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Quality Process */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-card rounded-lg p-8 md:p-12"
          style={{ boxShadow: 'var(--shadow-medium)' }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                Quality Control Process
              </h3>
              <p className="text-muted-foreground mb-6">
                Every component undergoes strict quality checks at multiple stages 
                to ensure dimensional accuracy and surface finish meets 
                specifications.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {qualityProcesses.map((process) => (
                  <div key={process} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm text-foreground">{process}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary rounded-lg p-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-serif text-accent mb-2">
                  0%
                </div>
                <p className="text-primary-foreground/80 text-lg mb-4">
                  Customer Rejection Rate
                </p>
                <p className="text-primary-foreground/60 text-sm">
                  Across all major customers including Dana Fairfield, 
                  Veltech Forge, Surendra Forge, and more.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
