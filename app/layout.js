import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.1stchoicewellnessclinic.com/"),
  keywords: [
    "First Choice Wellness Clinic",
    "Wellness Clinic USA",
    "Primary Care Services",
    "Family Medicine Clinic",
    "Health and Wellness Center",
    "Preventive Healthcare",
    "Chronic Disease Management",
    "Wellness and Nutrition Counseling",
    "Holistic Health Services",
  ],
  title: {
    default:
      "First Choice Wellness Clinic - Your Trusted Partner in Health & Wellness",
    template: "%s | First Choice Wellness Clinic",
  },
  description:
    "First Choice Wellness Clinic is dedicated to your health. Our expert team offers personalized, comprehensive care to support your wellness journey.",
  author: "First Choice Wellness Clinic",

  openGraph: {
    title:
      "First Choice Wellness Clinic - Comprehensive Health & Wellness Services",
    description:
      "Discover personalized healthcare at 1st Choice Wellness Clinic. We provide family medicine, preventive care, chronic disease management, and holistic wellness solutions.",
    url: "https://www.1stchoicewellnessclinic.com",
    images: [
      {
        url: "https://www.1stchoicewellnessclinic.com/Images/team.webp",
        width: 1200,
        height: 630,
        alt: "First Choice Wellness Clinic Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "First Choice Wellness Clinic",
    description:
      "Your trusted partner in health and wellness. Visit 1st Choice Wellness Clinic for primary care, preventive medicine, and holistic healthcare services.",
    images: ["https://www.1stchoicewellnessclinic.com/Images/about-data.jpg"],
  },

  alternates: {
    canonical: "https://www.1stchoicewellnessclinic.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "First choice Wellness Clinic",
              url: "https://www.1stchoicewellnessclinic.com",
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-555-5555",
                contactType: "Customer Support",
              },
            }),
          }}
        />
        <meta name="robots" content="index, follow" />

        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased font-manrope">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
