import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Namo Renewables",
  description: "Privacy Policy for Namo Renewables. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-lg">
        <h1 className="text-3xl font-bold text-namo-green-900 mb-6 font-[family-name:var(--font-playfair)]">Privacy Policy</h1>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p className="text-sm text-gray-500">Last Updated: September 19, 2026</p>
          
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
            <p>At Namo Renewables, we collect basic contact information when you voluntarily submit it to us via email, phone, or WhatsApp inquiries. This may include your name, company name, email address, and phone number, strictly for the purpose of fulfilling your B2B supply requests and providing quotes.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <p>We use your information exclusively to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Respond to your product inquiries and requests for quotes.</li>
              <li>Facilitate the manufacturing and delivery of biomass briquettes.</li>
              <li>Maintain essential business communication regarding orders and logistics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Data Sharing and Security</h2>
            <p>We do not sell, trade, or rent your personal or corporate information to third parties. We employ standard security measures to protect your data. However, please be aware that no transmission over the internet or email is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Analytics</h2>
            <p>We use privacy-friendly analytics tools to monitor website traffic and improve user experience. This data is aggregated and does not identify individual visitors.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-2 font-medium">Email: contact@namorenewables.in</p>
            <p className="font-medium">Phone: +91 94222 22132</p>
          </section>
        </div>
      </div>
    </div>
  );
}
