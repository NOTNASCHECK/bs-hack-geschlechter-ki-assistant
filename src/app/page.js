'use client'
import React from 'react';



const Home = () => {
  return (
    <div className="flex flex-col bg-background text-foreground items-center justify-center custom-div">
      <main className="flex flex-col items-center justify-center flex-grow">
        <h2 className="text-4xl font-bold mb-4">Willkommen beim Medizinischen KI-Assistenten</h2>
        <p>Bitte wählen Sie einen Bereich aus der Navigation.</p>
        <img src="/qr-code.svg" alt="QR Code" className="mt-4" width="300" height="300" />
      </main>
    </div>
  );
};

export default Home;
