import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-background to-background z-0" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-primary text-glow mb-6 tracking-tight">
            Balloons Unlimited
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-2xl text-accent/80 font-light max-w-3xl mx-auto mb-12 tracking-wide"
        >
          Luxury Event Management & Premium Balloon Decorations
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-yellow-600 text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 hover:scale-105 text-lg"
          >
            Book Your Event
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 glass text-primary font-bold rounded-full hover:bg-white/5 transition-all duration-300 border border-primary/30 hover:border-primary hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] text-lg"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-accent/50 text-sm mb-2 font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-1 h-12 bg-gradient-to-b from-primary/50 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
};
