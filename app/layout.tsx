import type { Metadata } from "next";
import {Montserrat, Nunito} from 'next/font/google'
import "./globals.css";

import Header from '@/components/header'
import Footer from '@/components/footer'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nunito",
});


export const metadata: Metadata = {
  title: "Global Humanitarian Aid Foundation",
  description: "A non-profit foundation dedicated to providing humanitarian assistance and supporting people in need.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${nunito.variable}` + " no-scrollbar overflow-auto"}>
      <body className="relative bg-[#F9F7F7]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
