import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import ImageGallery from "@/components/ImageGallery";

export const metadata: Metadata = {
  title: "About Us | Namo Renewables",
  description: "Learn about Namo Renewables, our mission to provide clean energy alternatives, and our state-of-the-art biomass briquette manufacturing process.",
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Header */}
      <section className="relative py-24 md:py-32 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/briquettes-pile.jpg" alt="Background" fill className="object-cover object-center brightness-[0.3]" priority />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)] tracking-tight">About Namo Renewables</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
            Pioneering sustainable energy solutions through high-quality biomass fuel.
          </p>
        </div>
      </section>

      {/* Our Story & Mission */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-namo-green-900 mb-6">Our Mission & Leadership</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded and led by <strong>Ashishkumar Chhajed</strong>, Namo Renewables is driven by a single, powerful mission: to accelerate the industrial transition from harmful fossil fuels to clean, sustainable, and renewable energy sources. 
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Based in Chalisgaon, Maharashtra, we have established ourselves as a trusted supplier of biomass briquettes. We utilize agricultural waste—primarily sawdust and corn cobs—and transform them into high-density energy logs. Under Mr. Chhajed&apos;s guidance, our commitment to quality not only provides industries with a cost-effective fuel but also prevents agricultural waste burning, directly reducing air pollution.
            </p>
            <div className="bg-namo-brown-50 p-6 rounded-lg border border-namo-brown-100 mt-8">
              <h3 className="font-bold text-namo-green-900 mb-2">Our Vision</h3>
              <p className="text-gray-600">To be the most reliable and quality-focused supplier of renewable biomass fuel in India, fostering a cleaner environment for future generations.</p>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-namo-green-900 flex flex-col items-center justify-center p-8 border-4 border-namo-green-800">
             {/* Decorative subtle background glow */}
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-namo-green-300 to-transparent"></div>
             
             {/* Logo Badge */}
             <div className="relative z-10 w-48 h-48 md:w-56 md:h-56 mb-8 bg-white rounded-full p-8 shadow-xl flex items-center justify-center">
               <div className="relative w-full h-full">
                 <Image 
                    src="/images/logo.jpg" 
                    alt="Namo Renewables Logo" 
                    fill 
                    className="object-contain"
                  />
               </div>
             </div>
             
             {/* Company Name */}
             <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-white tracking-tight font-[family-name:var(--font-playfair)] text-center">Namo Renewables</h2>
             <p className="relative z-10 text-namo-green-300 mt-4 text-sm md:text-base font-medium tracking-[0.2em] uppercase text-center">Fueling a cleaner future</p>
          </div>
        </div>
      </section>

      {/* Environmental Role & Carbon Credits */}
      <section className="py-16 md:py-24 bg-namo-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-namo-green-700 bg-namo-green-900">
               <Image 
                  src="/images/raw-material-pile.jpg" 
                  alt="Agricultural Waste Repurposing" 
                  fill 
                  className="object-cover opacity-90"
                />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-white mb-6">Our Environmental Impact</h2>
              <p className="text-lg text-namo-green-100 mb-6 leading-relaxed">
                Namo Renewables plays a critical role in the circular economy. By converting agricultural residues (like sawdust and corn cobs) into briquettes, we prevent the open burning of waste—a major cause of smog and particulate pollution in India.
              </p>
              <h3 className="text-xl font-bold text-namo-green-300 mb-3 mt-8">Carbon Credits & ESG Goals</h3>
              <p className="text-lg text-namo-green-100 mb-6 leading-relaxed">
                For our B2B partners, switching to our biomass briquettes is a direct path to achieving corporate ESG (Environmental, Social, and Governance) targets. Since biomass is considered carbon-neutral, replacing coal with our briquettes significantly lowers your net greenhouse gas emissions.
              </p>
              <p className="text-lg text-namo-green-100 leading-relaxed">
                Industries making this switch can leverage these massive emission reductions to generate and claim valuable <strong>Carbon Credits</strong>, turning sustainability into a measurable financial asset for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What are Biomass Briquettes */}
      <section className="py-16 md:py-24 bg-namo-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-namo-green-900 mb-4">What are Biomass Briquettes?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Biomass briquettes, often called &quot;white coal,&quot; are a biofuel substitute for coal and wood. They are made by compressing agricultural waste (mostly sawdust and corn cobs) without any chemical binders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-namo-green-800">Benefits Over Fossil Fuels</h3>
              <ul className="space-y-4">
                {[
                  "Zero net carbon emissions (carbon neutral)",
                  "Significantly lower ash content compared to coal",
                  "No sulfur emissions, eliminating toxic sulfur dioxide gases",
                  "Consistent high burning efficiency and calorific value",
                  "Cost-effective alternative to coal, furnace oil, or diesel",
                  "Easy to handle, transport, and store due to high density"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-namo-green-600 shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <Link href="/products" className="text-namo-green-700 font-bold hover:underline flex items-center gap-2">
                  View our technical specifications <span>&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                 <Image src="/images/briquette-hand-new.jpg" alt="Briquette" fill className="object-cover object-center" />
               </div>
               <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                 <Image src="/images/briquette-side-new.jpg" alt="Briquette Quality" fill className="object-cover object-center" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Gallery */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-namo-green-900 mb-4">Our Manufacturing Facility</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take a look inside our Chalisgaon facility. We maintain extensive covered storage to ensure our raw materials (sawdust and corn cobs) stay dry and our production runs year-round. Click any image to view it in full screen.
            </p>
          </div>
          
          <ImageGallery />

        </div>
      </section>
    </div>
  );
}
