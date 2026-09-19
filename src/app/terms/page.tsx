import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Namo Renewables",
  description: "Terms of Service for Namo Renewables. Please read the terms governing the use of our website and services.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-lg">
        <h1 className="text-3xl font-bold text-namo-green-900 mb-6 font-[family-name:var(--font-playfair)]">Terms of Service</h1>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p className="text-sm text-gray-500">Last Updated: September 19, 2026</p>
          
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Agreement to Terms</h2>
            <p>By accessing or using the namorenewables.in website, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the website.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Business Services</h2>
            <p>Namo Renewables provides B2B manufacturing and supply of biomass briquettes. Information on this website regarding product specifications, calorific values, and supply capabilities is provided for general informational purposes and does not constitute a legally binding contract until a formal purchase order or supply agreement is executed.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Intellectual Property</h2>
            <p>The content, organization, graphics, design, and other matters related to the Site are protected under applicable copyrights and intellectual property laws. The copying, redistribution, use, or publication by you of any such matters or any part of the Site is strictly prohibited without our express written permission.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Limitation of Liability</h2>
            <p>Namo Renewables shall not be liable for any direct, indirect, incidental, consequential, or exemplary damages resulting from your use of this website or any information contained herein.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of India, specifically within the jurisdiction of Maharashtra.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p className="mt-2 font-medium">Email: contact@namorenewables.in</p>
          </section>
        </div>
      </div>
    </div>
  );
}
