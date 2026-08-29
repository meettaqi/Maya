import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair-display" });

export const metadata: Metadata = {
  title: "MAYG | French Craftsmanship. Japanese Artistry.",
  description: "Experience culinary excellence at MAYG Restaurant in Dubai Design District (d3). A harmonious blend of French tradition and Japanese precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-mayg-charcoal selection:bg-mayg-maroon selection:text-white">
        {children}
      </body>
    </html>
  );
}
