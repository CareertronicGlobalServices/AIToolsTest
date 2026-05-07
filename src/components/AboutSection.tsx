import { motion } from 'framer-motion';
import { Award, Heart, Sparkles, Clock } from 'lucide-react';

const stats = [
  { icon: Award, label: '500+ Events', value: 'Successfully Managed' },
  { icon: Heart, label: '100% Happy Clients', value: 'Satisfaction Guaranteed' },
  { icon: Sparkles, label: '50+ Themes', value: 'Unique Designs' },
  { icon: Clock, label: '24/7 Support', value: 'Always Here For You' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 text-glow">
              Crafting Unforgettable Experiences
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mb-8" />
            <p className="text-accent/80 text-lg leading-relaxed mb-6">
              At Balloons Unlimited, we believe every celebration deserves to be extraordinary. 
              As a premier luxury event management brand, we specialize in transforming ordinary spaces 
              into breathtaking cinematic experiences.
            </p>
            <p className="text-accent/80 text-lg leading-relaxed mb-8">
              From intimate baby showers and elegant weddings to grand corporate galas, our team of 
              expert designers and planners work meticulously to bring your vision to life with 
              premium balloon installations, bespoke themes, and flawless execution.
            </p>
            <ul className="grid grid-cols-2 gap-4 mb-8">
              {['Wedding Decorations', 'Birthday Parties', 'Baby Showers', 'Corporate Events', 'Anniversaries', 'Theme Decorations'].map((service, idx) => (
                <li key={idx} className="flex items-center text-accent/90">
                  <div className="w-2 h-2 rounded-full bg-secondary mr-3 shadow-[0_0_8px_rgba(250,218,221,0.8)]" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass p-8 rounded-2xl glass-hover group"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-primary w-8 h-8 drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{stat.label}</h3>
                <p className="text-accent/60">{stat.value}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
