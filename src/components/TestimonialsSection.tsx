import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah & James',
    event: 'Wedding Reception',
    text: 'Balloons Unlimited completely transformed our wedding venue! The gold and white balloon arches were absolutely stunning and added that perfect touch of luxury we were looking for. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Kanchan Dulhani',
    event: 'Birthday',
    text: 'Balloons Unlimited completely transformed our wedding venue! The gold and white balloon arches were absolutely stunning and added that perfect touch of luxury we were looking for. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Anshul Wadhwani',
    event: 'Birthday',
    text: 'Balloons Unlimited completely transformed our wedding venue! The gold and white balloon arches were absolutely stunning and added that perfect touch of luxury we were looking for. Highly recommended!',
    rating: 2,
  },
  {
    name: 'Michael Chen',
    event: 'Corporate Gala',
    text: 'Professional, punctual, and incredibly creative. The team handled our corporate event flawlessly. The black and gold theme they executed was sophisticated and exactly what our brand needed.',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    event: 'Baby Shower',
    text: 'I was blown away by the beautiful pastel balloon setup for my baby shower. It felt like walking into a dream! Every detail was perfect. Thank you for making my day so special.',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-black/30">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 text-glow"
          >
            Client Stories
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
          />
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-20">
            <button onClick={prev} className="p-3 rounded-full glass text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-300">
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-20">
            <button onClick={next} className="p-3 rounded-full glass text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-300">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="relative h-[400px] md:h-[300px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="glass p-8 md:p-12 rounded-3xl text-center w-full max-w-3xl relative border border-primary/20 shadow-[0_10px_40px_rgba(212,175,55,0.1)]">
                  <Quote className="absolute top-6 left-6 text-primary/10 w-20 h-20 rotate-180" />
                  
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="text-primary fill-primary w-5 h-5 mx-1 drop-shadow-[0_0_5px_rgba(212,175,55,0.8)]" />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl text-accent/90 italic mb-8 font-light relative z-10 leading-relaxed">
                    "{testimonials[current].text}"
                  </p>
                  
                  <div className="relative z-10">
                    <h4 className="text-lg font-bold text-white tracking-wide">{testimonials[current].name}</h4>
                    <p className="text-primary/80 uppercase tracking-widest text-sm mt-1">{testimonials[current].event}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === idx ? 'bg-primary w-8 shadow-[0_0_10px_rgba(212,175,55,0.8)]' : 'bg-primary/30 w-2 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
