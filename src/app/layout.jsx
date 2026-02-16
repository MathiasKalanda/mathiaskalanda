import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Mathias Kalanda - Full Stack Developer",
  description:
    "Computer Science graduate specializing in modern web technologies with a passion for building scalable and efficient applications.",
  keywords: "Full Stack Developer, React, Next.js, Node.js, TypeScript",
  openGraph: {
    title: "Mathias Kalanda - Full Stack Developer",
    description:
      "Computer Science graduate specializing in modern web technologies with a passion for building scalable and efficient applications.",
    url: "https://mathiaskalanda.com",
    siteName: "Mathias Kalanda Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900`}
      >
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
