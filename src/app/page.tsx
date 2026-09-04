import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, Factory } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/briquettes-pile.jpg" 
            alt="Biomass Briquettes" 
            fill 
            className="object-cover object-center brightness-[0.4]"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight font-[family-name:var(--font-playfair)]">
            Fueling a <span className="text-namo-green-400">Cleaner</span> Future
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Namo Renewables provides premium biomass briquettes. We turn agricultural waste—primarily sawdust and corn cobs—into high-efficiency, sustainable fuel to power your business and protect our planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="bg-namo-green-600 hover:bg-namo-green-700 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors flex items-center justify-center gap-2">
              View Products
              <ArrowRight size={20} />
            </Link>
            <Link href="/contact" className="bg-white hover:bg-gray-100 text-namo-green-900 px-8 py-4 rounded-md font-semibold text-lg transition-colors">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-namo-brown-100 py-8 border-y border-namo-brown-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80">
            <div className="text-namo-green-900 font-semibold flex items-center gap-2 text-lg">
              <span className="bg-namo-green-900 text-white text-xs px-2 py-1 rounded">GSTIN</span>
              27AAZFN8018L1ZD
            </div>
            <div className="text-namo-green-900 font-semibold flex items-center gap-2 text-lg">
              <span className="bg-namo-green-900 text-white text-xs px-2 py-1 rounded">UDYAM</span>
              MH-23-0402256
            </div>
            <div className="text-namo-green-900 font-semibold flex items-center gap-2 text-lg">
               ✓ Carbon Neutral
            </div>
            <div className="text-namo-green-900 font-semibold flex items-center gap-2 text-lg">
               ✓ Eco-Friendly
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-namo-green-900 mb-6 font-[family-name:var(--font-playfair)]">Why Choose Namo Renewables?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are an industry leader in manufacturing high-density biomass briquettes, providing a reliable and eco-friendly alternative to coal and wood.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-namo-green-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                <Leaf className="text-namo-green-600" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-namo-green-800 mb-4">100% Sustainable</h3>
              <p className="text-gray-600 text-lg">
                Reduce your carbon footprint significantly compared to coal or fossil fuels. Our briquettes are made from 100% natural agricultural residue, primarily sawdust and corn cobs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-namo-green-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                <Factory className="text-namo-green-600" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-namo-green-800 mb-4">High Capacity Output</h3>
              <p className="text-gray-600 text-lg">
                Our state-of-the-art facility in Chalisgaon ensures a consistent, high-volume supply to keep your industrial boilers and furnaces running without interruption.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-namo-green-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="text-namo-green-600" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-namo-green-800 mb-4">Uncompromised Quality</h3>
              <p className="text-gray-600 text-lg">
                High calorific value, low moisture, and minimal ash content. We strictly monitor our manufacturing process to deliver maximum thermal efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Storytelling */}
      <section className="py-20 md:py-32 bg-namo-green-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">Inside Our Operations</h2>
            <p className="text-xl text-namo-green-100 max-w-3xl mx-auto">
              From raw agricultural waste (sawdust and corn cobs) to high-density fuel briquettes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative h-64 rounded-xl overflow-hidden group">
              <Image src="/images/raw-material-hand.jpg" alt="Raw Material Inspection" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <span className="font-semibold text-lg">Raw Material Selection (Sawdust & Corn Cobs)</span>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden group">
              <Image src="/images/briquette-hand-new.jpg" alt="High Density Briquette End View" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <span className="font-semibold text-lg">High Density Output</span>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden group">
              <Image src="/images/briquette-side-new.jpg" alt="Briquette Quality Check" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <span className="font-semibold text-lg">Quality Assurance</span>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden group">
              <Image src="/images/factory-machine.jpg" alt="Manufacturing Machine" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <span className="font-semibold text-lg">Manufacturing Facility</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-namo-green-900 mb-6">Ready to switch to sustainable fuel?</h2>
          <p className="text-xl text-gray-600 mb-10">Contact our sales team today to discuss your requirements and get a competitive quote.</p>
          <Link href="/contact" className="inline-block bg-namo-green-600 hover:bg-namo-green-700 text-white px-10 py-4 rounded-md font-bold text-xl transition-colors shadow-lg">
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
