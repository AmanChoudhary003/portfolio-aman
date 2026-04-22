import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../component/navbar";
import Footer from "@/component/footer";
import Whatsapp from "@/component/whatsappButton";
import DocumentTitle from "@/hook/docTitle";
import ConsentBanner from "@/component/consent";
import Analytics from "@/component/analytics";

import { Big_Shoulders, Geist } from "next/font/google";

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  variable: "--font-big-shoulders",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  description:
    "Explore the professional systems development and design work by Aman. Specializing in robust architectural systems.",
  icons: {
    icon: "/images/fasdfa.svg",
  },
  openGraph: {
    title: "Aman Choudhary | Full Stack Developer & MERN Specialist",
    description:
      "Professional Portfolio: Full Stack Web Development using Next.js, Node.js, and Express. Specializing in responsive Tailwind CSS designs and fluid GSAP interactions.",
    url: "https://portfolio-aman-delta-three.vercel.app/",
    images: [
      {
        url: "https://portfolio-aman-delta-three.vercel.app/images/portfolio.png", // Path to your preview image
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bigShoulders.variable} ${geist.variable}   h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <DocumentTitle />
        <ConsentBanner />
        <Analytics />
        <Navbar />
        {children}
        <Whatsapp />
        <Footer />
      </body>
    </html>
  );
}
