'use client'
import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 w-full fixed bottom-0 text-center">
    <p>&copy; {new Date().getFullYear()} PrecisionAId. Alle Rechte vorbehalten.</p>
  </footer>
);

const Home = () => {
  return (
    <div className="flex flex-col bg-background text-foreground items-center justify-center custom-div">
      <main className="flex flex-col items-center justify-center flex-grow">
        <h2 className="text-4xl font-bold mb-4">Willkommen beim PrecisionAId</h2>
        <p>Bitte wählen Sie einen Bereich aus der Navigation.</p>
        <img src="/qr-code.svg" alt="QR Code" className="mt-4" width="300" height="300" />
      </main>
      <Footer />
    </div>
    
  );
};

export default Home;
