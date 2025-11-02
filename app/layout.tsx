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
  title: "Yatharth Aarush | Developer",
  description:
    "Portfolio of Yatharth Aarush, a full-stack developer.",
  keywords: [
    "Yatharth Aarush",
    "Yathartha",
    "Portfolio",
    "Software Developer",
    "Full Stack Developer",
  ],
  authors: [{ name: "Yatharth Aarush" }],
  openGraph: {
    title: "Yatharth Aarush | Developer",
    description:
      "Discover the work and projects of Yatharth Aarush, a full-stack developer.",
    url: "https://yathartha-aarush.vercel.app/",
    siteName: "Yatharth Aarush",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://yathartha-aarush.vercel.app/meta-image.png",
        width: 1200,
        height: 600,
        alt: "Yatharth Aarush Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yatharth Aarush | Developer",
    description:
      "Portfolio of Yatharth Aarush, a full-stack developer.",
    images: ["https://yathartha-aarush.vercel.app/meta-image.png"],
  },
  metadataBase: new URL("https://yathartha-aarush.vercel.app"),
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
