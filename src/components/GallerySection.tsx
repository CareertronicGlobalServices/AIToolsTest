import { motion } from 'framer-motion';

const images = [
  { src: '/images/wedding.png', alt: 'Luxury Wedding Decoration', span: 'col-span-1 md:col-span-2 row-span-2' },
  { src: '/images/birthday.png', alt: 'Premium Birthday Stage', span: 'col-span-1' },
  { src: '/images/corporate.png', alt: 'Corporate Event Setup', span: 'col-span-1' },
  { src: '/images/babyshower.png', alt: 'Elegant Baby Shower', span: 'col-span-1 md:col-span-2' },
  { src: '/images/test.png', alt: 'test', span: 'col-span-1 md:col-span-2' },
];

export const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 text-glow"
          >
            Captivating Moments
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"
          />
          <p className="text-accent/70 max-w-2xl mx-auto text-lg">
            A glimpse into the magical experiences we've crafted for our esteemed clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group ${img.span} shadow-[0_4px_20px_rgba(0,0,0,0.5)]`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 " />
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end p-6">
                <h3 className="text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
