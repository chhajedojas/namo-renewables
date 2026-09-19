import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.namorenewables.in"),
  alternates: {
    canonical: '/',
  },
  title: "Namo Renewables - Premium Biomass Briquettes",
  description: "Sustainable, high-density biomass briquettes manufactured from agricultural waste. Reliable, eco-friendly fuel for industrial boilers and furnaces.",
  keywords: ["biomass briquettes", "biofuel", "renewable energy", "Namo Renewables", "Maharashtra briquettes supplier", "clean energy"],
  openGraph: {
    title: "Namo Renewables - Premium Biomass Briquettes",
    description: "Sustainable, high-density biomass briquettes manufactured from agricultural waste.",
    url: "https://www.namorenewables.in",
    siteName: "Namo Renewables",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Namo Renewables",
    description: "Sustainable, high-density biomass briquettes manufactured from agricultural waste.",
    images: ["/images/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* LocalBusiness Structured Data for SEO and Trust */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Namo Renewables",
              "image": "",
              "email": "contact@namorenewables.in",
              "telephone": ["+919422222132", "+918888092371"],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chalisgaon",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "taxID": "27AAZFN8018L1ZD",
              "description": "Leading biomass briquettes supplier in Maharashtra."
            })
          }}
        />
      </head>
      <body className={`${inter.className} ${playfair.variable} min-h-screen flex flex-col bg-namo-brown-50`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        
        <WhatsAppButton />
        <Analytics />
        <GoogleAnalytics gaId="G-VD3QGJBF5K" />
      </body>
    </html>
  );
}
