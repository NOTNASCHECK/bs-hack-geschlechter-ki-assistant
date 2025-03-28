'use client'
import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 w-full text-center">
    <p>&copy; {new Date().getFullYear()} Medizinischer KI-Assistent. Alle Rechte vorbehalten.</p>
  </footer>
);

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex flex-col items-center justify-center flex-grow">
        <h2 className="text-4xl font-bold mb-4">Willkommen beim Medizinischen KI-Assistenten</h2>
        <p>Bitte wählen Sie einen Bereich aus der Navigation.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
