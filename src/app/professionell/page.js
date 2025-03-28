'use client'
import React, { useState } from 'react';

const Professionell = () => {
  const [formData, setFormData] = useState({
    name: '',
    profession: '',
    experience: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier kannst du die Logik für die Verarbeitung der Eingaben hinzufügen
    console.log(formData);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground items-center justify-center">
      <h2 className="text-4xl font-bold mb-4">Professioneller Bereich</h2>
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
          type="text"
          name="profession"
          placeholder="Beruf"
          value={formData.profession}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded mb-4 w-full"
        />
        <input
          type="number"
          name="experience"
          placeholder="Jahre Erfahrung"
          value={formData.experience}
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
    </div>
  );
};

export default Professionell; 