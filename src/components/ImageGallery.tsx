"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const factoryImages = [
  { src: "/images/factory-2.jpg", alt: "Factory Storage Area" },
  { src: "/images/factory-machine.jpg", alt: "Manufacturing Machine" },
  { src: "/images/factory-3.jpg", alt: "Raw Material Processing" },
];

export default function ImageGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? factoryImages.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === factoryImages.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {factoryImages.map((img, idx) => (
          <div 
            key={idx} 
            className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-md group cursor-pointer"
            onClick={() => setSelectedIndex(idx)}
          >
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
            <Image 
              src={img.src} 
              alt={img.alt} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-110" 
            />
          </div>
        ))}
      </div>

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
              src={factoryImages[selectedIndex].src} 
              alt={factoryImages[selectedIndex].alt} 
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
