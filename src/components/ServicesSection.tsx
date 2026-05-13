import { motion } from 'framer-motion';
import { Palette, CalendarCheck, UtensilsCrossed, Tent, Camera, Music } from 'lucide-react';

const services = [
  { icon: Palette, title: 'Balloon Decoration', desc: 'Premium balloon arches, garlands, and custom installations tailored to your theme.' },
  { icon: CalendarCheck, title: 'Complete Event Management', desc: 'End-to-end planning, execution, and coordination for a flawless event.' },
  { icon: Tent, title: 'Stage Decoration', desc: 'Luxurious stage setups with floral arrangements, lighting, and premium props.' },
  { icon: Camera, title: 'Photography', desc: 'Professional photography and videography to capture your precious moments.' },
  { icon: Music, title: 'Entertainment & DJ', desc: 'Live music, DJs, and entertainment acts to keep your party alive.' },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-black/50">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 text-glow"
          >
            Our Premium Services
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl glass-hover group relative overflow-hidden"
            >
              {/* Decorative gradient blob */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/40 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary to-yellow-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <service.icon className="text-black w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-accent/70 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
