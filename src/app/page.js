'use client'
import React, { useState } from 'react';

const Header = () => (
  <header className="bg-blue-600 text-white p-4 w-full">
    <h1 className="text-2xl font-bold">Medizinischer KI-Assistent</h1>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 w-full text-center">
    <p>&copy; {new Date().getFullYear()} Medizinischer KI-Assistent. Alle Rechte vorbehalten.</p>
  </footer>
);

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    symptoms: '',
    notes: '',
  });

  const [recommendation, setRecommendation] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier kannst du die Logik für die Verarbeitung der Eingaben hinzufügen
    console.log(formData);

    // Beispielhafte Empfehlung basierend auf Symptomen
    if (formData.symptoms.toLowerCase().includes('schmerz')) {
      setRecommendation('Es wird empfohlen, einen Arzt aufzusuchen.');
    } else if (formData.symptoms.toLowerCase().includes('husten')) {
      setRecommendation('Bitte viel Flüssigkeit trinken und Ruhe gönnen.');
    } else {
      setRecommendation('Keine spezifische Empfehlung. Bei weiteren Fragen, bitte einen Arzt konsultieren.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow">
        <h2 className="text-4xl font-bold mb-4">Medizinische Eingaben</h2>
        <form onSubmit={handleSubmit} className="w-1/2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded mb-4 w-full"
          />
          <input
            type="number"
            name="age"
            placeholder="Alter"
            value={formData.age}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded mb-4 w-full"
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded mb-4 w-full"
          >
            <option value="">Geschlecht wählen</option>
            <option value="male">Männlich</option>
            <option value="female">Weiblich</option>
            <option value="other">Andere</option>
          </select>
          <textarea
            name="symptoms"
            placeholder="Symptome"
            value={formData.symptoms}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded mb-4 w-full"
          />
          <textarea
            name="notes"
            placeholder="Notizen"
            value={formData.notes}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded mb-4 w-full"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Eingaben speichern
          </button>
        </form>
        {recommendation && (
          <div className="mt-8 p-4 border border-gray-300 rounded bg-gray-100">
            <h2 className="text-xl font-semibold">Empfehlung:</h2>
            <p>{recommendation}</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
