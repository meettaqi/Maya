"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Experience", href: "#experience" },
    { name: "Cuisine", href: "#cuisine" },
    { name: "The Space", href: "#space" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out border-b ${
          isScrolled ? "bg-mayg-maroonDark/95 backdrop-blur-md py-4 border-mayg-gold/20" : "bg-transparent py-6 border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="text-2xl font-serif tracking-widest text-mayg-sand hover:text-mayg-gold transition-colors duration-300">
            MAYG
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-mayg-sand/70 hover:text-mayg-gold transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://www.sevenrooms.com/reservations/maygrestaurantvenue?fbclid=PAQ0xDSwL19oNleHRuA2FlbQIxMQABpxazqpszPnJpXe0br45thxTHtw8_6M9xYMxC2cZ7R5mloGcCH7ay6Cgsw9Kn_aem_DEVkR9qSzOYK0tpzNr3-hQ"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2 border border-mayg-gold text-mayg-gold text-xs uppercase tracking-widest hover:bg-mayg-gold hover:text-mayg-charcoal transition-all duration-300"
            >
              Reserve
            </a>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden text-mayg-sand"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-mayg-maroonDark flex flex-col justify-center items-center"
          >
            <button
              className="absolute top-6 right-6 text-mayg-sand"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col items-center space-y-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif text-mayg-sand hover:text-mayg-gold transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://www.sevenrooms.com/reservations/maygrestaurantvenue?fbclid=PAQ0xDSwL19oNleHRuA2FlbQIxMQABpxazqpszPnJpXe0br45thxTHtw8_6M9xYMxC2cZ7R5mloGcCH7ay6Cgsw9Kn_aem_DEVkR9qSzOYK0tpzNr3-hQ"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 px-8 py-3 border border-mayg-gold text-mayg-gold text-sm uppercase tracking-widest hover:bg-mayg-gold hover:text-mayg-charcoal transition-all duration-300"
              >
                Reserve a Table
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
