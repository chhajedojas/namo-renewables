"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const productImages = [
  { src: "/images/briquette-cross-section.jpg", alt: "Premium Biomass Briquettes Cross Section" },
  { src: "/images/briquette-side-new.jpg", alt: "Briquette Side Profile" },
  { src: "/images/briquette-texture.jpg", alt: "Briquette Texture" },
];

export default function ProductGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? productImages.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === productImages.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <>
      <div className="space-y-6">
        {/* Main Large Image */}
        <div 
          className="relative h-80 rounded-xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer group"
          onClick={() => setSelectedIndex(0)}
        >
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
          <Image 
            src={productImages[0].src} 
            alt={productImages[0].alt} 
            fill 
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        
        {/* Bottom Two Images */}
        <div className="grid grid-cols-2 gap-6">
           <div 
             className="relative h-40 rounded-xl overflow-hidden shadow-md cursor-pointer group"
             onClick={() => setSelectedIndex(1)}
           >
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
             <Image src={productImages[1].src} alt={productImages[1].alt} fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" />
           </div>
           <div 
             className="relative h-40 rounded-xl overflow-hidden shadow-md cursor-pointer group"
             onClick={() => setSelectedIndex(2)}
           >
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
             <Image src={productImages[2].src} alt={productImages[2].alt} fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" />
           </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 p-2 z-50 transition-colors"
            onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
          >
            <X size={36} />
          </button>
          
          <button 
            className="absolute left-4 md:left-10 text-white/60 hover:text-white p-2 z-50 transition-colors bg-black/20 rounded-full hover:bg-black/50"
            onClick={handlePrevious}
          >
            <ChevronLeft size={48} />
          </button>

          <div className="relative w-full max-w-6xl h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={productImages[selectedIndex].src} 
              alt={productImages[selectedIndex].alt} 
              fill 
              className="object-contain" 
            />
          </div>

          <button 
            className="absolute right-4 md:right-10 text-white/60 hover:text-white p-2 z-50 transition-colors bg-black/20 rounded-full hover:bg-black/50"
            onClick={handleNext}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </>
  );
}
