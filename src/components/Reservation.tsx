"use client";

import { motion } from "framer-motion";

export default function Reservation() {
  return (
    <section id="reserve" className="py-32 bg-mayg-charcoal relative">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-30"
        >
          <source src="/media/vid8.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-mayg-charcoal/80 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="block text-mayg-gold text-sm tracking-[0.3em] uppercase mb-8">
            Reservations
          </span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-mayg-sand mb-12">
            Join Us at MAYG
          </h2>
          <p className="text-mayg-sand/60 font-light max-w-xl mx-auto mb-16 leading-relaxed">
            Experience the harmonious blend of French craftsmanship and Japanese artistry. Due to the intimate nature of our dining room, advance reservations are highly recommended.
          </p>
          
          <a 
            href="https://www.sevenrooms.com/reservations/maygrestaurantvenue?fbclid=PAQ0xDSwL19oNleHRuA2FlbQIxMQABpxazqpszPnJpXe0br45thxTHtw8_6M9xYMxC2cZ7R5mloGcCH7ay6Cgsw9Kn_aem_DEVkR9qSzOYK0tpzNr3-hQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-mayg-gold text-mayg-charcoal text-sm uppercase tracking-[0.2em] font-medium hover:bg-mayg-sand transition-colors duration-500"
          >
            Reserve Your Table
          </a>
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mayg-maroon rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
    </section>
  );
}
