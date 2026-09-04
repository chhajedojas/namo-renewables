"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-4" onClick={() => setIsOpen(false)}>
              <div className="relative w-16 h-16">
                <Image src="/images/logo.jpg" alt="Namo Renewables Logo" fill className="object-contain mix-blend-multiply" priority />
              </div>
              <span className="font-bold text-2xl md:text-3xl text-namo-green-900 hidden sm:block font-[family-name:var(--font-playfair)]">Namo Renewables</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-namo-brown-700 hover:text-namo-green-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-namo-brown-700 hover:text-namo-green-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/products" className="text-namo-brown-700 hover:text-namo-green-600 font-medium transition-colors">
              Products
            </Link>
            <Link href="/contact" className="text-namo-brown-700 hover:text-namo-green-600 font-medium transition-colors">
              Contact
            </Link>
            <Link href="/contact" className="bg-namo-green-600 hover:bg-namo-green-700 text-white px-6 py-2 rounded-md font-medium transition-colors flex items-center gap-2">
              <Phone size={18} />
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-namo-brown-700 hover:text-namo-green-600 p-2"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-inner">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-namo-brown-700 hover:text-namo-green-600 hover:bg-namo-brown-50 rounded-md"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-namo-brown-700 hover:text-namo-green-600 hover:bg-namo-brown-50 rounded-md"
            >
              About
            </Link>
            <Link 
              href="/products" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-namo-brown-700 hover:text-namo-green-600 hover:bg-namo-brown-50 rounded-md"
            >
              Products
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-namo-brown-700 hover:text-namo-green-600 hover:bg-namo-brown-50 rounded-md"
            >
              Contact
            </Link>
            <div className="pt-4 pb-2">
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-namo-green-600 hover:bg-namo-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                <Phone size={18} />
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
