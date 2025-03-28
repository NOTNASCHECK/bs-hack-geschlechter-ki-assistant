import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4">Willkommen beim Geschlechter KI-Assistenten</h1>
      <p className="text-lg mb-8">Hier kannst du Fragen zu Geschlechterthemen stellen.</p>
      <input
        type="text"
        placeholder="Stelle deine Frage..."
        className="p-2 border border-gray-300 rounded mb-4 w-1/2"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Frage stellen
      </button>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Antworten:</h2>
        <div className="bg-gray-100 p-4 rounded shadow-md mt-2">
          <p>Hier erscheinen die Antworten auf deine Fragen.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
