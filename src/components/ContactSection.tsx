import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: 'SY. NO. 123/2/3, Shinoli (BK), Tal-Chandgad, Dist.-Kolhapur, Maharashtra, India - 416507',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: 'Contact for business inquiries',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@bhushanindustries.com',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Monday - Saturday: 9:00 AM - 6:00 PM',
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container-premium" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block"
            >
              Get In Touch
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-foreground mb-6"
            >
              Ready to Partner
              <br />
              With Excellence?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary-foreground/70 text-lg mb-10 max-w-lg"
            >
              Whether you need precision gears, custom machined components, 
              or want to discuss a new project, our team is ready to assist you.
            </motion.p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-sm flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-primary-foreground font-medium mb-1">
                      {item.title}
                    </h4>
                    <p className="text-primary-foreground/60 text-sm">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-primary-foreground/5 backdrop-blur-sm rounded-lg p-8 lg:p-10"
          >
            <h3 className="font-serif text-2xl text-primary-foreground mb-6">
              Send us a message
            </h3>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-primary-foreground/70 text-sm mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-primary-foreground/70 text-sm mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-primary-foreground/70 text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-primary-foreground/70 text-sm mb-2">
                  Product Inquiry
                </label>
                <select className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm text-primary-foreground focus:outline-none focus:border-accent transition-colors">
                  <option value="" className="text-foreground">Select product type</option>
                  <option value="gears" className="text-foreground">Gears</option>
                  <option value="shafts" className="text-foreground">Shafts</option>
                  <option value="castings" className="text-foreground">Castings</option>
                  <option value="custom" className="text-foreground">Custom Components</option>
                </select>
              </div>

              <div>
                <label className="block text-primary-foreground/70 text-sm mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-premium btn-accent"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
