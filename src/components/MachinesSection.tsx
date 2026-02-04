import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import cncMachine from '@/assets/cnc-machine.jpg';
import vmcMachine from '@/assets/vmc-machine.jpg';
import latheMachine from '@/assets/lathe-machine.jpg';

const machines = [
  {
    name: 'CNC Turning Centers',
    count: '6 Units',
    image: cncMachine,
    specs: [
      'Max Turning Dia: 350-550mm',
      'Max Turning Length: 550mm',
      'Distance Between Center: 600mm',
    ],
  },
  {
    name: 'VMC Machining Centers',
    count: '3 Units',
    image: vmcMachine,
    specs: [
      'Max Turning Dia: 550mm',
      'Max Turning Length: 550mm',
      'High precision milling',
    ],
  },
  {
    name: 'Conventional Lathe',
    count: '4 Units',
    image: latheMachine,
    specs: [
      'Pre-turning operations',
      'Facing & centering',
      'Drilling & milling',
    ],
  },
];

const supportEquipment = [
  'Surface Tester',
  'Air Gauge Units',
  'Roundness Tester',
  'Profile Projector',
  'Hardness Tester',
  'Marking Facility',
];

export const MachinesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="machines" className="section-padding bg-background">
      <div className="container-premium" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label"
          >
            Our Machinery
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            State-of-the-Art
            <span className="gradient-text"> Equipment</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-description mx-auto"
          >
            Our facility is equipped with modern CNC and VMC machines, 
            enabling us to deliver precision components with exceptional accuracy.
          </motion.p>
        </div>

        {/* Machines Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {machines.map((machine, index) => (
            <motion.div
              key={machine.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              {/* Image */}
              <div className="aspect-[4/3] rounded-lg overflow-hidden mb-6">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-serif text-xl text-foreground">
                  {machine.name}
                </h3>
                <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-sm">
                  {machine.count}
                </span>
              </div>

              {/* Specs */}
              <ul className="space-y-2">
                {machine.specs.map((spec) => (
                  <li
                    key={spec}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {spec}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Support Equipment */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-primary rounded-lg p-8 md:p-12"
        >
          <h3 className="font-serif text-2xl text-primary-foreground mb-6 text-center">
            Quality Control Equipment
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {supportEquipment.map((equipment) => (
              <div
                key={equipment}
                className="bg-primary-foreground/10 rounded-sm p-4 text-center"
              >
                <span className="text-primary-foreground/90 text-sm">
                  {equipment}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
