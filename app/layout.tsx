import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Condensed } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "300", 
  variable: "--font-roboto-condensed",
});

export const metadata: Metadata = {
  title: "Yatharth Aarush | Portfolio",
  description: "The portfolio of Yatharth Aarush, a software developer. Explore about me, my projects, skills, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0c0c0c]">
        <Analytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
