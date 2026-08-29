"use client";

import { motion } from "framer-motion";

import Image from "next/image";

export default function Philosophy() {
  return (
    <section id="experience" className="py-32 md:py-48 bg-mayg-charcoal relative">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="text-sm md:text-xs tracking-[0.3em] uppercase text-mayg-gold mb-8">
            The Philosophy
          </h2>
          <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-mayg-sand leading-[1.3] md:leading-[1.2] text-balance">
            Where the rigorous technique of French gastronomy meets the profound respect and minimalism of Japanese culinary artistry.
          </p>
        </motion.div>
        
        <div className="mt-24 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-2 md:order-1 relative pl-8 border-l border-mayg-gold/30"
          >
            <div className="absolute left-[-1px] top-0 w-[1px] h-1/3 bg-mayg-gold"></div>
            <p className="text-mayg-sand/70 text-lg leading-relaxed mb-6 font-light">
              At MAYG, we believe that true luxury lies in restraint. Our dual heritage informs every decision, from the sourcing of our ingredients to the cloud-like ambiance of our dining room.
            </p>
            <p className="text-mayg-sand/70 text-lg leading-relaxed font-light">
              Executive Chef Aadel Ouaoua curates an evolving narrative on the plate. It is a dialogue between two of the world's most revered culinary traditions, elevated by the contemporary spirit of Dubai Design District.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="order-1 md:order-2 grid grid-cols-2 gap-4 h-[400px] md:h-[600px] w-full"
          >
            <div className="relative w-full h-full overflow-hidden mt-8">
              <Image 
                src="/media/img16.jpg" 
                alt="MAYG Philosophy"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="relative w-full h-full overflow-hidden mb-8">
              <Image 
                src="/media/img21.jpg" 
                alt="MAYG Culinary Details"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
