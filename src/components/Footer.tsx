export default function Footer() {
  return (
    <footer className="bg-mayg-charcoal border-t border-mayg-sand/10 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0">
        
        <div>
          <h3 className="font-serif text-3xl text-mayg-sand mb-8 tracking-widest">MAYG</h3>
          <div className="text-mayg-sand/60 font-light text-sm space-y-2 leading-relaxed">
            <p>Dubai Design District (d3)</p>
            <p>Building 11 — Ground Floor</p>
            <p>Dubai, UAE</p>
          </div>
          <div className="mt-8">
            <a 
              href="https://maps.google.com/?q=MAYG+Dubai+Design+District" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-mayg-gold text-xs uppercase tracking-[0.2em] hover:text-mayg-sand transition-colors duration-300"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="flex flex-col md:items-end text-sm text-mayg-sand/60 font-light space-y-4">
          <a href="https://www.instagram.com/maygdubai/" target="_blank" rel="noopener noreferrer" className="hover:text-mayg-gold transition-colors duration-300">Instagram</a>
          <a href="#" className="hover:text-mayg-gold transition-colors duration-300">Contact Us</a>
          <a href="#" className="hover:text-mayg-gold transition-colors duration-300">Careers</a>
          <p className="pt-4 text-xs text-mayg-sand/30 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} MAYG Restaurant
          </p>
        </div>

      </div>
    </footer>
  );
}
