import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-namo-green-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <span className="font-bold text-2xl tracking-tight mb-4 block text-namo-green-100">Namo Renewables</span>
            <p className="text-namo-green-100/80 mb-6 max-w-md leading-relaxed">
              Leading supplier of high-quality biomass briquettes. We are committed to environmental protection by providing clean, sustainable, and cost-effective renewable fuel alternatives to industries.
            </p>
            <div className="space-y-2 text-sm text-namo-green-100/70">
              <p><span className="font-semibold text-namo-green-100">GSTIN:</span> 27AAZFN8018L1ZD</p>
              <p><span className="font-semibold text-namo-green-100">UDYAM:</span> UDYAM-MH-23-0402256</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-namo-green-100/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-namo-green-100/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-namo-green-100/80 hover:text-white transition-colors">Products & Specs</Link></li>
              <li><Link href="/contact" className="text-namo-green-100/80 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-namo-green-100/80">
                <MapPin className="shrink-0 mt-1" size={18} />
                <a href="https://maps.app.goo.gl/BujuLD5nA7n5PXTr5" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Factory: Chalisgaon, Maharashtra
                </a>
              </li>
              <li className="flex items-center gap-3 text-namo-green-100/80">
                <Phone className="shrink-0" size={18} />
                <div className="flex flex-col">
                  <a href="tel:+919422222132" className="hover:text-white transition-colors">+91 94222 22132</a>
                  <a href="tel:+918888092371" className="hover:text-white transition-colors">+91 88880 92371</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-namo-green-100/80">
                <Mail className="shrink-0" size={18} />
                <a href="mailto:namorenewables@gmail.com" className="hover:text-white transition-colors break-all">namorenewables@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-namo-green-800 mt-12 pt-8 text-center text-sm text-namo-green-100/60">
          <p>&copy; {new Date().getFullYear()} Namo Renewables. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
