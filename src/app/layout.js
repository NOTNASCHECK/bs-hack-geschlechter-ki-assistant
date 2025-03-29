'use client'
import React from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-blue-600 text-white p-4 w-full flex items-center">
      <img src="/genereiere logo für medizinischen ki assistant.png" alt="Logo" className="h-24" />
      <div className="flex flex-col ml-4">
        <h1 className="text-4xl font-bold">PrecisionAId</h1>
        <nav>
          <Link href="/" className={`text-white text-lg mr-4 ${pathname === '/' ? 'font-bold' : ''}`}>Home</Link>
          <Link href="/privat" className={`text-white text-lg mr-4 ${pathname === '/privat' ? 'font-bold' : ''}`}>Privat</Link>
          <Link href="/professionell" className={`text-white text-lg mr-4 ${pathname === '/professionell' ? 'font-bold' : ''}`}>Professionell</Link>
          <Link href="/guidelines" className={`text-white text-lg ${pathname === '/guidelines' ? 'font-bold' : ''}`}>Guidelines</Link>
        </nav>
      </div>
    </header>
  );
};

const RootLayout = ({ children }) => {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
