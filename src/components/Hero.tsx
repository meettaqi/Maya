"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="object-cover w-full h-full opacity-60"
        >
          <source src="/media/vid1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-mayg-charcoal/40 via-mayg-charcoal/20 to-mayg-charcoal/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-mayg-sand tracking-wider mb-6">
            MAYG
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
        >
          <p className="text-sm md:text-base tracking-[0.3em] uppercase text-mayg-gold mb-12">
            French Craftsmanship <span className="mx-2">×</span> Japanese Artistry
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a
            href="#experience"
            className="px-8 py-3 border border-mayg-sand text-mayg-sand text-xs uppercase tracking-[0.2em] hover:bg-mayg-sand hover:text-mayg-charcoal transition-all duration-500"
          >
            Discover MAYG
          </a>
          <a
            href="https://www.sevenrooms.com/reservations/maygrestaurantvenue?fbclid=PAQ0xDSwL19oNleHRuA2FlbQIxMQABpxazqpszPnJpXe0br45thxTHtw8_6M9xYMxC2cZ7R5mloGcCH7ay6Cgsw9Kn_aem_DEVkR9qSzOYK0tpzNr3-hQ"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-mayg-gold text-mayg-charcoal border border-mayg-gold text-xs uppercase tracking-[0.2em] hover:bg-transparent hover:text-mayg-gold transition-all duration-500"
          >
            Reserve a Table
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-mayg-sand/50 mb-4 rotate-90 translate-y-[-10px]">Scroll</span>
        <div className="w-[1px] h-12 bg-mayg-sand/20 overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }} 
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-mayg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
