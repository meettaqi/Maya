export default function Footer() {
  return (
    <footer className="relative bg-mayg-maroonDark text-mayg-sand overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-mayg-gold/30 to-transparent"></div>
      
      {/* Subtle texture/gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-mayg-charcoal/20 to-transparent mix-blend-overlay pointer-events-none"></div>

      <div className="relative container mx-auto px-6 md:px-12 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start mb-20">
          
          <div className="md:col-span-5">
            <h3 className="font-serif text-5xl md:text-6xl text-mayg-sand mb-6 tracking-widest uppercase">MAYG</h3>
            <p className="text-mayg-gold text-xs uppercase tracking-[0.3em] mb-8">
              French Craftsmanship <span className="mx-2">×</span> Japanese Artistry
            </p>
            <div className="text-mayg-sand/70 font-light text-sm space-y-2 leading-relaxed max-w-xs">
              <p>Dubai Design District (d3)</p>
              <p>Building 11 — Ground Floor</p>
              <p>Dubai, United Arab Emirates</p>
            </div>
            <div className="mt-8">
              <a 
                href="https://maps.google.com/?q=MAYG+Dubai+Design+District" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block border-b border-mayg-gold/30 pb-1 text-mayg-gold text-xs uppercase tracking-[0.2em] hover:text-mayg-sand hover:border-mayg-sand transition-all duration-500"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7 flex flex-col space-y-4 text-sm font-light">
            <span className="text-mayg-gold/50 text-xs uppercase tracking-[0.2em] mb-2 block">Connect</span>
            <a href="https://www.instagram.com/maygdubai/" target="_blank" rel="noopener noreferrer" className="hover:text-mayg-gold transition-colors duration-300 w-fit">Instagram</a>
            <a href="#" className="hover:text-mayg-gold transition-colors duration-300 w-fit">Contact Us</a>
            <a href="#" className="hover:text-mayg-gold transition-colors duration-300 w-fit">Careers</a>
            <a href="#" className="hover:text-mayg-gold transition-colors duration-300 w-fit">Private Dining</a>
          </div>

          <div className="md:col-span-3 flex flex-col space-y-4 text-sm font-light">
            <span className="text-mayg-gold/50 text-xs uppercase tracking-[0.2em] mb-2 block">Opening Hours</span>
            <p className="text-mayg-sand/80">Monday — Sunday</p>
            <p className="text-mayg-sand/80">12:00 PM — 1:00 AM</p>
            
            <a 
              href="https://www.sevenrooms.com/reservations/maygrestaurantvenue?fbclid=PAQ0xDSwL19oNleHRuA2FlbQIxMQABpxazqpszPnJpXe0br45thxTHtw8_6M9xYMxC2cZ7R5mloGcCH7ay6Cgsw9Kn_aem_DEVkR9qSzOYK0tpzNr3-hQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 px-6 py-3 border border-mayg-gold text-mayg-gold text-xs uppercase tracking-widest hover:bg-mayg-gold hover:text-mayg-maroonDark transition-all duration-300 w-fit text-center"
            >
              Reserve Table
            </a>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-mayg-sand/10 text-xs text-mayg-sand/40 font-light uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} MAYG Restaurant. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-mayg-sand transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-mayg-sand transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
