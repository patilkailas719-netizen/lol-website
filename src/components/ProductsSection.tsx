import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import helicalGear from '@/assets/product-helical-gear.jpg';
import planetGear from '@/assets/product-planet-gear.jpg';
import shaft from '@/assets/product-shaft.jpg';
import ringGear from '@/assets/product-ring-gear.jpg';

const products = [
  {
    name: 'Helical Gears',
    description: 'Precision-cut helical gears for smooth power transmission',
    image: helicalGear,
    specs: ['High torque capacity', 'Low noise operation', 'Custom specifications'],
  },
  {
    name: 'Planet Gears',
    description: 'Compact planetary gear systems for automotive applications',
    image: planetGear,
    specs: ['High reduction ratios', 'Compact design', 'Durable construction'],
  },
  {
    name: 'Precision Shafts',
    description: 'CNC machined drive shafts with tight tolerances',
    image: shaft,
    specs: ['Input & output shafts', 'Custom lengths', 'Surface hardened'],
  },
  {
    name: 'Ring Gears',
    description: 'Internal ring gears for differential and gearbox assemblies',
    image: ringGear,
    specs: ['Precision machined', 'Heat treated', 'Multiple grades'],
  },
];

export const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="products" className="section-padding bg-secondary/50">
      <div className="container-premium" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label"
          >
            Our Products
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Engineered for
            <span className="gradient-text"> Performance</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-description mx-auto"
          >
            From forging to final inspection, every component is crafted with 
            precision and tested to meet the highest industry standards.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group card-premium overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="font-serif text-2xl text-foreground mb-3">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>

                {/* Specs */}
                <div className="flex flex-wrap gap-2">
                  {product.specs.map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-sm"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Products Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Also manufacturing: Clutch Sleeves, PTO Driven Gears, Pinion Planetary, 
            Driving Gears, and custom casting components.
          </p>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-premium btn-outline"
          >
            Request Specifications
          </button>
        </motion.div>
      </div>
    </section>
  );
};
