"use client";

import { motion } from "framer-motion";

const dishes = [
  {
    name: "Bluefin Tuna Tartare",
    description: "Oscietra caviar, ponzu emulsion, gold leaf.",
    image: "/media/img2.jpg",
    style: "col-span-12 md:col-span-7 h-[500px]",
  },
  {
    name: "A4 Wagyu Striploin",
    description: "Truffle pomme purée, soy-bordelaise, maitake.",
    image: "/media/img3.jpg",
    style: "col-span-12 md:col-span-5 h-[400px] md:mt-24",
  },
  {
    name: "Matcha Mille-Feuille",
    description: "Yuzu cream, delicate puff pastry, roasted sesame.",
    image: "/media/img4.jpg",
    style: "col-span-12 md:col-span-6 md:col-start-4 h-[600px] mt-12",
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
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000 ease-out"
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
