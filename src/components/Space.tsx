"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Space() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="space" ref={containerRef} className="py-32 bg-mayg-charcoal relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        <div className="md:w-1/2 z-10 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-sm tracking-[0.3em] uppercase text-mayg-gold mb-6">The Space</h2>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-mayg-sand mb-8 leading-tight">
              An Ethereal <br/> Atmosphere
            </h3>
            <p className="text-mayg-sand/70 font-light leading-relaxed mb-8 max-w-md">
              Located in the heart of Dubai Design District, MAYG offers a sanctuary of refined elegance. Floating cloud-inspired chandeliers hang above plush white seating, anchored by deep maroon and brushed copper accents—a subtle homage to both the French copper pan and the Japanese flag.
            </p>
            <p className="text-mayg-sand/70 font-light leading-relaxed max-w-md">
              The private dining room reveals intimate details, intertwining bonsai motifs with an exclusive view of our culinary theater.
            </p>
          </motion.div>
        </div>

        <div className="md:w-1/2 w-full h-[600px] md:h-[800px] relative overflow-hidden">
          <motion.div 
            style={{ y }} 
            className="absolute inset-[-10%] w-[120%] h-[120%]"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full opacity-80"
            >
              <source src="/media/vid7.mp4" type="video/mp4" />
            </video>
          </motion.div>
          {/* Maroon/Gold Overlay to fit the description */}
          <div className="absolute inset-0 bg-mayg-maroon mix-blend-overlay opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-mayg-charcoal via-transparent to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
