import { MapPin, Phone, Mail } from 'lucide-react';

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-serif font-bold text-primary text-glow mb-6">
              Balloons Unlimited
            </h3>
            <p className="text-accent/60 leading-relaxed mb-6">
              Crafting unforgettable cinematic experiences with luxury event management and premium decorations.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/kdkanchan1993/" className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all duration-300">
                <InstagramIcon size={20} />
              </a>
              <a href="https://www.facebook.com/kdulhani" className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all duration-300">
                <FacebookIcon size={20} />
              </a>
              <a href="" className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all duration-300">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Gallery', 'Testimonials'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-accent/60 hover:text-primary transition-colors flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary/50 mr-3" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4">
              {['Balloon Decoration', 'Wedding Management', 'Corporate Events', 'Stage Setup', 'Photography'].map((service) => (
                <li key={service} className="text-accent/60 hover:text-primary transition-colors cursor-pointer flex items-center">
                  <span className="w-2 h-2 rounded-full bg-secondary/50 mr-3" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="text-primary w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span className="text-accent/60">Param CG Road, Raipur, C.G</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-accent/60">+91- 8461835410</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-accent/60">sonam.panjwani29@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-accent/40 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Balloons Unlimited. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-accent/40 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-accent/40 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
