import React from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const Header = () => (
  <header className="bg-blue-600 text-white p-4 w-full">
    <h1 className="text-2xl font-bold">Medizinischer KI-Assistent</h1>
    <nav>
      <Link href="/privat" className="text-white mr-4">Privat</Link>
      <Link href="/professionell" className="text-white">Professionell</Link>
    </nav>
  </header>
);

const RootLayout = ({ children }) => {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
