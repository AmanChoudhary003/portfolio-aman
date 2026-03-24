import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../component/navbar";
import Footer from "@/component/footer";
import Whatsapp from "@/component/whatsappButton";

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
  title: "Portfolio-Aman",
  description:
    "Hi there! This portfolio is a reflection of my journey, passion, and creativity. I enjoy experimenting with new ideas and turning them into impactful projects. Each piece of work here tells a story of learning and growth.",
  icons: {
    icon: "/images/fasdfa.svg",
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
        <Navbar />
        {children}
        <Whatsapp />
        <Footer />
      </body>
    </html>
  );
}
