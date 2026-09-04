import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";

import ProductGallery from "@/components/ProductGallery";

export const metadata: Metadata = {
  title: "Products & Specifications | Namo Renewables",
  description: "Technical specifications for our high-density biomass briquettes. View calorific value, ash content, moisture levels, and packaging details for B2B procurement.",
};

export default function Products() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Header */}
      <section className="relative py-24 md:py-32 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/briquettes-pile.jpg" alt="Background" fill className="object-cover object-center brightness-[0.3]" priority />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)] tracking-tight">Products & Specifications</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
            Industrial-grade biomass briquettes designed for maximum thermal efficiency.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Images Gallery */}
          <ProductGallery />

          {/* Specs */}
          <div>
            <h2 className="text-3xl font-bold text-namo-green-900 mb-6">Technical Specifications</h2>
            <p className="text-gray-600 mb-8">
              Our briquettes undergo strict quality control to ensure they meet the rigorous demands of industrial boilers, furnaces, and heaters. Perfect for B2B procurement and tender requirements.
            </p>
            
            <div className="bg-white rounded-lg border border-namo-brown-200 overflow-hidden shadow-sm mb-8">
              <table className="w-full text-left border-collapse">
                <tbody>
                  <tr className="border-b border-namo-brown-100 bg-namo-brown-50">
                    <th className="py-4 px-6 font-semibold text-namo-green-900 w-1/2">Gross Calorific Value (GCV)</th>
                    <td className="py-4 px-6 text-gray-700">3800 - 4200 Kcal/Kg</td>
                  </tr>
                  <tr className="border-b border-namo-brown-100">
                    <th className="py-4 px-6 font-semibold text-namo-green-900">Moisture Content</th>
                    <td className="py-4 px-6 text-gray-700">Less than 10%</td>
                  </tr>
                  <tr className="border-b border-namo-brown-100 bg-namo-brown-50">
                    <th className="py-4 px-6 font-semibold text-namo-green-900">Ash Content</th>
                    <td className="py-4 px-6 text-gray-700">Less than 10%</td>
                  </tr>
                  <tr className="border-b border-namo-brown-100">
                    <th className="py-4 px-6 font-semibold text-namo-green-900">Shape & Size</th>
                    <td className="py-4 px-6 text-gray-700">Cylindrical (90mm Diameter)</td>
                  </tr>
                  <tr className="border-b border-namo-brown-100 bg-namo-brown-50">
                    <th className="py-4 px-6 font-semibold text-namo-green-900">Bulk Density</th>
                    <td className="py-4 px-6 text-gray-700">~1000 - 1200 Kg/m³</td>
                  </tr>
                  <tr>
                    <th className="py-4 px-6 font-semibold text-namo-green-900">Sulphur Content</th>
                    <td className="py-4 px-6 text-gray-700">Nil</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-namo-green-900 mb-4">Commercial Details</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="text-namo-green-600" size={20} />
                <strong>Packaging:</strong> Loose loading or 50 Kg bags (as per requirement)
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="text-namo-green-600" size={20} />
                <strong>Minimum Order Quantity (MOQ):</strong> 10 Metric Tons
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="text-namo-green-600" size={20} />
                <strong>Production Capacity:</strong> High capacity to meet bulk continuous orders
              </li>
            </ul>

            <div className="flex gap-4">
              <Link href="/contact" className="bg-namo-green-600 hover:bg-namo-green-700 text-white px-8 py-3 rounded-md font-semibold transition-colors text-center w-full md:w-auto">
                Request a Quote
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
