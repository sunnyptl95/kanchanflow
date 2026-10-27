import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const display = Barlow_Condensed({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-barlow", display: "swap" });
const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://kanchanflow.vercel.app"),
  title: { default: "KanchanFlow | CRM for manufacturers", template: "%s | KanchanFlow" },
  description: "Quotes, bills of material, work orders and WhatsApp updates in one CRM built for manufacturers.",
  openGraph: { siteName: "KanchanFlow", type: "website", locale: "en_IN" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} bg-paper font-sans text-graphite antialiased`}>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
