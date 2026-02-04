import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";
import FloatingButtons from "@/components/FloatingButtons";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ratan Mahal Resort | Luxury Hotel in Ratangarh",
  description: "Experience luxury stay, delicious dining, and memorable events at Ratan Mahal Resort - the best hotel and restaurant in Ratangarh, Rajasthan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen pb-16 md:pb-0 font-sans">
          {children}
        </main>
        <Footer />
        <MobileMenu />
        <FloatingButtons />
      </body>
    </html>
  );
}
