import Link from 'next/link';
import Image from 'next/image';
import { Menu, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-4">
              <div className="relative w-16 h-16">
                <Image src="/images/logo.jpg" alt="Namo Renewables Logo" fill className="object-contain mix-blend-multiply" priority />
              </div>
              <span className="font-bold text-2xl md:text-3xl text-namo-green-900 hidden sm:block font-[family-name:var(--font-playfair)]">Namo Renewables</span>
            </Link>
          </div>
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
          <div className="flex items-center md:hidden">
            {/* Mobile menu button could be wired up here */}
            <button className="text-namo-brown-700 hover:text-namo-green-600 p-2">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
