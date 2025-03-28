'use client'
import React, { useState } from 'react';

const Privat = () => {
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
    if (formData.symptoms.toLowerCase().includes('schmerz')) {
      setRecommendation('Es wird empfohlen, einen Arzt aufzusuchen.');
    } else if (formData.symptoms.toLowerCase().includes('husten')) {
      setRecommendation('Bitte viel Flüssigkeit trinken und Ruhe gönnen.');
    } else {
      setRecommendation('Keine spezifische Empfehlung. Bei weiteren Fragen, bitte einen Arzt konsultieren.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground items-center justify-center">
      <h2 className="text-4xl font-bold mb-4">Privater Bereich</h2>
      <form onSubmit={handleSubmit} className="w-1/2">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="p-2 border border-gray-300 rounded mb-4 w-full" />
        <input type="number" name="age" placeholder="Alter" value={formData.age} onChange={handleChange} className="p-2 border border-gray-300 rounded mb-4 w-full" />
        <select name="gender" value={formData.gender} onChange={handleChange} className="p-2 border border-gray-300 rounded mb-4 w-full">
          <option value="">Geschlecht wählen</option>
          <option value="male">Männlich</option>
          <option value="female">Weiblich</option>
          <option value="other">Andere</option>
        </select>
        <textarea name="symptoms" placeholder="Symptome" value={formData.symptoms} onChange={handleChange} className="p-2 border border-gray-300 rounded mb-4 w-full" />
        <textarea name="notes" placeholder="Notizen" value={formData.notes} onChange={handleChange} className="p-2 border border-gray-300 rounded mb-4 w-full" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Eingaben speichern</button>
      </form>
      {recommendation && (
        <div className="mt-8 p-4 border border-gray-300 rounded bg-gray-100">
          <h2 className="text-xl font-semibold">Empfehlung:</h2>
          <p>{recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default Privat; 