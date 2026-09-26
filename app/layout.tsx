import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reindeer Water | Pure Water. Simply Better.",
  description:
    "Clean, refreshing drinking water produced with care for homes, businesses, and everyday moments.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${manrope.variable} scroll-smooth`}
    >
      <body className="font-body text-brand-dark text-slate600 min-h-screen bg-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
