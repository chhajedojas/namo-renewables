import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Namo Renewables",
  description: "Get in touch with Namo Renewables for bulk biomass briquette inquiries, quotes, and supply contracts. Located in Chalisgaon, Maharashtra.",
};

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-namo-brown-50">
      <section className="relative py-24 md:py-32 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/briquettes-pile.jpg" alt="Background" fill className="object-cover object-center brightness-[0.3]" priority />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)] tracking-tight">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
            Ready to switch to sustainable fuel? Reach out for quotes and inquiries.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-namo-green-900 mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-10 text-lg">
              Whether you are looking for a trial order, have questions about our specifications, or want to establish a long-term supply contract, our team is ready to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-namo-green-100 p-3 rounded-full">
                  <Phone className="text-namo-green-700" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-namo-green-900 mb-1">Phone</h3>
                  <div className="flex flex-col text-gray-700 text-lg">
                    <a href="tel:+919422222132" className="hover:text-namo-green-600 transition-colors">+91 94222 22132</a>
                    <a href="tel:+918888092371" className="hover:text-namo-green-600 transition-colors">+91 88880 92371</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-namo-green-100 p-3 rounded-full">
                  <Mail className="text-namo-green-700" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-namo-green-900 mb-1">Email</h3>
                  <a href="mailto:namorenewables@gmail.com" className="text-gray-700 text-lg hover:text-namo-green-600 transition-colors">
                    namorenewables@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-namo-green-100 p-3 rounded-full">
                  <MapPin className="text-namo-green-700" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-namo-green-900 mb-1">Factory Location</h3>
                  <a href="https://maps.app.goo.gl/BujuLD5nA7n5PXTr5" target="_blank" rel="noopener noreferrer" className="text-gray-700 text-lg max-w-xs hover:text-namo-green-600 transition-colors inline-block mt-1">
                    Chalisgaon, Maharashtra, India <br />
                    <span className="text-sm text-namo-green-700 font-medium underline underline-offset-2 mt-1 inline-block">View on Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border border-namo-brown-200 shadow-sm">
               <h3 className="font-bold text-namo-green-900 mb-3">Business Details</h3>
               <p className="text-gray-600"><strong>GSTIN:</strong> 27AAZFN8018L1ZD</p>
               <p className="text-gray-600"><strong>UDYAM:</strong> UDYAM-MH-23-0402256</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-namo-green-900 mb-6">Send us a Message</h3>
            
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
              <input type="hidden" name="access_key" value="fe76aeab-475e-48e8-8adf-0941ba2f23a9" />
              <input type="hidden" name="subject" value="New Inquiry from Namo Renewables Website" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name / Company Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black focus:ring-2 focus:ring-namo-green-500 focus:border-namo-green-500 outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black focus:ring-2 focus:ring-namo-green-500 focus:border-namo-green-500 outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black focus:ring-2 focus:ring-namo-green-500 focus:border-namo-green-500 outline-none transition-colors"
                    placeholder="+91 99999 99999"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Requirement / Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black focus:ring-2 focus:ring-namo-green-500 focus:border-namo-green-500 outline-none transition-colors resize-none"
                  placeholder="Tell us about your monthly requirement, expected delivery location, etc."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-namo-green-600 hover:bg-namo-green-700 text-white font-bold py-4 rounded-lg transition-colors shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
