"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const images = [
  "/media/img21.jpg",
  "/media/img22.jpg",
  "/media/img23.jpg",
  "/media/img24.jpg",
  "/media/img25.jpg",
  "/media/img26.jpg",
  "/media/img27.jpg",
  "/media/img28.jpg",
  "/media/img29.jpg",
  "/media/img30.jpg",
  "/media/img31.jpg",
  "/media/img32.jpg",
  "/media/img33.jpg",
  "/media/img34.jpg",
  "/media/img35.jpg",
  "/media/img6.jpg",
  "/media/img7.jpg",
  "/media/img8.jpg",
  "/media/img9.jpg",
  "/media/img10.jpg",
  "/media/img11.jpg",
  "/media/img12.jpg",
  "/media/img13.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-mayg-offwhite">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 flex justify-between items-end"
        >
          <div>
            <h2 className="text-sm tracking-[0.3em] uppercase text-mayg-gold mb-4">Gallery</h2>
            <h3 className="font-serif text-3xl md:text-4xl text-mayg-charcoal">Visual Journey</h3>
          </div>
          <a href="https://www.instagram.com/maygdubai/" target="_blank" rel="noopener noreferrer" className="hidden md:block text-xs uppercase tracking-widest text-mayg-charcoal border-b border-mayg-charcoal pb-1 hover:text-mayg-gold hover:border-mayg-gold transition-all duration-300">
            Follow @maygdubai
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (index % 4) * 0.1 }}
              className={`relative overflow-hidden group ${
                index % 4 === 0 || index % 4 === 3 ? "col-span-2 row-span-2 h-[400px] md:h-[600px]" : "col-span-2 md:col-span-2 h-[200px] md:h-[300px]"
              }`}
            >
              <Image
                src={img}
                alt={`Gallery image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-mayg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="https://www.instagram.com/maygdubai/" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-mayg-charcoal border-b border-mayg-charcoal pb-1">
            Follow @maygdubai
          </a>
        </div>
      </div>
    </section>
  );
}
