import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Condensed } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import Footer from "@/components/Footer";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "300", 
  variable: "--font-roboto-condensed",
});

export const metadata: Metadata = {
  title: "Yathartha Aarush | Developer",
  description:
    "Portfolio of Yathartha Aarush, a full-stack developer.",
  keywords: [
    "Yathartha Aarush",
    "Yathartha",
    "Portfolio",
    "Software Developer",
    "Full Stack Developer",
  ],
  authors: [{ name: "Yathartha Aarush" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yathartha Aarush | Developer",
    description:
      "Discover the work and projects of Yathartha Aarush, a full-stack developer.",
    url: "https://yathartha-aarush.vercel.app/",
    siteName: "Yathartha Aarush",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yathartha Aarush | Developer",
    description:
      "Portfolio of Yathartha Aarush, a full-stack developer.",
  },
  robots: {
    index: true,
    follow: true,
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

        {children}
        <Footer />

      </body>
    </html>
  );
}
