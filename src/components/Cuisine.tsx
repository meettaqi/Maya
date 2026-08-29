"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const dishes = [
  {
    name: "Exquisite Starters",
    description: "Delicate beginnings, crafted with precision.",
    image: "/media/img17.jpg",
    style: "col-span-12 md:col-span-6 h-[400px] md:h-[600px]",
  },
  {
    name: "Signature Mains",
    description: "The meeting of French technique and Japanese ingredients.",
    image: "/media/img18.jpg",
    style: "col-span-12 md:col-span-6 h-[400px] md:h-[600px] md:mt-24",
  },
  {
    name: "Desserts & Pastry",
    description: "A final act of artistry.",
    image: "/media/img19.jpg",
    style: "col-span-12 md:col-span-8 h-[400px] md:h-[500px]",
  },
  {
    name: "Mixology",
    description: "Refined creations.",
    image: "/media/img20.jpg",
    style: "col-span-12 md:col-span-4 h-[400px] md:h-[500px] md:-mt-24",
  }
];

export default function Cuisine() {
  return (
    <section id="cuisine" className="py-24 bg-mayg-offwhite text-mayg-charcoal relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm tracking-[0.3em] uppercase text-mayg-gold mb-6">Culinary Artistry</h2>
          <h3 className="font-serif text-4xl md:text-5xl">Signature Creations</h3>
        </motion.div>

        <div className="grid grid-cols-12 gap-6 md:gap-12">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className={`${dish.style} group flex flex-col`}
            >
              <div className="relative w-full h-full overflow-hidden mb-6 flex-grow">
                <Image 
                  src={dish.image} 
                  alt={dish.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
              <div>
                <h4 className="font-serif text-2xl mb-2">{dish.name}</h4>
                <p className="text-mayg-charcoal/60 font-light uppercase tracking-widest text-xs">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
